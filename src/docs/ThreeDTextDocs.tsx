import React from "react";
import { useState } from "react";
import ThreeDText from "../components/Text/ThreeDText";
import QuickViewResult from "./QuickViewResult";
import { ColorControl, InputControl } from "./ControlPanel";

const ThreeDTextDocs = () => {
    const [color, setColor] = useState('white');
    const [text, setText] = useState('Capybara');
    const [fontSize, setFontSize] = useState(60);

    return (
        <>
            <div className="title">3D Text</div>
            <div className="interactive-section">
                <div className="controller">
                    <div className="second-title" id="quick-view">Quick View</div>
                    <ColorControl value={color} onChange={(v) => setColor(v)}/>
                    <InputControl label="text" value={text} onChange={(v) => setText(v)} />
                    <InputControl label="font size" type="number" value={fontSize} onChange={(v) => setFontSize(Number(v))} />
                </div>
                <QuickViewResult>
                    <QuickViewResult.Code>

                    </QuickViewResult.Code>
                    <QuickViewResult.Preview>
                        <ThreeDText color={color} fontSize={fontSize}>
                            {text}
                        </ThreeDText>
                    </QuickViewResult.Preview>
                </QuickViewResult>
            </div>
        </>
    );
}

export default ThreeDTextDocs;