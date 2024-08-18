import { ButtonProps } from "./ButtonProps";
import { PropsWithChildren } from "react";
import clsx from "clsx";
import './Button.scss';

const Button = ( {
    children, 
    className, 
    variant= 'white', 
    size='md', 
    isLoading, 
    rounded='sm', 
    style, 
    onClick, 
    border=true
}: PropsWithChildren<ButtonProps>) => {
    
    return (
        <button className={clsx(
            'capybara-button',
            {
                [`size-${size}`]: size,
                [`rounded-${rounded}`]: rounded && rounded !== 'none',
                [`bg-${variant}`]:variant,
                [`border-${variant} border`]:border
            },
            className,
            )}
            
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