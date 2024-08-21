import { PropsWithChildren } from "react";
import { NavbarProps } from "./NavbarProps";
import './Navbar.scss';
import clsx from "clsx";
import Items from "./Items";
import Item from "./Item";
import Logo from "./Logo";
import { NavbarContext } from "./NavbarContext";

const Navbar = ({
    children,
    className,
    color = 'white',
    position = 'sticky',
    height = 50,
}: PropsWithChildren<NavbarProps>) => {

    return (
        <NavbarContext.Provider value={{color, height}}>
            <nav className={clsx(
                'capybara-navbar',
                {
                    [`bg-${color}`]:color
                },
                className,
            )}
                style={{
                    height:`${typeof height === 'number' ? `${height}px`:height}`,
                    fontSize:`${typeof height === 'number'? `${height/3}px`: `${parseInt(height)/3}px`}`
                }}
            >
                {children}
            </nav>
        </NavbarContext.Provider>
    );
}

Navbar.Logo = Logo;
Navbar.Items = Items;
Navbar.Item = Item;

export default Navbar;