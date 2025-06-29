import { Dispatch, SetStateAction } from "react";

export default function DateInput({
	value,
	setValue,
	className,
}: {
	value: Date;
	setValue: Dispatch<SetStateAction<Date>>;
	className?: string;
}) {
	return (
		<input
			value={value.toISOString().split("T")[0]}
			onChange={(event) => {
				setValue(new Date(event.target.value));
			}}
			className={`bg-white rounded-2xl p-2 ${className}`}
		/>
	);
}
