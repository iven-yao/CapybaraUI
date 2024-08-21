import { PropsWithChildren, useContext } from "react";
import { DropdownMenuContext } from "./DropdownMenuContext";
import clsx from "clsx";
import { componentBasics } from "../../types/propTypes";

const Items = ({
    children,
    className
}:PropsWithChildren<componentBasics>) => {
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