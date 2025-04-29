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
		<ThemeContext.Provider value={{theme, setTheme}}>
			<div
				className={`h-screen w-screen flex items-center ${theme.backgroundProperty}`}
				data-theme={theme}
				style={{
					backgroundColor: "rgba(255,255,255,0.5)",
    				backgroundBlendMode: "lighten"
				}}
			>
				<div className="flex flex-col h-full py-10">
					<Pomodoro />
					<DayList />
				</div>
				<MonthView />
			</div>
		</ThemeContext.Provider>
	);
}
