import { componentBasics, color } from "../../types/propTypes"

export type NavbarShared = {
    color:color,
    height:number|string,
}

export type NavbarProps = componentBasics & {
    position?:'static'|'fixed'|'sticky'
    color?:color,
    height?:number|string
}

export type LogoProps = componentBasics & {
    src?:string,
}

export type ItemsProps = componentBasics & {
    justify?:'center'|'start'|'end';
}
