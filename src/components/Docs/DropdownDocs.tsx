import { useState } from "react";
import { _color, _size, _rounded, _variant } from "../../constants/propConstants";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Dropdown from "../Dropdown";
import { RotateIcon } from "../Icon/Icons";
import Select from "../Select";
import { color, rounded, size, variant } from "../../types/propTypes";
import QuickViewResult from "./QuickViewResult";

const DropdownDocs = () => {
    const [variant, setVariant] = useState<variant>();
    const [color, setColor] = useState<color>('gray');
    const [size, setSize] = useState<size>('md');
    const [rounded, setRounded] = useState<rounded>('sm');
    const [shadow, setShadow] = useState(false);
    const [showCode, setShowCode] = useState(false);

    return (
        <div>
            <div className="title">Dropdown</div>
            <div className="interactive-section">
                <div className="controller">
                    <div className="second-title" id="quick-view">Quick View</div>
                    <div className="select-panel">
                        <div className="label">
                            variant
                        </div>
                        <div className="control">
                            <Select onChange={(value) => setVariant(value as variant)} value={variant} options={_variant}/>
                        </div>
                    </div>
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
                            size
                        </div>
                        <div className="control">
                            <Select onChange={(value) => setSize(value as size)} value={size} options={_size}/>
                        </div>
                    </div>
                    <div className="select-panel">
                        <div className="label">
                            rounded
                        </div>
                        <div className="control">
                            <Select onChange={(value) => setRounded(value as rounded)} value={rounded} options={_rounded}/>
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
                <QuickViewResult>
                    <QuickViewResult.Code>
    {`
    <Dropdown 
        label="Action" 
        ${variant ? `variant="${variant}"\n\t`:''}color="${color || "gray"}"
        size="${size || "md"}"
        rounded="${rounded || "sm"}"${shadow?"\n\tshadow":''}
    >
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
                        >
                            <Dropdown.Button
                                rounded={rounded}
                                size={size}
                            >
                                Action
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