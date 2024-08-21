import { PropsWithChildren, useContext } from "react";
import { DropdownMenuProps } from "./DropdownMenuProps";
import { DropdownMenuContext } from "./DropdownMenuContext";
import clsx from "clsx";

const Items = ({
    children,
    className
}:PropsWithChildren<DropdownMenuProps>) => {
    const {isOpen, color} = useContext(DropdownMenuContext);

    return (
        isOpen?
        <div className={clsx(
            "menu",
            `bg-${color}`,
            className,
            )} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {children}
        </div>
        :
        null
    );
}

export default Items;