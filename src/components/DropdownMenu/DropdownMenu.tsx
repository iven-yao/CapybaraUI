import { PropsWithChildren, useState } from "react";
import { DropdownMenuProps } from "./DropdownMenuProps";
import { DropdownMenuContext } from "./DropdownMenuContext";
import clsx from "clsx";
import './DropdownMenu.scss';
import Items from "./Items";
import Item from "./Item";
import DropdownButton from "./DropdownButton";
import { FaCaretDown } from "react-icons/fa";

const DropdownMenu = ({
    children,
    className,
    color='white'
}:PropsWithChildren<DropdownMenuProps>) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <DropdownMenuContext.Provider value={{isOpen, setIsOpen, color}}>
            {isOpen &&
                <div className="overlay" onClick={() => setIsOpen(false)}/>
            }
            <div className={clsx(
                "capybara-dropdown", 
                `bg-${color}`,
                {
                    "active":isOpen
                },
                className,
                )} 
                onClick={() => setIsOpen(!isOpen)}
            >
                {children}
            </div>
        </DropdownMenuContext.Provider>
    );
}

DropdownMenu.Button = DropdownButton;
DropdownMenu.Items = Items;
DropdownMenu.Item = Item;

export default DropdownMenu;