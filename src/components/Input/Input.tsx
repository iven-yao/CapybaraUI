import React, { useContext } from "react";
import clsx from "clsx";
import { InputProps } from "./InputProps";
import './Input.scss';
import { hexToRGB } from "../../utils/colorHelper";
import ThemeContext from "../Theme/ThemeContext";

const Input = (props:InputProps) => {
    const {
        className,
        style,
        type = 'text',
        value,
        color,
        defaultValue,
        onChange,
        max,
        maxLength,
        min,
        minLength,
        // pattern,
        placeholder,
        name,
        readonly,
        required,
        // size,
        step,
        width
    } = {...props}

    const {primaryColor} = useContext(ThemeContext);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(onChange) {
            onChange(e.target.value);
        }
    }

    return (
        <input 
            className={clsx(
                "capybara-input",
                className
            )}
            style={{
                "--inputColor": color || primaryColor,
                "--inputColorRGB": hexToRGB(color || primaryColor).join(','),
                width: typeof width === 'number'? `${width}px`:width,
                ...style
            }}
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            max={max}
            maxLength={maxLength}
            min={min}
            minLength={minLength}
            name={name}
            readOnly={readonly}
            required={required}
            step={step}
            defaultValue={defaultValue}
        />
    );
}

export default Input;