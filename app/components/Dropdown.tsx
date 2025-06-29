import { Dispatch, SetStateAction, useState } from "react";

export default function Dropdown({
	options,
	setOption,
	selectedValue,
	className,
}: {
	options: string[];
	setOption: Dispatch<SetStateAction<string>>;
	selectedValue: string;
	className?: string;
}) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={`relative inline-block text-left ${className}`}>
			<button
				className="flex w-full rounded-md bg-white px-4 py-2 hover:cursor-grab hover:opacity-90 flex-row justify-between items-center"
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className="w-fit">{selectedValue || "Select an option"}</div>
				<svg
					width="16"
					height="10"
					viewBox="0 0 16 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className={`${isOpen ? "rotate-180" : ""} transition-transform duration-300`}
				>
					<path d="M15 9L8 2L1 9" stroke="#2C3863" strokeWidth="2" />
				</svg>
			</button>
			{isOpen && (
				<div className="absolute z-10 w-full rounded-b-md bg-white shadow-lg">
					{options.map((option) => (
						<button
							key={option}
							className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${
								selectedValue === option ? "border-l-2 border-black" : ""
							}`}
							onClick={() => {
								setOption(option);
								setIsOpen(false);
							}}
						>
							{option}
						</button>
					))}
				</div>
			)}
		</div>
	);
}
