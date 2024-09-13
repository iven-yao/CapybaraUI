import clsx from "clsx";
import { PropsWithChildren, useEffect, useState } from "react";
import { NeonTextProps } from "./TextProps";
import './Text.scss';

const NeonText = (props:PropsWithChildren<NeonTextProps>) => {

    const {
        children,
        className,
        style,
        color='violet',
        fontSize=120
    } = {...props};

    const [neonStyle, setNeonStyle] = useState<React.CSSProperties>();

    useEffect(() => {
        const inlineStyle = (neonColor:string):React.CSSProperties => ({
            fontSize: `${fontSize}px`,
            "--neonColor": neonColor
        })

        setNeonStyle(inlineStyle(color));

    },[color, fontSize])

    return (
        <span 
            className={clsx(
                'capybara-neon-text',
                className
            )}
            style={{...neonStyle, ...style}}
        >
            {children}
        </span>
    );
}

export default NeonText;