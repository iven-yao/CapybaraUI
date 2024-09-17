import React, { PropsWithChildren, useEffect, useState } from "react";
import { RadioGroupProps } from "./RadioProps";
import { RadioGroupContext } from "./RadioGroupContext";
import clsx from "clsx";
import './Radio.scss';
import RadioButton from "./RadioButton";
import { hexToRGB } from "../../utils/colorHelper";

const RadioGroup = (props: PropsWithChildren<RadioGroupProps>) => {
    const {
        children,
        className,
        style,
        id,
        testid,
        value,
        disabled = false,
        size,
        onChange,
        orientation,
        name,
        options = [],
        color,
        variant = "circle"
    } = {...props};

    const [selectedValue, setSelectedValue] = useState(value);

    useEffect(() => {
        if(selectedValue && onChange) {
            onChange(selectedValue);
        }
    },[selectedValue]);

    return(
        <RadioGroupContext.Provider value={{selectedValue, setSelectedValue, name, disabled, variant}}>
            <div 
                className={clsx(
                    "capybara-radio-group",
                    {
                        [`size-${size}`]:size,
                        [`${orientation}`]:orientation,
                    },
                    className
                )}
                style={{
                    "--radioColor":color || "gray",
                    "--radioColorRGB": hexToRGB(color || "gray").join(','),
                    ...style
                }}
                id={id}
                data-testid={testid}
            >
                {options.map(option => <RadioButton key={`${name}_${option.value}`} label={option.label} value={option.value}/>)}
                {children}
            </div>
        </RadioGroupContext.Provider>
    );

}

RadioGroup.Radio = RadioButton;

export default RadioGroup;