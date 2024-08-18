import { PropsWithChildren } from "react";
import { ItemProps } from "./DropdownMenuProps";
import clsx from "clsx";

const Item = ({
    children,
    className,
    onClick
}:PropsWithChildren<ItemProps>) => {
    return (
        <div className={clsx("menu-item", className)} role="menuitem" onClick={() => {onClick()}}>
            {children}
        </div>
    );
}

export default Item;