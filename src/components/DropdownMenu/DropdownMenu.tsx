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
    variant,
    color='white',
    label='Label',
    size,
    rounded,
    shadow,
}:PropsWithChildren<DropdownMenuProps>) => {

    const [isOpen, setIsOpen] = useState(false);

    const getIconStyle = () => {
        const iconStyle:React.CSSProperties = {
            marginLeft: '8px'
        };

        return iconStyle;
    }

    return (
        <DropdownMenuContext.Provider value={{isOpen, setIsOpen, color, variant}}>
            <div className={clsx(
                "capybara-dropdown", 
                className,
                )} 
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <Button variant={variant} color={color} size={size} rounded={rounded} shadow={shadow}>
                    {label}
                    <DropdownIcon style={getIconStyle()}/>
                </Button>
                {children}
            </div>
        </DropdownMenuContext.Provider>
    );
}

DropdownMenu.Items = Items;
DropdownMenu.Item = Item;

export default DropdownMenu;