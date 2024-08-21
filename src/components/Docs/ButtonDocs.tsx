import { useState } from "react";
import Button from "../Button";
import { size, color, rounded } from "../../types/propTypes";
import Select from "../Select";
import { _rounded, _size, _color } from "../../constants/propConstants";
import Checkbox from "../Checkbox";
import { HandPointUpIcon, RotateIcon } from "../Icon/Icons";

const ButtonDocs = () => {
    const [color, setColor] = useState<color>('white');
    const [size, setSize] = useState<size>('md');
    const [rounded, setRounded] = useState<rounded>('sm');
    const [border, setBorder] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [showCode, setShowCode] = useState(false);

    return (
        <div>
            <div className="title">Button</div>
            <div className="interactive-section">
                <div className="controller">
                    <div className="second-title" id="quick-view">Quick View</div>
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
                            <Select onChange={(value) => setSize(value as size)} value={size}>
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
                            <Select onChange={(value) => setRounded(value as rounded)} value={rounded}>
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
                    <div className="select-panel">
                        <div className="label">
                            shadow
                        </div>
                        <div className="control">
                            <Checkbox checked={shadow} onChange={(v) => setShadow(v)} />
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
        rounded="${rounded || "sm"}"${border?"\n\tborder":''}${shadow?"\n\tshadow":''}
    >
        Click Me! 
        <HandPointUpIcon/>
    </Button>
    `}
                        </code>
                        :
                        <Button 
                            color={color} 
                            size={size} 
                            rounded={rounded} 
                            border={border}
                            shadow={shadow}
                        >
                            Click Me! 
                            <HandPointUpIcon/>
                        </Button>
                    }
                </div>
            </div>
            <div className="section">
                <div className="second-title" id="full-apis">Full APIs</div>
            </div>
        </div>
    );
}

export default ButtonDocs;