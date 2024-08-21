import { componentBasics, color } from "../../types/propTypes"

export type DropdownMenuShared = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    color: color
}

export type DropdownMenuProps = componentBasics & {
    color?: color
}

export type ItemProps = componentBasics & {
    onClick: Function,
}