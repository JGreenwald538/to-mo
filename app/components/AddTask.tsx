import { useContext, useState } from "react";
import FullscreenDarkBG from "./FullscreenDarkBG";
import Input from "./StringInput";
import Dropdown from "./Dropdown";
import { TasksContext, TaskToEditContext } from "../utils/Context";
import DateInput from "./DateInput";

const typeOfTasks = ["Default Task", "Daily Task", "Miscellaneous Task"];
const statusOfTasks = ["To Be Done", "In Progress", "Completed", "Incomplete"];

export default function AddTask() {
	const { taskToEdit, setTaskToEdit } = useContext(TaskToEditContext);
	const [name, setName] = useState(taskToEdit ? taskToEdit.name : "");
	const [date, setDate] = useState(taskToEdit ? taskToEdit.date : new Date());
	const [type, setType] = useState(taskToEdit ? taskToEdit.type : "");
	const [duration, setDuration] = useState(taskToEdit ? taskToEdit.minutes : 0);
	const [status, setStatus] = useState(taskToEdit ? taskToEdit.status : "");
	const [description, setDescription] = useState(
		taskToEdit ? taskToEdit.description : ""
	);
	const { tasks, setTasks } = useContext(TasksContext);

	return (
		<FullscreenDarkBG>
			<button
				className="w-full h-full absolute top-0 left-0"
				onClick={() => {
					if (tasks && setTasks) {
						const newTask = {
							name: name === "" ? "New Task" : name,
							date,
							minutes: duration,
							type,
							status,
							description,
						};
						const updatedTasks = [...tasks, newTask];
						setTasks(updatedTasks);
					}
					if (setTaskToEdit) {
						setTaskToEdit(null);
					}
				}}
			/>
			<div
				className="border-8 w-2/5 rounded-3xl p-4 z-10 space-y-4"
				style={{
					borderColor: "var(--color-primary)",
					backgroundColor: "var(--color-secondary)",
				}}
			>
				<div className="flex flex-row justify-between">
					<div className="flex flex-col space-y-4">
						<div className="flex flex-col">
							<div className="ml-2">Name of Task</div>
							<Input value={name} setValue={setName} />
						</div>
						<div className="flex flex-col">
							<div className="ml-2">Date</div>
							<DateInput value={date} setValue={setDate} />
						</div>
						<div className="flex flex-col">
							<div className="ml-2">Type Of Task</div>
							<Dropdown
								options={typeOfTasks}
								setOption={setType}
								selectedValue={type}
							/>
						</div>
					</div>
					<div className="flex flex-col space-y-4">
						<div className="flex flex-col">
							<div className="ml-2">Duration</div>
							<Input
								value={duration === 0 ? "" : duration + ""}
								setValue={(value) => {
									if (isNaN(Number(value))) {
										alert("Must enter a number");
									} else {
										setDuration(Number(value));
									}
								}}
							/>
						</div>
						<div className="flex flex-col">
							<div className="ml-2">Status</div>
							<Dropdown
								options={statusOfTasks}
								setOption={setStatus}
								selectedValue={status}
							/>
						</div>
					</div>
				</div>
				<div className="flex flex-col">
					<div className="ml-2">Description</div>
					<Input
						value={description}
						setValue={setDescription}
						className="h-24"
					/>
				</div>
			</div>
		</FullscreenDarkBG>
	);
}
