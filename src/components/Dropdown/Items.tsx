import { PropsWithChildren, useContext } from "react";
import { DropdownContext } from "./DropdownContext";
import clsx from "clsx";
import { componentBasics } from "../../types/propTypes";

const Items = ({
    children,
    className,
}:PropsWithChildren<componentBasics>) => {
    const {isOpen, color, variant, shadow} = useContext(DropdownContext);

    return (
        isOpen?
        <div className={clsx(
            "list",
            {  
                [`${variant}`]:variant,
                [`border`]:variant === 'outline',
                "shadow":shadow
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