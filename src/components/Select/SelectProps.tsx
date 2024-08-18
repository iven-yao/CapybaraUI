import { componentBasics } from "../../types/propTypes"

export type SelectShared = {
    isOpen: boolean,
    selectedValue: string|string[],
    multiple: boolean,
}

export type SelectProps = componentBasics & {
    options: Array<{value: string, label: string}>,
    value?: string|string[],
    onChange?: (value:string|string[]) => void,
    placeholder?: string,
    disabled?: boolean,
    multiple?: boolean,
}

export type SelectOptionProps = componentBasics & {
    label: string,
    value: string,
    disabled?: boolean,
}