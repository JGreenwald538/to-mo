import { useContext } from "react";
import { Task } from "../utils/TaskType";
import SmallToDoItem from "./SmallToDoItem";
import { TasksContext } from "../utils/Context";

export default function DayView({
	number,
	dark,
	tasks = [],
}: {
	number: number;
	tasks?: Task[];
	dark?: boolean;
}) {
	return (
		<div
			className={
				`flex` +
				(dark ? " opacity-50 " : " ") +
				`p-2 bg-white rounded-3xl mx-4 my-3 px-4 overflow-scroll flex-col`
			}
		>
			<div className="flex justify-between w-full">
				<div
					style={{
						color: "var(--color-primary)",
					}}
					className="text-2xl"
				>
					+
				</div>
				<div
					style={{
						color: "var(--color-primary)",
					}}
					className="text-2xl"
				>
					{number}
				</div>
			</div>
			<div className="overflow-scroll">
				{tasks.map((task) => (
					<SmallToDoItem task={task} />
				))}
			</div>
		</div>
	);
}
