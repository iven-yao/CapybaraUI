import { ButtonProps } from "./ButtonProps";
import { PropsWithChildren, useState } from "react";
import clsx from "clsx";
import './Button.scss';
import Ripple from "../Ripple/Ripple";

const Button = ( {
    children, 
    className, 
    color = 'white', 
    size='md', 
    isLoading, 
    rounded='sm', 
    style, 
    onClick, 
    border=false
}: PropsWithChildren<ButtonProps>) => {
    
    return (
        <button className={clsx(
            'capybara-button',
            {
                [`size-${size}`]: size,
                [`rounded-${rounded}`]: rounded && rounded !== 'none',
                [`bg-${color}`]:color,
                [`border-${color} border`]:border
            },
            className,
            )}
            
            style={style}
            onMouseDown={onClick}
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