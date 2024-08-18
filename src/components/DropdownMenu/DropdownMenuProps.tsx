import { componentBasics, variant } from "../../types/propTypes"

export type DropdownMenuShared = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    variant: variant
}

export type DropdownMenuProps = componentBasics & {
    variant?: variant
}

export type ItemProps = componentBasics & {
    onClick: Function,
}