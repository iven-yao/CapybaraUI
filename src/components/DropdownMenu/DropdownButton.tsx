import { PropsWithChildren, useContext } from "react";
import Button from "../Button";
import { DropdownMenuContext } from "./DropdownMenuContext";
import { FaChevronDown } from "react-icons/fa";
import { DropdownIcon } from "../Icon/Icons";

const DropdownButton = ({
    children
}:PropsWithChildren) => {

    const {isOpen, setIsOpen, variant} = useContext(DropdownMenuContext);

    return (
        <Button variant={variant} size="md" rounded="sm" onClick={() => setIsOpen(!isOpen)}>
            {children}
            <DropdownIcon />
        </Button>
    );
}

export default DropdownButton;