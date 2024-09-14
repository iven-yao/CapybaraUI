import clsx from "clsx";
import { InputProps } from "./InputProps";
import './Input.scss';

const Input = (props:InputProps) => {
    const {
        className,
        style,
        type = 'text',
        value,
        color = 'gray',
        defaultValue,
        onChange,
        max,
        maxLength,
        min,
        minLength,
        pattern,
        placeholder,
        name,
        readonly,
        required,
        size,
        step,
        width
    } = {...props}

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(onChange) {
            onChange(e.target.value);
        }
    }

    return (
        <input 
            className={clsx(
                "capybara-input",
                {
                    [`border-${color}`]:color,
                },
                className
            )}
            style={{
                width: typeof width === 'number'? `${width}px`:width,
                ...style
            }}
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
    );
}

export default Input;