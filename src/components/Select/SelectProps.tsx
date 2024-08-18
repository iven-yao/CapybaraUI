import { componentBasics } from "../../types/propTypes"

export type SelectShared = {
    selectedValue: string|string[]|undefined,
    setSelectedValue: React.Dispatch<React.SetStateAction<string | string[] | undefined>>,
    multiple: boolean,
}

export type SelectProps = componentBasics & {
    options: Array<{value: string, label: string}>,
    value?: string|string[],
    onChange?: (value:string|string[]) => void,
    placeholder?: string,
    disabled?: boolean,
    multiple?: boolean,
    width?: number|string
}

export type SelectOptionProps = componentBasics & {
    label: string,
    value: string,
    disabled?: boolean,
}