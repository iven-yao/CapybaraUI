import { componentBasics, orientation, radio_variant } from "../../types/propTypes";
import { option } from "../Select/SelectProps";

export type RadioGroupShared = {
    selectedValue: string | undefined,
    setSelectedValue: React.Dispatch<React.SetStateAction<string|undefined>>,
    name: string,
    disabled: boolean,
    variant: radio_variant
}

export type RadioGroupProps = componentBasics & {
    color?: string,
    size?: string,
    name: string,
    disabled?: boolean,
    // current selected value
    value?: string,
    onChange?: (value: string) => void,
    orientation?: orientation,
    options?:option[]
    variant?: radio_variant
}

export type RadioButtonProps = componentBasics & {
    value: string,
    label: string,
    disabled?: boolean,
}
