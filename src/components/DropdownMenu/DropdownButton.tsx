import { PropsWithChildren, useContext } from "react";
import Button from "../Button";
import { DropdownButtonProps } from "./DropdownMenuProps";
import { DropdownMenuContext } from "./DropdownMenuContext";

const DropdownButton = (props:PropsWithChildren<DropdownButtonProps>) => {

    const {
        children,
        className,
        style,
        size,
        rounded,
    } = {...props}

    const {color, variant, shadow} = useContext(DropdownMenuContext);

    return (
        <Button 
            variant={variant} 
            color={color} 
            size={size} 
            rounded={rounded} 
            shadow={shadow}
            className={className}
            style={style}
        >
            {children}
        </Button>
    );
}

export default DropdownButton;