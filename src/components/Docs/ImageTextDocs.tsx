import { useState } from "react";
import QuickViewResult from "./QuickViewResult";
import ImageText from "../Text/ImageText";

const ImageTextDocs = () => {
    const [src, setSrc] = useState('https://img.freepik.com/premium-photo/there-are-lot-capybaras-that-are-standing-together-generative-ai_1034973-86457.jpg?w=826');
    const [text, setText] = useState('CAPYBARA');

    return (
        <>
            <div className="title">Image Text</div>
            <div className="interactive-section">
                <div className="controller">
                    <div className="second-title" id="quick-view">Quick View</div>
                    <div className="select-panel">
                        <div className="label">
                            src
                        </div>
                        <div className="control">
                            <input type="text" value={src} onChange={(e) => setSrc(e.target.value)} />
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
                <QuickViewResult>
                    <QuickViewResult.Code>

                    </QuickViewResult.Code>
                    <QuickViewResult.Preview>
                        <ImageText src={src}>
                            {text}
                        </ImageText>
                    </QuickViewResult.Preview>
                </QuickViewResult>
            </div>
        </>
    );
}

export default ImageTextDocs;