import { MouseEventHandler } from "react"
import { componentBasics, color, size, rounded, variant } from "../../types/propTypes"

export type DropdownShared = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    color: color,
    variant?:variant,
    shadow?:boolean
}

export type DropdownProps = componentBasics & {
    variant?: variant,
    color?: color,
    shadow?: boolean
}

export type DropdownButtonProps = componentBasics & {
    size?: size,
    rounded?: rounded,
}

export type ItemProps = componentBasics & {
    onClick: MouseEventHandler<HTMLDivElement>,
}