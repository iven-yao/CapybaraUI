import { PropsWithChildren, useState } from "react";
import { DropdownMenuProps } from "./DropdownMenuProps";
import { DropdownMenuContext } from "./DropdownMenuContext";
import clsx from "clsx";
import './DropdownMenu.scss';
import Items from "./Items";
import Item from "./Item";
import Button from "../Button";
import { DropdownIcon } from "../Icon/Icons";

const DropdownMenu = ({
    children,
    className,
    color='white',
    label='Label',
    size,
    rounded,
    border,
    shadow,
}:PropsWithChildren<DropdownMenuProps>) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <DropdownMenuContext.Provider value={{isOpen, setIsOpen, color}}>
            <div className={clsx(
                "capybara-dropdown", 
                `bg-${color}`,
                {
                    "active":isOpen
                },
                className,
                )} 

                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <Button color={color} size={size} rounded={rounded} border={border} shadow={shadow}>
                    {label}
                    <DropdownIcon style={color==='black'?{color:'white'}:{}}/>
                </Button>
                {children}
            </div>
        </DropdownMenuContext.Provider>
    );
}

DropdownMenu.Items = Items;
DropdownMenu.Item = Item;

export default DropdownMenu;