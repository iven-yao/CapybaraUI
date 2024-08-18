import { PropsWithChildren, useEffect, useState } from "react";
import { SelectProps } from "./SelectProps";
import { SelectContext } from "./SelectContext";
import './Select.scss';
import clsx from "clsx";
import { FaCaretDown } from "react-icons/fa";

const Select = ({
    children,
    value,
    onChange,
    placeholder="Choose...",
    disabled,
    width=100,
    multiple=false,
    className,
    style
}:PropsWithChildren<SelectProps>) => {

    const [selectedValue, setSelectedValue] = useState<string|string[]|undefined>(value);
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        if(onChange && selectedValue) {
            onChange(selectedValue);
        }
    },[selectedValue]);

    return (
        <SelectContext.Provider value={{selectedValue, setSelectedValue, multiple}}>
            {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}/>}
            <div 
                className={clsx(
                    "capybara-select",
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
                <span className="selected-value">
                    {selectedValue ?
                        typeof selectedValue === 'string' ?
                            selectedValue
                            :
                            selectedValue.join(',')
                        :
                        placeholder
                    }
                </span>
                <FaCaretDown />
            </div>
            {isOpen && 
            <div className="options">
                {children}
            </div>
            }
        </SelectContext.Provider>
    );
}

export default Select;