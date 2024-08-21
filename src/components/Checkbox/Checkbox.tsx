import clsx from "clsx";
import { useEffect, useState } from "react";
import { CheckboxProps } from "./CheckboxProps";
import './Checkbox.scss';

const Checkbox = ({
    className,
    style,
    onChange,
    checked = false,
    disabled,
    color = 'white'
}:CheckboxProps) => {

    const [isChecked, setIsChecked] = useState(checked);
    
    useEffect(() => {
        console.log(isChecked);
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
        <>
            <input type="checkbox" className="sr-only" checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
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
        </>
    );
}

export default Checkbox;