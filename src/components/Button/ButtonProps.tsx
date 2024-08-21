import { MouseEventHandler } from "react";
import { componentBasics, rounded, size, variant } from "../../types/propTypes";

export type ButtonProps = componentBasics & {
    variant?: variant,
    size?: size,
    rounded?: rounded,
    border?: boolean|undefined
    isLoading?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>,
}