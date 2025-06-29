import { useContext } from "react";
import { FocusLengthContext, TasksContext } from "../utils/Context";
import { Task } from "../utils/TaskType";

export default function TodoItem({ task }: { task: Task }) {
	const { name, minutes } = task;
	const { focusLength } = useContext(FocusLengthContext);
	const { tasks, setTasks } = useContext(TasksContext);
	return (
		<div
			className="border-2 rounded-2xl"
			style={{ borderColor: "var(--color-secondary)" }}
			onClick={() => {
				task.status = task.status === "Completed" ? "Incomplete" : "Completed";
				if (setTasks && tasks) {
					const tempTasks = [...tasks];
					tempTasks[tasks.indexOf(task)] = task;
					setTasks(tempTasks);
				}
			}}
		>
			<div
				className="w-40 p-1 mt-4 first:mt-0 rounded-2xl border-1 flex justify-between"
				style={{
					backgroundColor: "var(--color-secondary)",
					borderColor: "var(--color-primary)",
				}}
			>
				<div className="flex flex-col justify-between">
					<div className="">{name}</div>
					<div className="">{minutes / (focusLength || 25) + " TO-MOs"}</div>
				</div>
				<div
					className="rounded-full w-5 h-5 self-end border-1"
					style={{
						borderColor: "var(--color-primary)",
						backgroundColor: task.status ? "var(--color-primary)" : "white",
					}}
				/>
			</div>
		</div>
	);
}
