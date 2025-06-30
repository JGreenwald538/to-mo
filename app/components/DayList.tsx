export default function DayView() {
	return (
		<div className="border-2 border-gray-300 h-auto rounded-xl flex flex-col mx-8 max-h-[70vh] justify-self-end">
			<div className="text-center p-4">{new Date().toLocaleDateString()}</div>
			<div className="flex flex-col overflow-y-scroll h-full p-4 border-b-2 border-gray-300 rounded-t-xl border-t-2 rounded-b-xl">
			</div>
			<button className="bg-blue-500 text-white p-2 w-fit mx-auto my-2 rounded-md">
				Add Todo
			</button>
		</div>
	);
}
