import { componentBasics } from "../../types/propTypes";

export type RadioGroupShared = {
    value: string | null
    setValue: React.Dispatch<React.SetStateAction<string|null>>;
}

export type RadioGroupProps = componentBasics & {
    color?: string,
    size?: string,
    name: string,
}

export type RadioButtonProps = componentBasics & {

}

export type RadioLabelProps = componentBasics & {
    
}