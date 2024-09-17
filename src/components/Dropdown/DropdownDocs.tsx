import React, { useLayoutEffect, useState } from "react";
import { _size, _rounded, _button_variant } from "../../constants/propConstants";
import Dropdown from ".";
import { rounded, size, button_variant } from "../../types/propTypes";
import QuickViewResult from "../Docs/QuickViewResult";
import { CheckControl, ColorControl, SelectControl } from "../Docs/ControlPanel";

const DropdownDocs = () => {
    const [variant, setVariant] = useState<button_variant>('outline');
    const [color, setColor] = useState('');
    const [size, setSize] = useState<size>('md');
    const [rounded, setRounded] = useState<rounded>('sm');
    const [shadow, setShadow] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [propsStr, setPropsStr] = useState("");

    useLayoutEffect(() => {
        let props = '';
        props += (variant ? `\n\tvariant="${variant}"`:'');
        props += (color? `\n\tcolor="${color}"`:'')
        props += (size? `\n\tsize="${size}"`:'');
        props += (rounded? `\n\trounded="${rounded}"`:'');
        props += (shadow?"\n\tshadow":'');
        props += (disabled?"\n\tdisabled":'');

        setPropsStr(props);

    },[variant, color, size, rounded, shadow, disabled])

    return (
        <div>
            <div className="title">Dropdown</div>
            <div className="interactive-section">
                <div className="controller">
                    <div className="second-title" id="quick-view">Quick View</div>
                    <SelectControl label="variant" onChange={(value) => setVariant(value as button_variant)} value={variant} options={_button_variant}/>
                    <ColorControl value={color} onChange={(value:string) => setColor(value)}/>
                    <SelectControl label="size" onChange={(value) => setSize(value as size)} value={size} options={_size}/>
                    <SelectControl label="rounded" onChange={(value) => setRounded(value as rounded)} value={rounded} options={_rounded}/>
                    <CheckControl label="shadow" checked={shadow} onChange={(v) => setShadow(v)} />
                    <CheckControl label="disabled" checked={disabled} onChange={(v) => setDisabled(v)}/>
                </div>
                <QuickViewResult>
                    <QuickViewResult.Code>
    {`
    <Dropdown${propsStr}>
        <Dropdown.Button>
            Hover Me
        </Dropdown.Button>
        <Dropdown.Items>
            <Dropdown.Item>Save</Dropdown.Item>
            <Dropdown.Item>Edit</Dropdown.Item>
            <Dropdown.Item>Delete</Dropdown.Item>
        </Dropdown.Items>
    </Dropdown>
    `}
                    </QuickViewResult.Code>
                    <QuickViewResult.Preview>
                        <Dropdown 
                            variant={variant}
                            color={color}
                            shadow={shadow}
                            rounded={rounded}
                            size={size}
                            disabled={disabled}
                        >
                            <Dropdown.Button>
                                Hover Me
                            </Dropdown.Button>
                            <Dropdown.Items>
                                <Dropdown.Item onClick={() => {console.log('Save')}}>Save</Dropdown.Item>
                                <Dropdown.Item onClick={() => {console.log('Edit')}}>Edit</Dropdown.Item>
                                <Dropdown.Item onClick={() => {console.log('Delete')}}>Delete</Dropdown.Item>
                            </Dropdown.Items>
                        </Dropdown>
                    </QuickViewResult.Preview>
                </QuickViewResult>
            </div>
            <div className="section">
                <div className="second-title" id="full-apis">Full APIs</div>
            </div>
        </div>
    );
}

export default DropdownDocs;