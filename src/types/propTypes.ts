export type button_variant = 'minimal' | 'outline' | 'fill' | 'three-d';
export type radio_variant = 'circle' | 'square' | 'hollow-circle';
export type switch_shape = 'default' | 'pill' | 'rectangle';
export type switch_variant = 'default' | 'icon' | 'text' | 'icon-text';
export type orientation = 'vertical' | 'horizontal';
export type color = 'red'|'orange'|'yellow'|'green'|'blue'|'indigo'|'violet'|'black'|'white'|'gray';
export type size = 'xs'|'sm'|'md'|'lg'|'xl';
export type rounded = 'none'|'sm'|'md'|'lg';
export type shape = 'pill'|'circle';
export type inputTypes = 'text'|'number'|'email'|'password'|'tel'|'url'|'color';
export type componentBasics = {
    className?: string,
    style?: React.CSSProperties,
    id?: string,
    testid?: string
}