import { ButtonProps } from "./ButtonProps";
import { PropsWithChildren } from "react";
import clsx from "clsx";
import './Button.scss';

const Button = (props: PropsWithChildren<ButtonProps>) => {
    const {children, variant, className, size, isLoading, rounded, style, onClick, border} = {...props};

    return (
        <button className={clsx(
            'capybara-button',
            className,
            {
                [`size-${size}`]: size,
                [`rounded-${rounded}`]: rounded,
                [`bg-${variant}`]:variant,
                [`border-${variant} border`]:border
            })}
            
            style={style}
            onClick={onClick}
        >
            <div className={clsx({'hide':isLoading})}>
                {children}
            </div>
            {isLoading &&
                <div className="button-loading">
                    L
                </div>
            }
        </button>
    );
}

export default Button;