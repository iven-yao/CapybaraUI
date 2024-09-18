import { componentBasics, size, switch_shape, switch_variant } from "../../types/propTypes";

export type SwitchProps = componentBasics & {
    checked: boolean,
    onChange: (checked:boolean) => void,
    disabled?: boolean,
    label?: string,
    size?: size,
    color?: string,
    width?: number|string,
    toggleSize?: number|string,
    variant?: switch_variant,
    shape?: switch_shape
}