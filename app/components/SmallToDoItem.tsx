import { Task } from "../utils/TaskType";

export default function SmallToDoItem({ task }: { task: Task }) {
    const { name } = task;
    return (
        <div
            className="mt-1 first:mt-0 rounded-2xl"
            style={{
                backgroundColor: "var(--color-secondary)",
                color: "var(--color-primary)",
            }}
        >
            <div className="flex flex-row justify-center md:text-xl text-xs">
                <div className="">{name}</div>
            </div>
        </div>
    );
}
