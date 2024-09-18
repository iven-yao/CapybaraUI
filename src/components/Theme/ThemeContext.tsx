import { createContext } from "react";
import { ThemeShared } from "./ThemeProps";

const ThemeContext = createContext<ThemeShared>({
    primaryColor: "#a96619",
    secondaryColor: "",
    lightBackgroundColor: "white",
    lightTextColor: "black",
    darkBackgroundColor: "#404040",
    darkTextColor: "white"
});

export default ThemeContext;