import React, { useState } from "react";
import Select from "../Select/Select";
import QuickViewResult from "./QuickViewResult";
import { color } from "../../types/propTypes";
import { _color } from "../../constants/propConstants";
import Checkbox from "../Checkbox";

const NavbarDocs = () => {
    const [color, setColor] = useState<color>();
    const [disabled, setDisabled] = useState<boolean>();
    const [multiple, setMultiple] = useState<boolean>();
    // const [width, setWidth] = useState<number|string>();
    // const [placeholder, setPlaceholder] = useState<string>();

    return (
        <>
            <div className="title">Navbar (Not Ready)</div>
            <div className="interactive-section">
                <div className="controller">
                    <div className="second-title" id="quick-view">Quick View</div>
                    <div className="select-panel">
                        <div className="label">
                            color
                        </div>
                        <div className="control">
                            <Select onChange={(value) => setColor(value as color)} value={color} options={_color}/>
                        </div>
                    </div>
                    <div className="select-panel">
                        <div className="label">
                            option1
                        </div>
                        <div className="control">
                            <Checkbox checked={multiple} onChange={(v) => setMultiple(v)} />
                        </div>
                    </div>
                    <div className="select-panel">
                        <div className="label">
                            option2
                        </div>
                        <div className="control">
                            <Checkbox checked={disabled} onChange={(v) => setDisabled(v)} />
                        </div>
                    </div>
                </div>
                <QuickViewResult>
                    <QuickViewResult.Code>

                    </QuickViewResult.Code>
                    <QuickViewResult.Preview>
                        
                    </QuickViewResult.Preview>
                </QuickViewResult>
            </div>
        </>
    );
}

export default NavbarDocs;