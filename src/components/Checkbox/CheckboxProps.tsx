import { componentBasics, variant } from "../../types/propTypes";

export type CheckboxProps = componentBasics & {
    onChange?: (value:boolean) => void,
    checked?: boolean,
    disabled?: boolean,
    variant?: variant,
}