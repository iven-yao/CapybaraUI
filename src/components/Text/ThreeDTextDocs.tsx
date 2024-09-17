import React from "react";
import { useState } from "react";
import QuickViewResult from "../Docs/QuickViewResult";
import Input from "../Input";
import ThreeDText from "./ThreeDText";

const ThreeDTextDocs = () => {
    const [color, setColor] = useState('white');
    const [text, setText] = useState('Capybara');
    const [fontSize, setFontSize] = useState(120);

    return (
        <>
            <div className="title">3D Text</div>
            <div className="interactive-section">
                <div className="controller">
                    <div className="second-title" id="quick-view">Quick View</div>
                    <div className="control-panel">
                        <div className="label">
                            color
                        </div>
                        <div className="control">
                            <Input type="text" value={color} onChange={(v) => setColor(v)} />
                        </div>
                    </div>
                    <div className="control-panel">
                        <div className="label">
                            text
                        </div>
                        <div className="control">
                            <Input type="text" value={text} onChange={(v) => setText(v)} />
                        </div>
                    </div>
                    <div className="control-panel">
                        <div className="label">
                            font size
                        </div>
                        <div className="control">
                            <Input type="number" value={fontSize} onChange={(v) => setFontSize(Number(v))} />
                        </div>
                    </div>
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