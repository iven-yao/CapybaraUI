import { PropsWithChildren, useContext } from "react";
import { ItemProps } from "./DropdownMenuProps";
import clsx from "clsx";
import Ripple from "../Ripple/Ripple";
import { DropdownMenuContext } from "./DropdownMenuContext";

const Item = ({
    children,
    className,
    onClick
}:PropsWithChildren<ItemProps>) => {
    const {color, variant} = useContext(DropdownMenuContext);
    
    return (
        <div 
            className={clsx(
                "menu-item",
                {
                    [`bg-${color}`]:color,
                    [`${variant}`]:variant,
                    [`border`]:variant === 'outline',
                    
                }, 
                className
            )} 
            role="menuitem" 
            onClick={onClick}
        >
            {children}
            <Ripple/>
        </div>
    );
}

export default Item;
