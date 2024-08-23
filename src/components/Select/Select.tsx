import { MouseEventHandler, PropsWithChildren, useEffect, useState } from "react";
import { option, SelectProps } from "./SelectProps";
import { SelectContext } from "./SelectContext";
import './Select.scss';
import clsx from "clsx";
import { FaCaretDown } from "react-icons/fa";
import { DropdownIcon } from "../Icon/Icons";
import SelectOption from "./SelectOption";
import { createPortal } from "react-dom";

const Select = ({
    options,
    value,
    onChange,
    placeholder="Choose...",
    disabled,
    width,
    color='white',
    multiple=false,
    className,
    style,
}:SelectProps) => {

    const [selectedOption, setSelectedOption] = useState<option|Array<option>|undefined>();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (e:MouseEvent) => {
            const target = e.target as Element;
            if(!target.classList.contains('capybara-select') &&
               !target.classList.contains('option') 
            ) {
                setIsOpen(false);
            }
        }

        window.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    useEffect(() => {
        const option = options.find(o => o.value === value);
        if(multiple) {
            if(option) {
                setSelectedOption([option]);
            } else {
                setSelectedOption([]);
            }
        } else {
            setSelectedOption(option);
        }
    },[value, multiple]);
    
    useEffect(() => {
        if(onChange && selectedOption) {
            if(Array.isArray(selectedOption)) {
                onChange(selectedOption.map(o => o.value));
            } else {
                onChange(selectedOption.value);
            }
        }
    },[selectedOption]);

    return (
        <SelectContext.Provider value={{selectedOption, setSelectedOption, color, multiple}}>
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
                    {selectedOption?
                        Array.isArray(selectedOption) ?
                            selectedOption.length > 0 ?
                                <div>{selectedOption.map(o => o.label).join(',')}</div>
                                :
                                <div>{placeholder}</div>
                            :
                            <div>{selectedOption.label}</div>
                        :
                        <div>{placeholder}</div>
                    }
                </div>
                <div className="select-dropdown-icon">
                    <DropdownIcon style={{marginLeft:'8px'}}/>
                </div>
                <div className={clsx(
                    "capybara-options",
                )}
                    hidden={!isOpen}
                >
                    {options.map(o => <SelectOption option={o} key={`${o.label}_${o.value}`}/>)}
                </div>
            </div>
        </SelectContext.Provider>
    );
}

Select.Option = SelectOption;

export default Select;