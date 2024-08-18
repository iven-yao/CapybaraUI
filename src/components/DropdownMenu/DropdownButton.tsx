import { PropsWithChildren, useContext } from "react";
import Button from "../Button";
import { DropdownMenuContext } from "./DropdownMenuContext";

const DropdownButton = ({
    children
}:PropsWithChildren) => {

    const {isOpen, setIsOpen, variant} = useContext(DropdownMenuContext);

    return (
        <Button variant={variant} size="md" rounded="sm" onClick={() => setIsOpen(!isOpen)}>
            {children}
        </Button>
    );
}

export default DropdownButton;