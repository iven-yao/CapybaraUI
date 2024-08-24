import { PropsWithChildren, useContext } from "react";
import { DropdownMenuContext } from "./DropdownMenuContext";
import clsx from "clsx";
import { componentBasics } from "../../types/propTypes";

const Items = ({
    children,
    className,
}:PropsWithChildren<componentBasics>) => {
    const {isOpen, color, variant, shadow} = useContext(DropdownMenuContext);

    return (
        isOpen?
        <div className={clsx(
            "menu",
            `bg-${color} border-${color}`,
            {  
                [`${variant}`]:variant,
                [`border`]:variant === 'outline',
                "shadow":shadow
            },
            className,
            )} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {children}
        </div>
        :
        null
    );
}

export default Items;