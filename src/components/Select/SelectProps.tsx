import { componentBasics, color } from "../../types/propTypes"

export type SelectShared = {
    selectedOption: option|Array<option>|undefined,
    setSelectedOption: React.Dispatch<React.SetStateAction<option | option[] | undefined>>,
    color: color,
    multiple: boolean
}

export type SelectProps = componentBasics & {
    value?: string|string[],
    onChange?: (value:string|string[]) => void,
    placeholder?: string,
    disabled?: boolean,
    multiple?: boolean,
    width?: number|string
    color?: color,
    options:Array<option>
}

export type option = componentBasics & {
    label: string,
    value: string,
}

export type SelectOptionProps = componentBasics & {
    option:option,
    disabled?: boolean,
}