import clsx from "clsx";
import { PropsWithChildren, useEffect, useState } from "react";
import { NeonTextProps } from "./TextProps";
import './Text.scss';

const NeonText = (props:PropsWithChildren<NeonTextProps>) => {

    const {
        children,
        className,
        style,
        color
    } = {...props};

    const [neonStyle, setNeonStyle] = useState<React.CSSProperties>();

    useEffect(() => {
        const inlineStyle = (colorCode:string):React.CSSProperties => ({
            fontSize: '3rem',
            fontWeight:'100',
            color: 'white',
            textShadow: `
                0 0 .125rem #fff,
                0 0 .2rem ${colorCode},
                0 0 .3rem ${colorCode},
                0 0 .5rem ${colorCode},
                0 0 .75rem ${colorCode},
                0 0 1rem ${colorCode},
                0 0 1.5rem ${colorCode},
                0 0 2rem ${colorCode}
            `,
        })

        console.log(inlineStyle(color));

        setNeonStyle(inlineStyle(color));

    },[color])

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