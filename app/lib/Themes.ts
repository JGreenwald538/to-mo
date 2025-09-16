import { Theme } from "../utils/Theme";

const drishtiTheme: Theme = {
	backgroundProperty: "bg-[url(/drishtitheme/background.jpg)]",
	name: "drishti",
	logoProperty: "bg-[url(/drishtitheme/Seashell.png)]",
	setTomoProperty: "",
};

const tomatoTheme: Theme = {
	backgroundProperty: "bg-[url(/tomatotheme/background.png)]",
	name: "tomato",
	logoProperty: "bg-[url(/tomatotheme/tomoTomato.png)]",
	setTomoProperty: "mt-5 ",
};


export const themes = [drishtiTheme, tomatoTheme];