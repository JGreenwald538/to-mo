import { ReactNode, useContext } from "react";
import { Task } from "../utils/TaskType";
import { TaskToEditContext } from "../utils/Context";

export default function AddTaskButton({
	children,
	className,
	task,
    style
}: {
	children: ReactNode;
	task: Task;
	className?: string;
    style?: React.CSSProperties
}) {
    const { setTaskToEdit } = useContext(TaskToEditContext);
	return (
		<button
			className={`hover:cursor-pointer ${className}`}
			onClick={() => {
                if(setTaskToEdit) {
					setTaskToEdit(task);
				}
			}}
            style={style}
		>
			{children}
		</button>
	);
}
