import { componentBasics, color } from "../../types/propTypes"

export type SelectShared = {
    selectedOption: option|Array<option>|undefined,
    setSelectedOption: React.Dispatch<React.SetStateAction<option | option[] | undefined>>,
    color: color,
    multiple: boolean
}

export type SelectProps = componentBasics & {
    // value that being selected
    value?: string|string[],
    // callback function when value changes
    onChange?: (value:string|string[]|undefined) => void,
    // placeholder when no value is selected
    placeholder?: string,
    // identifier to disable the component
    disabled?: boolean,
    // identifier to make multiple selection
    multiple?: boolean,
    // identifier to search options by label
    searchable?:boolean,
    // identifier to show clear selection button
    clearBtn?:boolean,
    // component width
    width?: number|string
    // preset color
    color?: color,
    // option data
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