"use client";

import { useContext, useState } from "react";
import DayView from "./DayView";
import { TasksContext, ThemeContext } from "../utils/Context";
import { Task } from "../utils/TaskType";

export default function MonthView() {
	const [month, setMonth] = useState(new Date().getMonth());
	const [year, setYear] = useState(new Date().getFullYear());
	const firstDayOfMonth = new Date(year, month, 1);
	const firstDayOfWeek = firstDayOfMonth.getDay();
	const lastMonth = new Date(year, month, 0);
	const lastDateOfLastMonth = lastMonth.getDate();
	const { theme } = useContext(ThemeContext);
	const { tasks } = useContext(TasksContext);

	function getDay(i: number) {
		let day = i - firstDayOfWeek + 1;
		let dark = false;
		if (i < firstDayOfWeek) {
			day = lastDateOfLastMonth - firstDayOfWeek + i + 1;
			dark = true;
		} else if (
			i >
			new Date(year, month + 1, 0).getDate() + firstDayOfWeek - 1
		) {
			day = i - new Date(year, month + 2, 0).getDate() - firstDayOfWeek + 2;
			dark = true;
		}

		let dayTasks: Task[] | undefined = [];

		if (!(i < firstDayOfWeek)) {
			dayTasks = tasks?.filter((task) => {
				const taskDate = task.date.toLocaleDateString(undefined, {
					day: "2-digit",
					month: "2-digit",
					year: "numeric",
				});
				const dayDate = new Date(year, month, day).toLocaleDateString(
					undefined,
					{
						day: "2-digit",
						month: "2-digit",
						year: "numeric",
					}
				);
				return taskDate === dayDate;
			});
		}

		return <DayView number={day} key={i} dark={dark} tasks={dayTasks} />;
	}

	function decreaseMonth() {
		if (month == 0) {
			setYear(year - 1);
			setMonth(12);
		} else {
			setMonth(month - 1);
		}
	}

	function increaseMonth() {
		if (month == 12) {
			setYear(year + 1);
			setMonth(0);
		} else {
			setMonth(month + 1);
		}
	}

	return (
		<div
			className="flex border-10 border-white rounded-3xl h-full w-full flex-col"
			data-theme={theme?.name}
			style={{
				backgroundColor: "var(--color-secondary)",
			}}
		>
			{/* Month header - keep compact with h-fit */}
			<div
				className="text-center p-2 border-b-2 border-black h-fit text-2xl mx-4 flex-row flex justify-center space-x-10"
				style={{
					color: "var(--color-primary)",
				}}
			>
				<button onClick={decreaseMonth} className="hover:cursor-grab">
					{"<"}
				</button>
				<div>
					{new Date(year, month).toLocaleString(undefined, {
						month: "long",
						year: "numeric",
					})}
				</div>
				<button onClick={increaseMonth} className="hover:cursor-grab">
					{">"}
				</button>
			</div>

			{/* Weekday header - keep compact */}
			<div className="flex flex-row h-fit mx-4">
				{Array.from({ length: 7 }, (_, i) => (
					<div
						key={i}
						className="text-center border-b-2 border-black py-1 h-fit w-full text-xl"
						style={{
							color: "var(--color-primary)",
						}}
					>
						{["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][i]}
					</div>
				))}
			</div>

			{/* Calendar grid - make it flex-grow to take remaining space */}
			<div className="grid grid-cols-7 w-full flex-grow auto-rows-[minmax(0,0.5fr)] overflow-hidden">
				{Array.from({ length: 42 }, (_, i) => getDay(i))}
			</div>
		</div>
	);
}
