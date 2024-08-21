import { componentBasics, color } from "../../types/propTypes"

export type SelectShared = {
    selectedValue: string|string[]|undefined,
    setSelectedValue: React.Dispatch<React.SetStateAction<string | string[] | undefined>>,
    setSelectedLabel: React.Dispatch<React.SetStateAction<string>>,
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
}

export type SelectOptionProps = componentBasics & {
    value: string,
    label: string,
    disabled?: boolean,
}