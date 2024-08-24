import { useEffect, useLayoutEffect, useState } from "react";
import Button from "../Button";
import { size, color, rounded, variant } from "../../types/propTypes";
import Select from "../Select";
import { _rounded, _size, _color, _variant } from "../../constants/propConstants";
import Checkbox from "../Checkbox";
import { HandPointUpIcon, RotateIcon } from "../Icon/Icons";
import QuickViewResult from "./QuickViewResult";

const ButtonDocs = () => {
    const [variant, setVariant] = useState<variant>();
    const [color, setColor] = useState<color>('gray');
    const [size, setSize] = useState<size>('md');
    const [rounded, setRounded] = useState<rounded>('sm');
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
                            <Checkbox checked={shadow} onChange={(v) => setShadow(v)}/>
                        </div>
                    </div>
                    <div className="select-panel">
                        <div className="label">
                            disabled
                        </div>
                        <div className="control">
                            <Checkbox checked={disabled} onChange={(v) => setDisabled(v)}/>
                        </div>
                    </div>
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
                            variant={variant}
                            color={color} 
                            size={size} 
                            rounded={rounded} 
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