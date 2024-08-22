import { ButtonProps } from "./ButtonProps";
import { PropsWithChildren, useState } from "react";
import clsx from "clsx";
import './Button.scss';
import Ripple from "../Ripple/Ripple";

const Button = ( {
    children, 
    className, 
    color = 'gray', 
    size='md', 
    isLoading, 
    rounded='sm', 
    style, 
    onClick, 
    onMouseEnter,
    onMouseLeave,
    border=false,
    shadow=false,
}: PropsWithChildren<ButtonProps>) => {
    
    return (
        <button className={clsx(
            'capybara-button',
            {
                [`size-${size}`]: size,
                [`rounded-${rounded}`]: rounded && rounded !== 'none',
                [`bg-${color}`]:color,
                [`border-${color} border`]:border,
                'shadow':shadow
            },
            className,
            )}
            
            style={style}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
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