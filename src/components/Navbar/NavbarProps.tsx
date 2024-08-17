import { variant } from "../../types/propTypes"

export type NavbarProps = {
    position?:'static'|'fixed'|'sticky'
    className?:string,
    variant?:variant,
}