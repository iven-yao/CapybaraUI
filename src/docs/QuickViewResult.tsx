import React, { PropsWithChildren, useState, createContext, useContext } from "react";
import { componentBasics } from "../types/propTypes";
import clsx from "clsx";
import { Button, Icon } from "@ivenyao/capybara-ui";

type QuickViewShared = {showCode:boolean};
const QuickViewContext = createContext<QuickViewShared>({} as QuickViewShared);

const QuickViewResult = ({children, style, className}:PropsWithChildren<componentBasics>) => {
    const [showCode, setShowCode] = useState(false);

    return (
        <QuickViewContext.Provider value={{showCode}}>
            <div 
                className={clsx(
                    "result",
                    className
                )} 
                style={style}
            >
                <Button 
                    variant="three-d"
                    className="switch-code-btn" 
                    size="xs"
                    rounded="pill"
                    color="white"
                    onClick={() => setShowCode(!showCode)}
                    style={{width:'100px'}}
                >
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <div className="rotate-icon">
                            <Icon name="rotate"/>
                        </div>
                        {showCode?"Preview":"Code"}
                    </div>
                </Button>
                {children}
            </div>
        </QuickViewContext.Provider>
    );
}

const Preview = ({children, className, style}:PropsWithChildren<componentBasics>) => {

    const {showCode} = useContext(QuickViewContext);

    return (
        !showCode ? 
        <div className={clsx("preview", className)} style={style} hidden={showCode}>
            {children}
        </div>
        :
        null
    );
}

const Code = ({children}:PropsWithChildren) => {

    const {showCode} = useContext(QuickViewContext);

    return (
        showCode ?
        <div className="code-snippet">
            <code>
                {children}
            </code>
        </div>
        :
        null
    );
}

QuickViewResult.Preview = Preview;

QuickViewResult.Code = Code;

export default QuickViewResult;