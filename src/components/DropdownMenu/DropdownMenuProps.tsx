import { MouseEventHandler } from "react"
import { componentBasics, color, size, rounded, variant } from "../../types/propTypes"

export type DropdownMenuShared = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    color: color,
    variant?:variant
}

export type DropdownMenuProps = componentBasics & {
    variant?: variant,
    color?: color,
}

export type DropdownButtonProps = componentBasics & {
    size?: size,
    rounded?: rounded,
    shadow?:boolean,
}

export type ItemProps = componentBasics & {
    onClick: MouseEventHandler<HTMLDivElement>,
}