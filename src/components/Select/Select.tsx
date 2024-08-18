import { PropsWithChildren, useEffect, useState } from "react";
import { SelectProps } from "./SelectProps";

const Select = ({
    children,
    options,
    value,
    onChange,
    placeholder="Choose...",
    disabled,
    multiple=false
}:PropsWithChildren<SelectProps>) => {

    const [selectedValue, setSelectedValue] = useState<string|string[]>();
    
    useEffect(() => {
        if(onChange && selectedValue) {
            onChange(selectedValue);
        }
    },[selectedValue]);

    return (
        <select>

        </select>
    );
}

export default Select;