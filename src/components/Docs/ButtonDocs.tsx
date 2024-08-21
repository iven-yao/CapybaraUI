import { useState } from "react";
import Button from "../Button";
import { size, variant, rounded } from "../../types/propTypes";
import Select from "../Select";
import { _rounded, _size, _variant } from "../../constants/propConstants";
import Checkbox from "../Checkbox";

const ButtonDocs = () => {
    const [variant, setVariant] = useState<variant>();
    const [size, setSize] = useState<size>();
    const [rounded, setRounded] = useState<rounded>();
    const [border, setBorder] = useState(false);

    return (
        <>
            <div className="title">Button</div>
            <div className="interactive-section">
                <div className="controller">
                    <div className="select-panel">
                        <div className="label">
                            variant
                        </div>
                        <div className="control">
                            <Select onChange={(value) => setVariant(value as variant)} value={variant}>
                                {_variant.map(v => 
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
                            <Checkbox onChange={(v) => setBorder(v)} />
                        </div>
                    </div>
                </div>
                <div className="result">
                    <Button variant={variant} size={size} rounded={rounded} border={border}>Click Me!</Button>
                </div>
            </div>
        </>
    );
}

export default ButtonDocs;