"use client";

import { useEffect, useState } from "react";

export default function Pomodoro() {
	const [start, setStart] = useState(false);
	const [timer, setTimer] = useState(0);
	const [focusTime, setFocusTime] = useState(25); // Default focus time in minutes
	const [breakTime, setBreakTime] = useState(5); // Default break time in minutes
	const [isBreak, setIsBreak] = useState(false);
	const timerDisplay = () => {
		let displayTimer = "";
		if (timer / 60 >= 10) {
			displayTimer += Math.floor(timer / 60);
		} else {
			displayTimer += "0" + Math.floor(timer / 60);
		}
		displayTimer += ":";
		if (timer % 60 >= 10) {
			displayTimer += timer % 60;
		} else {
			displayTimer += "0" + (timer % 60);
		}
		return displayTimer;
	};

	useEffect(() => {
		let interval: NodeJS.Timeout | null = null;

		if (start) {
			interval = setInterval(() => {
				setTimer((prevTimer) => prevTimer + 1); // Use functional update to ensure the latest state
			}, 1000);
		} else if (!start && interval) {
			clearInterval(interval); // Cleanup interval when stopped
		}

		return () => {
			if (interval) clearInterval(interval); // Cleanup on component unmount
		};
	}, [start]); // Re-run effect when `start` changes

	const startOnClick = () => {
		setStart(true);
	};

	return (
		<div className="flex flex-col h-full max-h-screen mb-4 items-center rounded bg-red-500 border-2 mx-8">
			<div>Pomodoro</div>
			<div>{timerDisplay()}</div>
			<div>
				{isBreak ? "Break Time" : "Focus Time"}: {isBreak ? breakTime : focusTime} minutes
			</div>
			<div>
				<button
					onClick={() => {
						setFocusTime((prev) => (prev > 1 ? prev - 1 : prev));
					}}
					className="bg-blue-500 text-white px-2 py-1 rounded"
				>
					Decrease Focus Time
				</button>
				<button
					onClick={() => {
						setFocusTime((prev) => prev + 1);
					}}
					className="bg-blue-500 text-white px-2 py-1 rounded"
				>
					Increase Focus Time
				</button>
				<button
					onClick={() => {
						setBreakTime((prev) => (prev > 1 ? prev - 1 : prev));
					}}
					className="bg-blue-500 text-white px-2 py-1 rounded"
				>
					Decrease Break Time
				</button>
				<button
					onClick={() => {
						setBreakTime((prev) => prev + 1);
					}}
					className="bg-blue-500 text-white px-2 py-1 rounded"
				>
					Increase Break Time
				</button>
			</div>
			<div>
				<button
					onClick={() => {
						setIsBreak((prev) => !prev);
						setTimer(0);
					}}
					className="bg-blue-500 text-white px-2 py-1 rounded"
				>
					Toggle Break/Focus
				</button>
			</div>
			<div>
				<button
					onClick={() => {
						setTimer(0);
						setStart(false);
						setIsBreak(false);
						setFocusTime(25);
						setBreakTime(5);
					}}
					className="bg-blue-500 text-white px-2 py-1 rounded"
				>
					Reset Timer
				</button>
			</div>
			<div>
				<button
					onClick={() => {
						setTimer(0);
						setStart(false);
						setIsBreak(false);
						setFocusTime(25);
						setBreakTime(5);
						setStart(true);
					}}
					className="bg-blue-500 text-white px-2 py-1 rounded"
				>
					Start Timer
				</button>
			</div>
			<div>
				<button
					onClick={() => {
						setTimer(0);
						setStart(false);
						setIsBreak(false);
						setFocusTime(25);
						setBreakTime(5);
						setStart(true);
						setIsBreak(true);
					}}
					className="bg-blue-500 text-white px-2 py-1 rounded"
				>
					Start Break Timer
				</button>
			</div>

			{start ? (
				<button onClick={() => setStart(!start)}>Stop Timer</button>
			) : (
				<button onClick={startOnClick}>Start Timer</button>
			)}
		</div>
	);
}
