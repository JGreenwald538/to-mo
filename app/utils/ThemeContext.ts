import { createContext, Dispatch, SetStateAction } from "react";
import { Theme } from "./Theme";

export const ThemeContext = createContext<{theme: Theme | null, setTheme: Dispatch<SetStateAction<Theme>> | null}>({theme: null, setTheme: null});