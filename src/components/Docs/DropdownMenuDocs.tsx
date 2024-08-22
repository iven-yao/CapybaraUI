import { useState } from "react";
import { _color, _size, _rounded } from "../../constants/propConstants";
import Button from "../Button";
import Checkbox from "../Checkbox";
import DropdownMenu from "../DropdownMenu";
import { RotateIcon } from "../Icon/Icons";
import Select from "../Select";
import { color, rounded, size } from "../../types/propTypes";

const DropdownMenuDocs = () => {
    const [color, setColor] = useState<color>('white');
    const [size, setSize] = useState<size>('md');
    const [rounded, setRounded] = useState<rounded>('sm');
    const [border, setBorder] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [showCode, setShowCode] = useState(false);

    return (
        <div>
            <div className="title">Dropdown Menu</div>
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
                        rounded="none"
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
    <DropdownMenu 
        label="Action" 
        color="${color}"
    >
        <DropdownMenu.Items>
            <DropdownMenu.Item>test1</DropdownMenu.Item>
            <DropdownMenu.Item>test2</DropdownMenu.Item>
            <DropdownMenu.Item>test3</DropdownMenu.Item>
        </DropdownMenu.Items>
    </DropdownMenu>
    `}
                        </code>
                        :
                        <DropdownMenu 
                            label="Action" 
                            color={color}
                            size={size}
                            rounded={rounded}
                            border={border}
                            shadow={shadow}
                        >
                            <DropdownMenu.Items>
                                <DropdownMenu.Item onClick={() => {console.log('test1')}}>test1</DropdownMenu.Item>
                                <DropdownMenu.Item onClick={() => {console.log('test2')}}>test2</DropdownMenu.Item>
                                <DropdownMenu.Item onClick={() => {console.log('test3')}}>test3</DropdownMenu.Item>
                            </DropdownMenu.Items>
                        </DropdownMenu>
                    }
                </div>
            </div>
            <div className="section">
                <div className="second-title" id="full-apis">Full APIs</div>
            </div>
        </div>
    );
}

export default DropdownMenuDocs;