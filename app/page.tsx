"use client";

import { useEffect, useState } from "react";
import ListView from "./components/ListView";
import MonthView from "./components/MonthView";
import Pomodoro from "./components/Pomodoro";
import { Theme } from "./utils/Theme";
import {
	ThemeContext,
	FocusLengthContext,
	TasksContext,
	TaskToEditContext,
} from "./utils/Context";
import DailyAffirmations from "./components/DailyAffirmations";
import { Task } from "./utils/TaskType";
import AddTask from "./components/AddTask";
import { themes } from "./lib/Themes";
import ThemeSwitcher from "./components/ThemeSwitcher";

const dailyTasks = [
	{
		name: "Task 1",
		minutes: 30,
		date: new Date(),
		type: "daily",
		status: "false",
		description: "Complete the project report",
	},
	{
		name: "Task 2",
		minutes: 45,
		date: new Date(),
		type: "daily",
		status: "false",
		description: "Go for a run",
	},
];

const miscTasks = [
	{
		name: "Misc Task 1",
		minutes: 20,
		date: new Date(),
		type: "misc",
		status: "false",
		description: "Read a book",
	},
];

export default function Home() {
	const [theme, setTheme] = useState(themes[0]);
	const [focusLength, setFocusLength] = useState(25);
	const [tasks, setTasks] = useState([...miscTasks, ...dailyTasks]);
	const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);

	useEffect(() => {
		const fetchTasks = async () => {
			const storedTasks = localStorage.getItem("tasks");
			if (storedTasks) {
				setTasks(
					JSON.parse(storedTasks).map((task: Task) => ({
						...task,
						date: new Date(task.date),
					}))
				);
			}
		};
		fetchTasks();
	}, []);

	useEffect(() => {
		if (tasks) {
			localStorage.setItem("tasks", JSON.stringify(tasks));
		}
	}, [tasks]);

	useEffect(() => {
		const fetchTheme = async () => {
			const storedTheme = localStorage.getItem("theme");
			if (storedTheme) {
				setTheme(JSON.parse(storedTheme));
			}
		};
		fetchTheme();
	}, []);

	useEffect(() => {
		if (theme) {
			localStorage.setItem("theme", JSON.stringify(theme));
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<FocusLengthContext.Provider value={{ focusLength, setFocusLength }}>
				<TasksContext.Provider value={{ tasks, setTasks }}>
					<TaskToEditContext.Provider value={{ taskToEdit, setTaskToEdit }}>
						<div data-theme={"drishti"}>
							<div
								className={`min-h-screen md:h-screen w-screen flex ${theme.backgroundProperty} md:space-x-8 md:px-8 px-4 bg-cover py-4 md:flex-row flex-col bg-repeat-y md:space-y-0 space-y-4`}
								style={{
									backgroundColor: "rgba(255,255,255,0.5)",
									backgroundBlendMode: "lighten",
								}}
							>
								<div className="w-full h-full max-h-full flex flex-col space-y-4 md:hidden">
									<DailyAffirmations />
									<MonthView />
								</div>
								<div className="flex flex-col h-full">
									<Pomodoro />
									<ListView type="day" />
								</div>
								<div className="w-full h-full min-h-full md:flex flex-col space-y-4 md:visible invisible hidden">
									<DailyAffirmations />
									<MonthView />
								</div>
								<div className="h-full flex flex-col space-y-3">
									<ThemeSwitcher />
									<ListView type="daily" />
									<ListView type="misc" />
								</div>
							</div>
							{taskToEdit && <AddTask />}
						</div>
					</TaskToEditContext.Provider>
				</TasksContext.Provider>
			</FocusLengthContext.Provider>
		</ThemeContext.Provider>
	);
}
