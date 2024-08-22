import { PropsWithChildren, useEffect, useState } from "react";
import { SelectProps } from "./SelectProps";
import { SelectContext } from "./SelectContext";
import './Select.scss';
import clsx from "clsx";
import { FaCaretDown } from "react-icons/fa";
import { DropdownIcon } from "../Icon/Icons";
import SelectOption from "./SelectOption";
import { createPortal } from "react-dom";

const Select = ({
    children,
    value,
    onChange,
    placeholder="Choose...",
    disabled,
    width,
    color='white',
    multiple=false,
    className,
    style
}:PropsWithChildren<SelectProps>) => {

    const [selectedValue, setSelectedValue] = useState<string|string[]|undefined>(value);
    const [selectedLabel, setSelectedLabel] = useState<string>(placeholder);
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        if(onChange && selectedValue) {
            onChange(selectedValue);
        }
    },[selectedValue]);

    return (
        <SelectContext.Provider value={{selectedValue, setSelectedValue, setSelectedLabel, color, multiple}}>
            {isOpen && createPortal(<div className="overlay" onClick={() => setIsOpen(false)}/>, document.body)}
            <div 
                className={clsx(
                    "capybara-select",
                    `bg-${color}`,
                    `border-${color}`,
                    {
                        "active":isOpen,
                        "disabled":disabled
                    },
                    className
                )} 
                style={{
                    width: typeof width === 'number'? `${width}px`:width,
                    ...style
                }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="selected-value">
                    {selectedLabel}
                </div>
                <div className="select-dropdown-icon">
                    <DropdownIcon />
                </div>
                <div className={clsx(
                    "options",
                    `border-${color}`,
                )}
                    hidden={!isOpen}
                >
                    {children}
                </div>
            </div>
        </SelectContext.Provider>
    );
}

Select.Option = SelectOption;

export default Select;