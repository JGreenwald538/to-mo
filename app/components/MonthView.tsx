"use client";

import { useState } from "react";
import DayList from "./DayList";
import DayView from "./DayView";


export default function MonthView() {
	const [month, setMonth] = useState(new Date().getMonth());
	const [year, setYear] = useState(new Date().getFullYear());
	const firstDayOfMonth = new Date(year, month, 1);
	const firstDayOfWeek = firstDayOfMonth.getDay();
	const lastMonth = new Date(year, month, 0);
	const lastDateOfLastMonth = lastMonth.getDate();

	function getDay(i: number) {
		let day = i - firstDayOfWeek + 1;
		let dark = false;
		if (i < firstDayOfWeek) {
			day = lastDateOfLastMonth - firstDayOfWeek + i + 1;
			dark = true;
		} else if (i > new Date(year, month + 1, 0).getDate() + firstDayOfWeek - 1) {
			day = i - new Date(year, month + 2, 0).getDate() - firstDayOfWeek + 2;
			dark = true;
		}

		return (
			<DayView number={day} key={i} dark={dark}/>
		)
	}

	return (
		<div className="flex border-2 border-gray-300 rounded-xl mx-8 h-full my-16 w-full max-h-[calc(100vh-5rem)] flex-col">
			<div className="text-center p-4 border-b-2 border-gray-300 w-full h-fit text-2xl">
				{new Date(year, month).toLocaleString(undefined, {
					month: "long",
					year: "numeric",
				})}
			</div>
			<div className="flex flex-row w-full h-fit">
				{Array.from({ length: 7 }, (_, i) => (
					<div
						key={i}
						className="text-center border-b-2 border-gray-300 p-2 h-fit w-full"
					>
						{["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][i]}
					</div>
				))}
			</div>
			<div className="grid grid-cols-7 w-full h-full">
				{Array.from({ length: 42 }, (_, i) => (
					getDay(i)
				))}
			</div>
		</div>
	);
}

