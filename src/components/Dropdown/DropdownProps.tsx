import { MouseEventHandler } from "react"
import { componentBasics, size, rounded, button_variant } from "../../types/propTypes"

export type DropdownShared = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    color: string,
    variant?:button_variant,
    shadow?:boolean
    size?: size,
    rounded?: rounded,
    disabled?: boolean,
}

export type DropdownProps = componentBasics & {
    variant?: button_variant,
    color?: string,
    shadow?: boolean,
    size?: size,
    rounded?: rounded,
    disabled?: boolean,
}

export type DropdownButtonProps = componentBasics & {
}

export type ItemProps = componentBasics & {
    onClick: MouseEventHandler<HTMLDivElement>,
}