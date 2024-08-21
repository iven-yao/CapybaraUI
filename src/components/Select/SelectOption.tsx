import { PropsWithChildren, useContext, useEffect } from "react";
import { SelectOptionProps } from "./SelectProps";
import { SelectContext } from "./SelectContext";
import clsx from "clsx";

const SelectOption = ({
    children,
    value,
    label,
    className,
    style
}:PropsWithChildren<SelectOptionProps>) => {
    
    const {color, setSelectedValue, setSelectedLabel, selectedValue, multiple} = useContext(SelectContext);

    useEffect(() => {
        if(selectedValue === value) {
            setSelectedLabel(label);
        }
    }, [selectedValue]);

    const handleClick = () => {
        if(multiple) {
            if(Array.isArray(selectedValue) && selectedValue.includes(value)) {
                // remove
                setSelectedValue(selectedValue.filter((v) => v !== value));
            } else {
                // append
                if(Array.isArray(selectedValue)) {
                    setSelectedValue([...selectedValue, value]);
                } else {
                    setSelectedValue([value]);
                }
            }   
        } else {
            setSelectedValue(value);
        }
    }

    return(
        <option 
        className={clsx(
            "option",
            `bg-${color}`,
            className
        )}
        style={style}
        onClick={handleClick}
        >
            {label}
        </option>
    );
}

export default SelectOption;