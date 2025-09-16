import { useContext } from "react";
import { ThemeContext } from "../utils/Context";
import { themes } from "../lib/Themes";

export default function ThemeSwitcher() {
	const { theme, setTheme } = useContext(ThemeContext);
	return (
		<div
			className="text-white py-1 w-full rounded-[71px] px-6 self-center text-2xl border-[6px] border-white"
			style={{
				backgroundColor: "var(--color-secondary)",
				color: "var(--color-primary)",
				borderColor: "var(--color-primary)",
			}}
		>
			<div className="text-base text-center">Change Theme</div>
			<div className="my-1 flex flex-row space-x-5 w-full overflow-x-scroll scrollbar-hide">
				{themes.map((t) => (
					<button
						className={`p-1 border-[1px] w-fit rounded-full cursor-pointer ${
							t.name === theme?.name ? "bg-black/20" : ""
						}`}
						key={t.name}
						onClick={() => {
                            if (setTheme) {
                                setTheme(t);
                            }
						}}
					>
						<div
							className={`${t.logoProperty} w-8 h-8 bg-contain bg-no-repeat bg-center rounded-full`}
						/>
					</button>
				))}
			</div>
		</div>
	);
}
