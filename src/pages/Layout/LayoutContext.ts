import { createContext } from "react";

export const LayoutContext = createContext<{darkMode: boolean}>({darkMode:false});