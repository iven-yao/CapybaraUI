export type ButtonProps = {
    variant?: string,
    size?: 'xs'|'sm'|'md'|'lg'|'xl',
    rounded?: true|'sm'|'md'|'lg'|'pill'|'circle',
    className?: string,
    isLoading?: boolean,
    style?: React.CSSProperties,
}