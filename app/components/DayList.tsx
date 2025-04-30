import TodoItem from "./TodoItem";

export default function DayView() {
	return (
		<div
			className="border-10 border-gray-300 rounded-4xl flex flex-col justify-self-end overflow-scroll h-full items-center"
			style={{
				backgroundColor: "var(--color-primary)",
				borderColor: "var(--color-secondary)",
				scrollbarColor: "var(--color-secondary)",
			}}
		>
			<div
				className="text-center pt-4 text-white border-b-1 w-fit self-center text-xl mx-14"
				style={{
					borderColor: "var(--color-secondary)",
				}}
			>
				{new Date().toLocaleDateString(undefined, {
					day: "2-digit",
					month: "2-digit",
					year: "2-digit",
				})}
			</div>
			<div
				className="flex flex-col overflow-y-scroll h-full py-4 rounded-t-xl rounded-b-xl flex-1"
				style={{
					scrollbarColor: "var(--color-secondary)",
				}}
			>
				<TodoItem task={{
					name: "asdasd",
					minutes: 30,
					date: new Date(),
					type: "task",
					status: false,
					description: "asdasd",

				}} />
			</div>
			<button
				className="text-white py-1 w-fit my-2 rounded-3xl px-8 self-center text-2xl border-4 border-white"
				style={{
					backgroundColor: "var(--color-secondary)",
					color: "var(--color-primary)",
					borderColor: "var(--color-quartenary)",
				}}
			>
				Add Task
			</button>
		</div>
	);
}
