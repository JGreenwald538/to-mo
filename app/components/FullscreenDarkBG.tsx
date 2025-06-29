import { Children, JSX, ReactElement } from "react";

export default function FullscreenDarkBG({
	children,
}: {
	children: string | JSX.Element | JSX.Element[];
}) {
	return (
		<div className="absolute flex justify-center items-center top-0 left-0 bg-black/30 w-screen h-screen flex-col">
			{children}
		</div>
	);
}
