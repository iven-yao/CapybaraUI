import { componentBasics, variant } from "../../types/propTypes"

export type SelectShared = {
    selectedValue: string|string[]|undefined,
    setSelectedValue: React.Dispatch<React.SetStateAction<string | string[] | undefined>>,
    setSelectedLabel: React.Dispatch<React.SetStateAction<string>>,
    variant: variant,
    multiple: boolean
}

export type SelectProps = componentBasics & {
    value?: string|string[],
    onChange?: (value:string|string[]) => void,
    placeholder?: string,
    disabled?: boolean,
    multiple?: boolean,
    width?: number|string
    variant?: variant,
}

export type SelectOptionProps = componentBasics & {
    value: string,
    label: string,
    disabled?: boolean,
}