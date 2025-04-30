"use client"

import { useState } from "react";
import DayList from "./components/DayList";
import MonthView from "./components/MonthView";
import Pomodoro from "./components/Pomodoro";
import { Theme } from "./utils/Theme";
import { ThemeContext } from "./utils/ThemeContext";

const drishtiTheme: Theme = {
	backgroundProperty: "bg-[url(/drishtitheme/background.jpg)]",
	name: "drishti",
	logoProperty: "bg-[url(/drishtitheme/Seashell.png)]",
};

export default function Home() {
	const [theme, setTheme] = useState(drishtiTheme);
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div
				className={`h-screen w-screen flex items-center ${theme.backgroundProperty} space-x-8 px-8 bg-cover py-10`}
				data-theme={theme.name}
				style={{
					backgroundColor: "rgba(255,255,255,0.5)",
					backgroundBlendMode: "lighten",
				}}
			>
				<div className="flex flex-col h-full">
					<Pomodoro />
					<DayList />
				</div>
				<div className="w-full h-full flex">
					<MonthView />
				</div>
				<div className="h-full flex flex-col space-y-3">
					<DayList />
					<DayList />
				</div>
			</div>
		</ThemeContext.Provider>
	);
}
