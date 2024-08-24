import clsx from "clsx";
import { InputProps } from "./InputProps";
import './Input.scss';

const Input = (props:InputProps) => {
    const {
        className,
        style,
        type = 'text',
        value,
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
                className
            )}
            style={style}
            type={type}
            value={value}
            onChange={handleChange}
        />
    );
}

export default Input;