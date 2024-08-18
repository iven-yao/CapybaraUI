import { PropsWithChildren } from "react";
import { SelectOptionProps } from "./SelectProps";

const SelectOption = ({
    children,
    value,
    label,
    className,
    style
}:PropsWithChildren<SelectOptionProps>) => {
    
    return(
        <div>
            {label}
        </div>
    );
}

export default SelectOption;