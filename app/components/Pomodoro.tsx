"use client";

import { useContext, /*useEffect,*/ useState } from "react";
import { ThemeContext } from "../utils/Context";

export default function Pomodoro() {
	// const [start, setStart] = useState(false);
	const [timer] = useState(0);
	// const [focusTime, setFocusTime] = useState(25); // Default focus time in minutes
	// const [breakTime, setBreakTime] = useState(5); // Default break time in minutes
	// const [isBreak, setIsBreak] = useState(false);
	const timerDisplay = () => {
		let displayTimer = "";
		if (timer / 60 >= 10) {
			displayTimer += Math.floor(timer / 60);
		} else {
			displayTimer += "0" + Math.floor(timer / 60);
		}
		displayTimer += " : ";
		if (timer % 60 >= 10) {
			displayTimer += timer % 60;
		} else {
			displayTimer += "0" + (timer % 60);
		}
		return displayTimer;
	};

	// useEffect(() => {
	// 	let interval: NodeJS.Timeout | null = null;

	// 	if (start) {
	// 		interval = setInterval(() => {
	// 			setTimer((prevTimer) => prevTimer + 1); // Use functional update to ensure the latest state
	// 		}, 1000);
	// 	} else if (!start && interval) {
	// 		clearInterval(interval); // Cleanup interval when stopped
	// 	}

	// 	return () => {
	// 		if (interval) clearInterval(interval); // Cleanup on component unmount
	// 	};
	// }, [start]); // Re-run effect when `start` changes

	// const startOnClick = () => {
	// 	setStart(true);
	// };

	const { theme } = useContext(ThemeContext);

	console.log(theme?.setTomoProperty);

	return (
		<div className="flex flex-col space-y-2 mb-4">
			<div
				className={`flex flex-col items-center justify-center rounded mx-8 ${theme?.logoProperty} bg-contain bg-no-repeat h-36 bg-center`}
				data-theme={theme?.name}
			>
				{/* <div>Pomodoro</div> */}
				<div
					className={`text-white rounded-4xl px-4 py-1 text-xl ${theme?.setTomoProperty}`}
					style={{
						backgroundColor: "var(--color-primary)",
					}}
				>
					{timerDisplay()}
				</div>
				{/* <div>
					{isBreak ? "Break Time" : "Focus Time"}:{" "}
					{isBreak ? breakTime : focusTime} minutes
				</div>

				{start ? (
					<button onClick={() => setStart(!start)}>Stop Timer</button>
				) : (
					<button onClick={startOnClick}>Start Timer</button>
				)} */}
			</div>
			<button
				className={`self-center text-lg border-4 border-white w-fit rounded-4xl px-6 hover:cursor-pointer`}
				style={{
					backgroundColor: "var(--color-secondary)",
					color: "var(--color-primary)",
				}}
			>
				Set TO-MO
			</button>
		</div>
	);
}
