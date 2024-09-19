import React, { useLayoutEffect, useState } from "react";
import Input from "../components/Input";
import { _input_variants, _input_types, _input_icons } from "../constants/propConstants";
import { inputVariant, inputTypes, inputIcons } from "../types/propTypes";
import { SelectControl, ColorControl, InputControl, CheckControl } from "./ControlPanel";
import QuickViewResult from "./QuickViewResult";

const InputDocs = () => {
    const [variant, setVariant] = useState<inputVariant>(null);
    const [type, setType] = useState<inputTypes>("text");
    const [color, setColor] = useState("");
    const [icon, setIcon] = useState<inputIcons>(null);
    const [floatingLabel, setFloatingLabel] = useState("");
    const [placeholder, setPlaceholder] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [inputPropsStr, setInputPropsStr] = useState("");
    
    useLayoutEffect(() => {
        let props = '';
        props += (floatingLabel? `\n\tfloatingLabel="${floatingLabel}"`:'')
        props += (placeholder? `\n\tplaceholder="${placeholder}"`:'')
        props += (variant? `\n\tvariant="${variant}"`:'')
        props += (type? `\n\ttype="${type}"`:'')
        props += (icon? `\n\ticon="${icon}"`:'')
        props += (color? `\n\tcolor="${color}"`:'')
        props += (disabled?"\n\tdisabled":'');

        setInputPropsStr(props);

    },[floatingLabel, variant, type, icon, color, disabled])

    return (
        <div>
            <div className="title">Input</div>
            <div className="interactive-section">
                <div className="controller">
                    <div className="second-title" id="quick-view">Quick View</div>
                    <SelectControl value={variant} onChange={(value) => setVariant(value as inputVariant)} label="variant" options={_input_variants} />
                    <SelectControl value={type} onChange={(value) => setType(value as inputTypes)} label="type" options={_input_types}/>
                    <ColorControl value={color} onChange={(value) => setColor(value)}/>
                    <SelectControl value={icon} onChange={(value) => setIcon(value as inputIcons)} label="icon" options={_input_icons}/>
                    <InputControl value={floatingLabel} onChange={(value) => setFloatingLabel(value as string)} label="floatingLabel" placeholder="This will conflict with placeholder attribute"/>
                    <InputControl value={placeholder} onChange={(value) => setPlaceholder(value as string)} label="placeholder"/>
                    <CheckControl label="disabled" checked={disabled} onChange={(v) => setDisabled(v)}/>
                </div>
                <QuickViewResult>
                    <QuickViewResult.Code>
{`
    <Input${inputPropsStr}/>
`}
                    </QuickViewResult.Code>
                    <QuickViewResult.Preview>
                        <Input 
                            floatingLabel={floatingLabel}
                            placeholder={placeholder}
                            variant={variant}
                            type={type}
                            color={color}
                            disabled={disabled}
                            icon={icon}
                        />
                    </QuickViewResult.Preview>
                </QuickViewResult>
            </div>
        </div>
    );
}

export default InputDocs;