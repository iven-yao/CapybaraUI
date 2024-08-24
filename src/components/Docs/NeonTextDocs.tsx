import { useState } from "react";
import QuickViewResult from "./QuickViewResult";
import ImageText from "../Text/ImageText";
import NeonText from "../Text/NeonText";
import { StarIcon } from "../Icon/Icons";

const NeonTextDocs = () => {
    const [color, setColor] = useState('violet');
    const [text, setText] = useState('capybara');

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
                            <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                        </div>
                    </div>
                    <div className="select-panel">
                        <div className="label">
                            text
                        </div>
                        <div className="control">
                            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                        </div>
                    </div>
                </div>
                <QuickViewResult style={{backgroundColor:'black'}}>
                    <QuickViewResult.Code>

                    </QuickViewResult.Code>
                    <QuickViewResult.Preview>
                        <NeonText color={color}>
                            {text}
                        </NeonText>
                    </QuickViewResult.Preview>
                </QuickViewResult>
            </div>
        </>
    );
}

export default NeonTextDocs;