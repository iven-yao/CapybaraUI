import { MouseEventHandler } from "react";
import { componentBasics, rounded, size, color, variant } from "../../types/propTypes";

export type ButtonProps = componentBasics & {
    variant?: variant,
    color?: color,
    size?: size,
    rounded?: rounded,
    shadow?: boolean,
    border?: boolean,
    isLoading?: boolean,
    disabled?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    onMouseEnter?: MouseEventHandler<HTMLButtonElement>,
    onMouseLeave?: MouseEventHandler<HTMLButtonElement>
}