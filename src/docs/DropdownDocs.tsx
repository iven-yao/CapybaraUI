import React, { useLayoutEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import { _button_variant, _size, _rounded } from "../constants/propConstants";
import { buttonVariant, size, rounded } from "../types/propTypes";
import { SelectControl, ColorControl, CheckControl } from "./ControlPanel";
import QuickViewResult from "./QuickViewResult";

const DropdownDocs = () => {
    const [variant, setVariant] = useState<buttonVariant>('outline');
    const [color, setColor] = useState('');
    const [size, setSize] = useState<size>('md');
    const [rounded, setRounded] = useState<rounded>('sm');
    const [disabled, setDisabled] = useState(false);
    const [propsStr, setPropsStr] = useState("");

    useLayoutEffect(() => {
        let props = '';
        props += (variant ? `\n\tvariant="${variant}"`:'');
        props += (color? `\n\tcolor="${color}"`:'')
        props += (size? `\n\tsize="${size}"`:'');
        props += (rounded? `\n\trounded="${rounded}"`:'');
        props += (disabled?"\n\tdisabled":'');

        setPropsStr(props);

    },[variant, color, size, rounded, disabled])

    return (
        <div>
            <div className="title">Dropdown</div>
            <div className="interactive-section">
                <div className="controller">
                    <div className="second-title" id="quick-view">Quick View</div>
                    <SelectControl label="variant" onChange={(value) => setVariant(value as buttonVariant)} value={variant} options={_button_variant}/>
                    <ColorControl value={color} onChange={(value:string) => setColor(value)}/>
                    <SelectControl label="size" onChange={(value) => setSize(value as size)} value={size} options={_size}/>
                    <SelectControl label="rounded" onChange={(value) => setRounded(value as rounded)} value={rounded} options={_rounded}/>
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
        </div>
    );
}

export default DropdownDocs;