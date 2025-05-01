import { Task } from "../utils/TaskType";

export default function SmallToDoItem({ task }: { task: Task }) {
    const { name } = task;
    return (
        <div
            className="mt-1 first:mt-0 rounded-2xl"
            style={{
                backgroundColor: "var(--color-secondary)",
            }}
        >
            <div className="flex flex-row justify-center">
                <div className="">{name}</div>
            </div>
        </div>
    );
}
