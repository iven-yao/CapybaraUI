import { MouseEventHandler } from "react";
import { variant } from "../../types/propTypes";

export type ButtonProps = {
    variant?: variant,
    size?: 'xs'|'sm'|'md'|'lg'|'xl',
    rounded?: 'sm'|'md'|'lg'|'pill'|'circle',
    border?: boolean|undefined
    className?: string,
    isLoading?: boolean,
    style?: React.CSSProperties,
    onClick?: MouseEventHandler<HTMLButtonElement>,
}