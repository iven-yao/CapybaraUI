import React from "react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { CheckboxProps } from "./CheckboxProps";
import './Checkbox.scss';

const Checkbox = ({
    className,
    style,
    id,
    onChange,
    checked = false,
    disabled,
    color = 'white',
    label
}:CheckboxProps) => {

    const [isChecked, setIsChecked] = useState(checked);
    const internal_id = crypto.randomUUID();
    
    useEffect(() => {
        if(onChange) {
            onChange(isChecked);
        }
    }, [isChecked])

    const handleClick = () => {
        if(!disabled) {
            setIsChecked(!isChecked)
        }
    }


    return (
        <div className="capybara-checkbox-container ">
            <input type="checkbox" className="sr-only" id={id||internal_id} checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
            <div 
                className={clsx(
                    "capybara-checkbox",
                    `bg-${color}`,
                    {
                        "checked":isChecked,
                        "disabled":disabled
                    },
                    className
                )}

                style={style}
                onClick={handleClick}
            />
            {label &&
            <label htmlFor={id||internal_id}>{label}</label>
            }
        </div>
    );
}

export default Checkbox;