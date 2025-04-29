import TodoItem from "./TodoItem";

export default function DayView() {
	return (
		<div className="border-2 border-gray-300 h-auto rounded-xl flex flex-col mx-8 max-h-[70vh] justify-self-end">
			<div className="text-center p-4">{new Date().toLocaleDateString()}</div>
			<div className="flex flex-col overflow-y-scroll h-full p-4 border-b-2 border-gray-300 rounded-t-xl border-t-2 rounded-b-xl">
				<TodoItem name="Todo 1" ett={30} dueDate={new Date()} />
				<TodoItem name="Todo 2" ett={30} dueDate={new Date()} />
				<TodoItem name="Todo 3" ett={30} dueDate={new Date()} />
				<TodoItem name="Todo 1" ett={30} dueDate={new Date()} />
				<TodoItem name="Todo 2" ett={30} dueDate={new Date()} />
				<TodoItem name="Todo 3" ett={30} dueDate={new Date()} />
				<TodoItem name="Todo 1" ett={30} dueDate={new Date()} />
				<TodoItem name="Todo 2" ett={30} dueDate={new Date()} />
				<TodoItem name="Todo 3" ett={30} dueDate={new Date()} />
				<TodoItem name="Todo 1" ett={30} dueDate={new Date()} />
				<TodoItem name="Todo 2" ett={30} dueDate={new Date()} />
				<TodoItem name="Todo 3" ett={30} dueDate={new Date()} />
				<TodoItem name="Todo 1" ett={30} dueDate={new Date()} />
				<TodoItem name="Todo 2" ett={30} dueDate={new Date()} />
				<TodoItem name="Todo 3" ett={30} dueDate={new Date()} />
			</div>
			<button className="bg-blue-500 text-white p-2 w-fit mx-auto my-2 rounded-md">
				Add Todo
			</button>
		</div>
	);
}
