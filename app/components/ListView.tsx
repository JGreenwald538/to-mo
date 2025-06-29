import { useContext } from "react";
import { TasksContext } from "../utils/Context";
import TodoItem from "./TodoItem";
import AddTask from "./AddTask";
import AddTaskButton from "./AddTaskButton";

const taskTypeNames = {
	misc: "Miscellaneous Task",
	daily: "Daily Task",
}

export default function DayView({ type }: { type: string }) {
	const { tasks: allTasks } = useContext(TasksContext);
	let tasks = [];

	if (type === "day") {
		tasks = allTasks || [];
	} else {
		tasks = allTasks?.filter((task) => task.type === type) || [];
	}

	return (
		<div
			className="border-10 border-gray-300 rounded-4xl flex flex-col justify-self-end overflow-scroll h-full items-center w-52"
			style={{
				backgroundColor: "var(--color-primary)",
				borderColor: "var(--color-secondary)",
				scrollbarColor: "var(--color-secondary)",
			}}
		>
			<div
				className="text-center pt-4 text-white border-b-1 w-fit self-center text-xl"
				style={{
					borderColor: "var(--color-secondary)",
				}}
			>
				{type === "day" ? new Date().toLocaleDateString(undefined, {
					day: "2-digit",
					month: "2-digit",
					year: "2-digit",
				}) : type.substring(0, 1).toUpperCase() + type.substring(1)}
			</div>
			<div
				className="flex flex-col overflow-y-scroll h-full my-4 flex-1 space-y-4"
				style={{
					scrollbarColor: "var(--color-secondary)",
				}}
			>
				{tasks.map((task, index) => (
					<TodoItem task={task} key={index} />
				))}
			</div>
			<AddTaskButton
				className="text-white py-1 w-fit my-2 rounded-3xl px-8 self-center text-2xl border-4 border-white"
				style={{
					backgroundColor: "var(--color-secondary)",
					color: "var(--color-primary)",
					borderColor: "var(--color-quartenary)",
				}}
				task={{
					name: "",
					date: new Date(),
					minutes: 0,
					type: type === "day" ? "" : taskTypeNames[type as keyof typeof taskTypeNames] || "",
					status: "",
					description: "",
				}}
			>
				Add Task
			</AddTaskButton>
		</div>
	);
}