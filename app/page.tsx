import DayList from "./components/DayList";
import MonthView from "./components/MonthView";
import Pomodoro from "./components/Pomodoro";

export default function Home() {
	return (
		<div className="h-screen w-screen flex items-center">
			<div className="flex flex-col h-full py-10">
				<Pomodoro />
				<DayList />
			</div>
			<MonthView />
		</div>
	);
}
