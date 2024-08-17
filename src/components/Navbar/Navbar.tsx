import { createContext, PropsWithChildren } from "react";
import { NavbarShared, NavbarProps } from "./NavbarProps";
import './Navbar.scss';
import clsx from "clsx";
import Items from "./Items";
import Item from "./Item";
import Logo from "./Logo";


export const NavbarContext = createContext<NavbarShared>({
    variant: 'white',
    height: 50
});

const Navbar = ({
    children,
    className,
    variant = 'white',
    position = 'sticky',
    height = 50,
}: PropsWithChildren<NavbarProps>) => {

    return (
        <NavbarContext.Provider value={{variant, height}}>
            <nav className={clsx(
                'capybara-navbar',
                className,
                {
                    [`bg-${variant}`]:variant
                }
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