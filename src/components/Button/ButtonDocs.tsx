import React, { useLayoutEffect, useState } from "react";
import Button from ".";
import { size, rounded, button_variant, shape } from "../../types/propTypes";
import { _rounded, _size, _button_variant, _button_shape } from "../../constants/propConstants";
import { HandPointUpIcon } from "../Icon/Icons";
import QuickViewResult from "../Docs/QuickViewResult";
import { CheckControl, ColorControl, SelectControl } from "../Docs/ControlPanel";

const ButtonDocs = () => {
    const [variant, setVariant] = useState<button_variant>('outline');
    const [color, setColor] = useState('');
    const [size, setSize] = useState<size>('md');
    const [rounded, setRounded] = useState<rounded|shape>('sm');
    const [shadow, setShadow] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [buttonPropsStr, setButtonPropsStr] = useState('');

    useLayoutEffect(() => {
        let props = '';
        props += (variant ? `\n\tvariant="${variant}"`:'');
        props += (color? `\n\tcolor="${color}"`:'')
        props += (size? `\n\tsize="${size}"`:'');
        props += (rounded? `\n\trounded="${rounded}"`:'');
        props += (shadow?"\n\tshadow":'');
        props += (disabled?"\n\tdisabled":'');

        setButtonPropsStr(props);

    },[variant, color, size, rounded, shadow, disabled])


    return (
        <div>
            <div className="title">Button</div>
            <div className="interactive-section">
                <div className="controller">
                    <div className="second-title" id="quick-view">Quick View</div>
                    <SelectControl label="variant" onChange={(value) => setVariant(value as button_variant)} value={variant} options={_button_variant}/>
                    <ColorControl value={color} onChange={(value:string) => setColor(value)}/>
                    <SelectControl label="size" onChange={(value) => setSize(value as size)} value={size} options={_size}/>
                    <SelectControl label="rounded" onChange={(value) => setRounded(value as rounded)} value={rounded} options={[..._rounded,..._button_shape]}/>
                    <CheckControl label="shadow" checked={shadow} onChange={(v) => setShadow(v)}/>
                    <CheckControl label="disabled" checked={disabled} onChange={(v) => setDisabled(v)}/>
                </div>
                <QuickViewResult>
                    <QuickViewResult.Code>
                        <pre>
                            <code>
{`
    <Button${buttonPropsStr}>
        Click Me 
        <HandPointUpIcon/>
    </Button>
`}
                            </code>
                        </pre>
                    </QuickViewResult.Code>
                    <QuickViewResult.Preview>
                        <Button 
                            variant={variant || "outline"}
                            color={color} 
                            size={size || "md"} 
                            rounded={rounded || "sm"} 
                            shadow={shadow}
                            disabled={disabled}
                        >
                            Click Me 
                            <HandPointUpIcon style={{marginLeft:"0.5rem"}}/>
                        </Button>
                    </QuickViewResult.Preview>
                </QuickViewResult>
            </div>
            <div className="section">
                <div className="second-title" id="full-apis">Full APIs</div>
            </div>
        </div>
    );
}

export default ButtonDocs;