import { useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";

export default function DayView({
	number,
	dark,
}: {
	number: number;
	dark?: boolean;
}) {
	const { theme } = useContext(ThemeContext);
	return (
		<div
			className={
				`flex justify-end` +
				(dark ? " opacity-50" : " ") +
				` border-b-2 border-gray-300 p-2 bg-white rounded-3xl m-4`
			}
		>
			<div
				data-theme={theme?.name}
				style={{
					color: "var(--color-primary)",
				}}
                className="text-xl"
			>
				{number}
			</div>
		</div>
	);
}
