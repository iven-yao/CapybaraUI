import React, { useEffect, useState } from "react";
import { option, SelectProps } from "./SelectProps";
import { SelectContext } from "./SelectContext";
import './Select.scss';
import clsx from "clsx";
import { DropdownIcon, XIcon } from "../Icon/Icons";
import SelectOption from "./SelectOption";
import SelectMultipleButton from "./SelectMultipleButton";

const Select = ({
    options,
    value,
    width,
    color='gray',
    placeholder="Choose...",
    onChange,
    disabled=false,
    multiple=false,
    searchable=false,
    clearBtn=true,
    className,
    style,
}:SelectProps) => {

    const [selectedOption, setSelectedOption] = useState<option|Array<option>|null>();
    const [isOpen, setIsOpen] = useState(false);
    const [filterString, setFilterString] = useState('');

    useEffect(() => {
        const handleClickOutside = (e:MouseEvent) => {
            let target = e.target as Element;
            while(target.parentElement != null && !target.classList.contains('capybara-select')) {
                target = target.parentElement;
            }

            if(!target.classList.contains('capybara-select')) {
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
        if(onChange) {
            if(selectedOption !== undefined) {
                if(Array.isArray(selectedOption)) {
                    if(selectedOption.length > 0) {
                        onChange(selectedOption.map(o => o.value));
                    } else {
                        onChange(null);
                    }
                } else {
                    onChange(selectedOption?.value || null);
                }
            }
        }
        setFilterString('');
    },[selectedOption]);

    const handleClearSelect = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        setSelectedOption(null); 
    }

    return (
        <SelectContext.Provider value={{selectedOption, setSelectedOption, color, multiple}}>
            <div 
                className={clsx(
                    "capybara-select",
                    `bg-${color}`,
                    `border-${color}`,
                    {
                        "active":isOpen,
                        "disabled":disabled,
                    },
                    className
                )} 
                style={{
                    width: typeof width === 'number'? `${width}px`:width,
                    ...style
                }}
                onClick={() => {
                    if(!disabled) setIsOpen(!isOpen);
                }}
            >
                <div className={clsx(
                    "selected-value",
                    {
                        "multiple": multiple
                    }
                )}>
                    {!selectedOption || (Array.isArray(selectedOption) && selectedOption.length === 0)?
                        searchable && !disabled?
                            <input 
                                type="text" 
                                placeholder={placeholder} 
                                disabled={disabled}
                                onChange={e => setFilterString(e.target.value)} style={{
                                    border:'none', 
                                    outline:'none', 
                                    backgroundColor:'transparent', 
                                    width:'100%',
                                }}
                            />
                            :
                            <div className="placeholder">{placeholder}</div>
                        :
                        Array.isArray(selectedOption)?
                            <>
                                <div className="value-wrapper">{selectedOption.map(o => <SelectMultipleButton option={o} key={`key_${o.value}`}/>)}</div>
                                {clearBtn && <div className="icon-wrapper" onClick={handleClearSelect} title="Clear All"><XIcon className="xicon"/></div>}
                            </>
                            :
                            <>
                                <div className="value-wrapper">{selectedOption.label}</div>
                                {clearBtn && <div className="icon-wrapper" onClick={handleClearSelect} title="Clear"><XIcon className="xicon"/></div>}
                            </>
                    }
                </div>
                <div className="select-dropdown-icon">
                    <DropdownIcon />
                </div>
                <div className={clsx(
                    "capybara-options",
                )}
                    hidden={!isOpen}
                >
                    {options.filter(o => o.label.indexOf(filterString) != -1).map(o => <SelectOption option={o} key={`${o.label}_${o.value}`}/>)}
                </div>
            </div>
        </SelectContext.Provider>
    );
}

Select.Option = SelectOption;

export default Select;