import { MouseEventHandler } from "react";
import { componentBasics, rounded, size, color } from "../../types/propTypes";

export type ButtonProps = componentBasics & {
    color?: color,
    size?: size,
    rounded?: rounded,
    border?: boolean,
    shadow?: boolean,
    isLoading?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    onMouseEnter?: MouseEventHandler<HTMLButtonElement>,
    onMouseLeave?: MouseEventHandler<HTMLButtonElement>
}