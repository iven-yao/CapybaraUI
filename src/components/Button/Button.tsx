import React ,{ PropsWithChildren } from "react";
import { ButtonProps } from "./ButtonProps";
import clsx from "clsx";
import './Button.scss';
import Ripple from "../Ripple/Ripple";
import { contrastTextColor, hexToRGB } from "../../utils/colorHelper";

const Button = ( {
    children, 
    className, 
    id,
    testid,
    variant = 'outline',
    color = 'gray', 
    size='md', 
    isLoading, 
    rounded='sm', 
    style, 
    onClick, 
    onMouseEnter,
    onMouseLeave,
    shadow=false,
    disabled=false,
}: PropsWithChildren<ButtonProps>) => {
    
    return (
        <button className={clsx(
            'capybara-button',
            {
                [`${variant}`]:variant,
                [`size-${size}`]: size,
                [`rounded-${rounded}`]: rounded && rounded !== 'none',
                'shadow':shadow,
                'disabled':disabled
            },
            className,
            )}
            
            style={{
                "--btnColor": color || 'gray',
                "--btnColorRGB": hexToRGB(color || 'gray').join(','),
                "--textColor": contrastTextColor(color || 'gray'),
                ...style}}

            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            disabled={disabled}
            id={id}
            data-testid={testid}
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