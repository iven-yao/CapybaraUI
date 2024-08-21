import { MouseEventHandler } from "react";
import { componentBasics, rounded, size, color } from "../../types/propTypes";

export type ButtonProps = componentBasics & {
    color?: color,
    size?: size,
    rounded?: rounded,
    border?: boolean|undefined
    isLoading?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>,
}