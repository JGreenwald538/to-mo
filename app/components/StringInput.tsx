import { Dispatch, SetStateAction } from "react";

export default function SmallInput({
	value,
	setValue,
	className,
}: {
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	className?: string;
}) {
	return (
		<input
			value={value}
			onChange={(event) => {
				setValue(event.target.value);
			}}
			className={`bg-white rounded-2xl p-2 ${className}`}
		/>
	);
}
