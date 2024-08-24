import clsx from "clsx";
import { PropsWithChildren } from "react";
import { ImageTextProps } from "./TextProps";
import './Text.scss';

const ImageText = (props:PropsWithChildren<ImageTextProps>) => {

    const {
        children,
        className,
        style,
        src
    } = {...props};

    return (
        <span 
            className={clsx(
                'capybara-image-text',
                className
            )}
            style={{
                backgroundImage:`url(${src})`,
                ...style
            }}
        >
            {children}
        </span>
    );
}

export default ImageText;