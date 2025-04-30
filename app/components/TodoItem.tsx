import { Task } from "../utils/TaskType";

const options = { year: "numeric", month: "long", day: "numeric" } as const;

export default function TodoItem({ task }: { task: Task }) {
	const { name, minutes, date } = task;
	return (
		<div
			className="border-2 border-gray-300 w-40 p-1 mt-4 first:mt-0 rounded-md"
			style={{
				backgroundColor: "var(--color-secondary)",
			}}
		>
			<div className="flex flex-row justify-between">
				<div className="">{name}</div>
				<div className="">{minutes + " mins"}</div>
			</div>
			<div className="text-center mt-2">
				{date.toLocaleString(undefined, options)}
			</div>
		</div>
	);
}
