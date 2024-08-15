import { ButtonProps } from "./ButtonProps";
import { PropsWithChildren } from "react";
import clsx from "clsx";
import 'src/styles/button.scss';

const Button = (props: PropsWithChildren<ButtonProps>) => {
    const {children, variant, className, size, isLoading, rounded, style} = {...props};

    return (
        <button className={clsx(
            'capybara-button',
            className,
            {
            'size-xs': size === 'xs',
            'size-sm': size === 'sm',
            'size-lg': size === 'lg',
            'size-xl': size === 'xl',
            'rounded': rounded === true || rounded === 'md',
            'rounded-sm': rounded === 'sm',
            'rounded-lg': rounded === 'lg',
            'rounded-pill': rounded === 'pill',
            'rounded-circle': rounded === 'circle',
            })}
            
            style={style}
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