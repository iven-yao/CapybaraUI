import { createContext, PropsWithChildren } from "react";
import { NavbarProps } from "./NavbarProps";
import { variant } from "../../types/propTypes";
import './Navbar.scss';
import clsx from "clsx";
import Items from "./Items";
import Item from "./Item";

const NavbarContext = createContext<variant|undefined>(undefined);

const Navbar = (props: PropsWithChildren<NavbarProps>) => {
    const {children, className, variant, position} = {...props};

    return (
        <NavbarContext.Provider value={variant}>
            <nav className={clsx(
                'capybara-navbar',
                className,
                {
                    [`bg-${variant}`]:variant
                }
            )}>
                {children}
            </nav>
        </NavbarContext.Provider>
    );
}

Navbar.Items = Items;
Navbar.Item = Item;

export default Navbar;