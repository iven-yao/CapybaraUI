import { PropsWithChildren, useContext } from "react";
import Button from "../Button";
import { DropdownMenuContext } from "./DropdownMenuContext";
import { FaChevronDown } from "react-icons/fa";
import { DropdownIcon } from "../Icon/Icons";

const DropdownButton = ({
    children
}:PropsWithChildren) => {

    const {isOpen, setIsOpen, color} = useContext(DropdownMenuContext);

    return (
        <Button color={color} size="md" rounded="sm" onClick={() => setIsOpen(!isOpen)}>
            {children}
            <DropdownIcon />
        </Button>
    );
}

export default DropdownButton;