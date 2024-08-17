import { variant } from "../../types/propTypes"

export type NavbarShared = {
    variant:variant,
    height:number|string,
}

export type NavbarProps = {
    position?:'static'|'fixed'|'sticky'
    className?:string,
    variant?:variant,
    height?:number|string
}

export type LogoProps = {
    src?:string,
}

export type ItemsProps = {
    justify?:'center'|'start'|'end';
}
