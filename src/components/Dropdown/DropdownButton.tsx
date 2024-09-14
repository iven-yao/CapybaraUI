import { PropsWithChildren, useContext } from "react";
import Button from "../Button";
import { DropdownButtonProps } from "./DropdownProps";
import { DropdownContext } from "./DropdownContext";
import clsx from "clsx";

const DropdownButton = (props:PropsWithChildren<DropdownButtonProps>) => {

    const {
        children,
        className,
        style,
    } = {...props}

    const {color, variant, shadow, rounded, size, disabled, isOpen} = useContext(DropdownContext);

    return (
        <Button 
            variant={variant} 
            color={color} 
            size={size} 
            rounded={rounded} 
            shadow={shadow}
            className={clsx(
                "dropdown-btn",
                {
                    "open":isOpen
                },
                className
            )}
            style={style}
            disabled={disabled}
        >
            {children}
        </Button>
    );
}

export default DropdownButton;