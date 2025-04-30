const options = { year: "numeric", month: "long", day: "numeric" } as const;

export default function TodoItem({
	name,
	ett,
	dueDate,
}: {
	name: string;
	ett: number;
	dueDate: Date;
}) {
	return (
		<div
			className="border-2 border-gray-300 h-full w-40 p-1 mt-4 first:mt-0 rounded-md"
			style={{
				backgroundColor: "var(--color-secondary)"
			}}
		>
			<div className="flex flex-row justify-between">
				<div className="">{name}</div>
				<div className="">{ett + " mins"}</div>
			</div>
			<div className="text-center mt-2">
				{dueDate.toLocaleString(undefined, options)}
			</div>
		</div>
	);
}
