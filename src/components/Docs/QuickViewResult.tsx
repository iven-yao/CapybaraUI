import { PropsWithChildren, useState, createContext, useContext } from "react";
import Button from "../Button";
import { RotateIcon } from "../Icon/Icons";

type QuickViewShared = {showCode:boolean};
const QuickViewContext = createContext<QuickViewShared>({} as QuickViewShared);

const QuickViewResult = ({children}:PropsWithChildren) => {
    const [showCode, setShowCode] = useState(false);

    return (
        <QuickViewContext.Provider value={{showCode}}>
            <div className="result">
                <Button 
                    className="switch-code-btn" 
                    size="xs"
                    rounded="none"
                    onClick={() => setShowCode(!showCode)}
                    style={{width:'100px'}}
                >
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <span className="rotate-icon">
                            <RotateIcon/>
                        </span>
                        {showCode?"Preview":"Code"}
                    </div>
                </Button>
                {children}
            </div>
        </QuickViewContext.Provider>
    );
}

QuickViewResult.Preview = ({children}:PropsWithChildren) => {

    const {showCode} = useContext(QuickViewContext);

    return (
        !showCode ? 
        <div className="preview" hidden={showCode}>
            {children}
        </div>
        :
        null
    );
}

QuickViewResult.Code = ({children}:PropsWithChildren) => {

    const {showCode} = useContext(QuickViewContext);

    return (
        showCode ?
        <div className="code-snippet">
            {children}
        </div>
        :
        null
    );
}

export default QuickViewResult;