import { MouseEventHandler } from "react"
import { componentBasics, color, size, rounded } from "../../types/propTypes"

export type DropdownMenuShared = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    color: color
}

export type DropdownMenuProps = componentBasics & {
    color?: color,
    size?: size,
    rounded?: rounded,
    border?:boolean,
    shadow?:boolean,
    label: string,
}

export type ItemProps = componentBasics & {
    onClick: MouseEventHandler<HTMLDivElement>,
}