import { PropsWithChildren, useState } from "react";
import { DropdownProps } from "./DropdownProps";
import { DropdownContext } from "./DropdownContext";
import clsx from "clsx";
import './Dropdown.scss';
import Items from "./Items";
import Item from "./Item";
import DropdownButton from "./DropdownButton";

const Dropdown = ({
    children,
    className,
    variant,
    color='white',
    shadow
}:PropsWithChildren<DropdownProps>) => {

    const [isOpen, setIsOpen] = useState(false);

    const getIconStyle = () => {
        const iconStyle:React.CSSProperties = {
            marginLeft: '8px'
        };

        return iconStyle;
    }

    return (
        <DropdownContext.Provider value={{isOpen, setIsOpen, color, variant, shadow}}>
            <div className={clsx(
                "capybara-dropdown", 
                className,
                )} 
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                {children}
            </div>
        </DropdownContext.Provider>
    );
}

Dropdown.Button = DropdownButton;
Dropdown.Items = Items;
Dropdown.Item = Item;

export default Dropdown;