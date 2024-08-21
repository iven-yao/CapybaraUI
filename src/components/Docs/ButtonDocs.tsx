import { useState } from "react";
import Button from "../Button";
import { size, color, rounded } from "../../types/propTypes";
import Select from "../Select";
import { _rounded, _size, _color } from "../../constants/propConstants";
import Checkbox from "../Checkbox";
import { HandPointUpIcon, RotateIcon } from "../Icon/Icons";

const ButtonDocs = () => {
    const [color, setColor] = useState<color>();
    const [size, setSize] = useState<size>();
    const [rounded, setRounded] = useState<rounded>();
    const [border, setBorder] = useState(true);
    const [showCode, setShowCode] = useState(false);

    return (
        <div>
            <div className="title">Button</div>
            <div className="interactive-section">
                <div className="controller">
                    <div className="second-title">Quick View</div>
                    <div className="select-panel">
                        <div className="label">
                            color
                        </div>
                        <div className="control">
                            <Select onChange={(value) => setColor(value as color)} value={color}>
                                {_color.map(v => 
                                    <Select.Option value={v.value} key={v.value} label={v.label} />
                                )}
                            </Select>
                        </div>
                    </div>
                    <div className="select-panel">
                        <div className="label">
                            size
                        </div>
                        <div className="control">
                            <Select onChange={(value) => setSize(value as size)}>
                                {_size.map(v => 
                                    <Select.Option value={v.value} key={v.value} label={v.label} />
                                )}
                            </Select>
                        </div>
                    </div>
                    <div className="select-panel">
                        <div className="label">
                            rounded
                        </div>
                        <div className="control">
                            <Select onChange={(value) => setRounded(value as rounded)}>
                                {_rounded.map(v => 
                                    <Select.Option value={v.value} key={v.value} label={v.label} />
                                )}
                            </Select>
                        </div>
                    </div>
                    <div className="select-panel">
                        <div className="label">
                            border
                        </div>
                        <div className="control">
                            <Checkbox checked={border} onChange={(v) => setBorder(v)} />
                        </div>
                    </div>
                </div>
                <div className="result">
                    <Button 
                        className="switch-code-btn" 
                        border
                        size="xs"
                        onClick={() => setShowCode(!showCode)}
                        style={{width:'100px'}}
                    >
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                            <RotateIcon/>
                            {showCode?"Preview":"Code"}
                        </div>
                    </Button>
                    {showCode ?
                        <code className="code-snippet">
    {`
    <Button
        color="${color || "white"}"
        size="${size || "md"}"
        rounded="${rounded || "sm"}"${border?"\n\tborder":''}
    >
        Click Me! <FaHandPointUp/>
    </Button>
    `}
                        </code>
                        :
                        <Button color={color} size={size} rounded={rounded} border={border}>Click Me! <HandPointUpIcon/></Button>
                    }
                </div>
            </div>
            <div className="section">
                <div className="second-title" id=""></div>
            </div>
        </div>
    );
}

export default ButtonDocs;