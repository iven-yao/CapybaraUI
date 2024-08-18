import { createContext } from "react";
import { NavbarShared } from "./NavbarProps";

export const NavbarContext = createContext<NavbarShared>({
    variant: 'white',
    height: 50
});