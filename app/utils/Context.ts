import { createContext, Dispatch, SetStateAction } from "react";
import { Theme } from "./Theme";
import { Task } from "./TaskType";

export const ThemeContext = createContext<{
	theme: Theme | null;
	setTheme: Dispatch<SetStateAction<Theme>> | null;
}>({ theme: null, setTheme: null });

export const FocusLengthContext = createContext<{
	focusLength: number | null;
	setFocusLength: Dispatch<SetStateAction<number>> | null;
}>({ focusLength: null, setFocusLength: null });

export const TasksContext = createContext<{
	tasks: Task[] | null;
	setTasks: Dispatch<SetStateAction<Task[]>> | null;
}>({ tasks: null, setTasks: null });

export const TaskToEditContext = createContext<{
	taskToEdit: Task | null;
	setTaskToEdit: Dispatch<SetStateAction<Task | null>> | null;
}>({ taskToEdit: null, setTaskToEdit: null });