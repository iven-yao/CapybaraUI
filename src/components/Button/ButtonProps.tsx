import { MouseEventHandler } from "react";
import { componentBasics, variant } from "../../types/propTypes";

export type ButtonProps = componentBasics & {
    variant?: variant,
    size?: 'xs'|'sm'|'md'|'lg'|'xl',
    rounded?: 'sm'|'md'|'lg'|'pill'|'circle'|'none',
    border?: boolean|undefined
    isLoading?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>,
}