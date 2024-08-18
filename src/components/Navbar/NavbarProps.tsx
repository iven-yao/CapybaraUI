import { componentBasics, variant } from "../../types/propTypes"

export type NavbarShared = {
    variant:variant,
    height:number|string,
}

export type NavbarProps = componentBasics & {
    position?:'static'|'fixed'|'sticky'
    variant?:variant,
    height?:number|string
}

export type LogoProps = componentBasics & {
    src?:string,
}

export type ItemsProps = componentBasics & {
    justify?:'center'|'start'|'end';
}
