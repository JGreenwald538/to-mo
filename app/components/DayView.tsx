import { Task } from "../utils/TaskType";
import AddTaskButton from "./AddTaskButton";
import SmallToDoItem from "./SmallToDoItem";

export default function DayView({
	number,
	dark,
	tasks = [],
	date,
}: {
	number: number;
	tasks?: Task[];
	dark?: boolean;
	date: Date;
}) {
	return (
		<div
			className={
				`flex` +
				(dark ? " opacity-50 " : " ") +
				`md:p-2 p-0 bg-white md:rounded-3xl rounded-lg md:mx-4 mx-1 md:my-3 my-1 md:px-4 overflow-scroll flex-col`
			}
		>
			<div className="flex justify-between w-full">
				<AddTaskButton
					style={{
						color: "var(--color-primary)",
					}}
					className="text-2xl"
					task={{
						name: "",
						date: date,
						minutes: 0,
						type: "",
						status: "",
						description: "",
					}}
				>
					+
				</AddTaskButton>
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
				{tasks.map((task, index) => (
					<SmallToDoItem task={task} key={index}/>
				))}
			</div>
		</div>
	);
}
