"use client";

import { useState } from "react";
import ListView from "./components/ListView";
import MonthView from "./components/MonthView";
import Pomodoro from "./components/Pomodoro";
import { Theme } from "./utils/Theme";
import { ThemeContext, FocusLengthContext, TasksContext } from "./utils/Context";
import DailyAffirmations from "./components/DailyAffirmations";

const drishtiTheme: Theme = {
	backgroundProperty: "bg-[url(/drishtitheme/background.jpg)]",
	name: "drishti",
	logoProperty: "bg-[url(/drishtitheme/Seashell.png)]",
};

const dailyTasks = [
	{
		name: "Task 1",
		minutes: 30,
		date: new Date(),
		type: "daily",
		status: false,
		description: "Complete the project report",
	},
	{
		name: "Task 2",
		minutes: 45,
		date: new Date(),
		type: "daily",
		status: false,
		description: "Go for a run",
	},
];

const miscTasks = [
	{
		name: "Misc Task 1",
		minutes: 20,
		date: new Date(),
		type: "misc",
		status: false,
		description: "Read a book",
	},
];

export default function Home() {
	const [theme, setTheme] = useState(drishtiTheme);
	const [focusLength, setFocusLength] = useState(25);
	const [tasks, setTasks] = useState([...miscTasks, ...dailyTasks]);
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<FocusLengthContext.Provider value={{ focusLength, setFocusLength }}>
				<TasksContext.Provider value={{ tasks, setTasks }}>
					<div
						className={`h-screen w-screen flex items-center ${theme.backgroundProperty} space-x-8 px-8 bg-cover py-4`}
						data-theme={theme.name}
						style={{
							backgroundColor: "rgba(255,255,255,0.5)",
							backgroundBlendMode: "lighten",
						}}
					>
						<div className="flex flex-col h-full">
							<Pomodoro />
							<ListView type="day" />
						</div>
						<div className="w-full h-full max-h-full flex flex-col space-y-4">
							<DailyAffirmations />
							<MonthView />
						</div>
						<div className="h-full flex flex-col space-y-3">
							<ListView type="daily" />
							<ListView type="misc" />
						</div>
					</div>
				</TasksContext.Provider>
			</FocusLengthContext.Provider>
		</ThemeContext.Provider>
	);
}
