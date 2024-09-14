import { PropsWithChildren, useContext } from "react";
import { ItemProps } from "./DropdownProps";
import clsx from "clsx";
import Ripple from "../Ripple/Ripple";
import { DropdownContext } from "./DropdownContext";

const Item = ({
    children,
    className,
    onClick
}:PropsWithChildren<ItemProps>) => {
    const {variant} = useContext(DropdownContext);
    
    return (
        <div 
            className={clsx(
                "list-item",
                {
                    [`${variant}`]:variant,
                    [`border`]:variant === 'outline',
                    
                }, 
                className
            )} 
            role="listitem" 
            onClick={onClick}
        >
            {children}
            <Ripple/>
        </div>
    );
}

export default Item;
