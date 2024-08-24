import { MouseEventHandler, PropsWithChildren, useEffect, useState } from "react";
import { option, SelectProps } from "./SelectProps";
import { SelectContext } from "./SelectContext";
import './Select.scss';
import clsx from "clsx";
import { FaCaretDown } from "react-icons/fa";
import { DropdownIcon, XIcon } from "../Icon/Icons";
import SelectOption from "./SelectOption";
import { createPortal } from "react-dom";
import Ripple from "../Ripple/Ripple";

const Select = ({
    options,
    value,
    width,
    color='white',
    placeholder="Choose...",
    onChange,
    disabled=false,
    multiple=false,
    searchable=false,
    clearBtn=true,
    className,
    style,
}:SelectProps) => {

    const [selectedOption, setSelectedOption] = useState<option|Array<option>|undefined>();
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
            if(selectedOption){
                if(Array.isArray(selectedOption)) {
                    onChange(selectedOption.map(o => o.value));
                } else {
                    onChange(selectedOption.value);
                }
            } 
        }
        setFilterString('');
    },[selectedOption]);

    const handleClearSelect = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        setSelectedOption(undefined); 
        if(onChange) onChange(undefined);
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
                    {!selectedOption || (Array.isArray(selectedOption) && selectedOption.length === 0)?
                        searchable?
                            <input type="text" placeholder={placeholder} onChange={e => setFilterString(e.target.value)} style={{border:'none', outline:'none'}}/>
                            :
                            <div className="placeholder">{placeholder}</div>
                        :
                        Array.isArray(selectedOption)?
                            <>
                                <div className="value-wrapper">{selectedOption.map(o => o.label).join(',')}</div>
                                {clearBtn && <div className="icon-wrapper"><XIcon className="xicon"/><Ripple/></div>}
                            </>
                            :
                            <>
                                <div className="value-wrapper">{selectedOption.label}</div>
                                {clearBtn && <div className="icon-wrapper" onClick={handleClearSelect}><XIcon className="xicon"/><Ripple/></div>}
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