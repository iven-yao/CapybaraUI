import React from "react";
import { useState } from "react";
import QuickViewResult from "./QuickViewResult";
import { InputControl } from "./ControlPanel";
import { ImageText } from "@ivenyao/capybara-ui";

const ImageTextDocs = () => {
    const [src, setSrc] = useState('https://tinyurl.com/3pjr5jdt');
    const [text, setText] = useState('Capybara');
    const [fontSize, setFontSize] = useState(60);

    return (
        <>
            <div className="title">Image Text</div>
            <div className="interactive-section">
                <div className="controller">
                    <div className="second-title" id="quick-view">Quick View</div>
                    <InputControl label="src" value={src} onChange={v => setSrc(v)} />
                    <InputControl label="text" value={text} onChange={(v) => setText(v)} />
                    <InputControl label="font size" type="number" value={fontSize} onChange={(v) => setFontSize(Number(v))} />
                </div>
                <QuickViewResult>
                    <QuickViewResult.Code>
{`
    <ImageText 
        src="${src}" 
        fontSize="${fontSize}"
    >
        ${text}
    </ImageText>
`}
                    </QuickViewResult.Code>
                    <QuickViewResult.Preview>
                        <ImageText src={src} fontSize={fontSize}>
                            {text}
                        </ImageText>
                    </QuickViewResult.Preview>
                </QuickViewResult>
            </div>
        </>
    );
}

export default ImageTextDocs;