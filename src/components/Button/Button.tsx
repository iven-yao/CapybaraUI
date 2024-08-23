import { ButtonProps } from "./ButtonProps";
import { PropsWithChildren, useState } from "react";
import clsx from "clsx";
import './Button.scss';
import Ripple from "../Ripple/Ripple";

const Button = ( {
    children, 
    className, 
    variant,
    color = 'gray', 
    size='md', 
    isLoading, 
    rounded='sm', 
    style, 
    onClick, 
    onMouseEnter,
    onMouseLeave,
    shadow=false,
    border=false,
    disabled=false,
}: PropsWithChildren<ButtonProps>) => {
    
    return (
        <button className={clsx(
            'capybara-button',
            {
                [`${variant}`]:variant,
                [`border`]:variant === 'outline' || border,
                [`size-${size}`]: size,
                [`rounded-${rounded}`]: rounded && rounded !== 'none',
                [`border-${color} bg-${color}`]:color,
                'shadow':shadow,
                'disabled':disabled
            },
            className,
            )}
            
            style={style}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            disabled={disabled}
        >
            <div className={clsx({'hide':isLoading})}>
                {children}
            </div>
            {isLoading &&
                <div className="button-loading">
                    L
                </div>
            }
            <Ripple />
        </button>
    );
}

export default Button;