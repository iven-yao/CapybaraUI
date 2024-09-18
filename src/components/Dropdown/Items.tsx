import React, { PropsWithChildren, useContext } from "react";
import { DropdownContext } from "./DropdownContext";
import clsx from "clsx";
import { componentBasics } from "../../types/propTypes";

const Items = ({
    children,
    className,
}:PropsWithChildren<componentBasics>) => {
    const {isOpen, variant} = useContext(DropdownContext);

    return (
        isOpen?
        <div className={clsx(
            "list",
            {  
                [`${variant}`]:variant,
                [`border`]:variant === 'outline',
            },
            className,
            )} role="list" aria-orientation="vertical" aria-labelledby="options-menu">
            {children}
        </div>
        :
        null
    );
}

export default Items;