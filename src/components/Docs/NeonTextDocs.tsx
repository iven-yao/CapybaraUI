import { useState } from "react";
import QuickViewResult from "./QuickViewResult";
import NeonText from "../Text/NeonText";
import Input from "../Input";

const NeonTextDocs = () => {
    const [color, setColor] = useState('');
    const [text, setText] = useState('Capybara');
    const [fontSize, setFontSize] = useState(120);

    return (
        <>
            <div className="title">Neon Text</div>
            <div className="interactive-section">
                <div className="controller">
                    <div className="second-title" id="quick-view">Quick View</div>
                    <div className="select-panel">
                        <div className="label">
                            color
                        </div>
                        <div className="control">
                            <Input type="text" value={color} onChange={(v) => setColor(v)} placeholder="Color code or css named color, default: violet"/>
                        </div>
                    </div>
                    <div className="select-panel">
                        <div className="label">
                            text
                        </div>
                        <div className="control">
                            <Input type="text" value={text} onChange={(v) => setText(v)} />
                        </div>
                    </div>
                    <div className="select-panel">
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