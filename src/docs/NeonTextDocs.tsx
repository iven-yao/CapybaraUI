import React, { useState } from "react";
import QuickViewResult from "./QuickViewResult";
import { ColorControl, InputControl } from "./ControlPanel";
import { NeonText } from "@ivenyao/capybara-ui";

const NeonTextDocs = () => {
    const [color, setColor] = useState('');
    const [text, setText] = useState('Capybara');
    const [fontSize, setFontSize] = useState(60);

    return (
        <>
            <div className="title">Neon Text</div>
            <div className="interactive-section">
                <div className="controller">
                    <div className="second-title" id="quick-view">Quick View</div>
                    <ColorControl value={color} onChange={(v) => setColor(v)} defaultValue="violet"/>
                    <InputControl label="text" type="text" value={text} onChange={(v) => setText(v)} />
                    <InputControl label="font-size" type="number" value={fontSize} onChange={(v) => setFontSize(Number(v))} />
                </div>
                <QuickViewResult>
                    <QuickViewResult.Code>

                    </QuickViewResult.Code>
                    <QuickViewResult.Preview style={{backgroundColor:'black', width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <NeonText color={color || 'violet'} fontSize={fontSize}>
                            {text}
                        </NeonText>
                    </QuickViewResult.Preview>
                </QuickViewResult>
            </div>
        </>
    );
}

export default NeonTextDocs;