import { useLayoutEffect, useState } from "react";
import { selectDocData } from "../../constants/mockData";
import Select from "../Select/Select";
import QuickViewResult from "./QuickViewResult";
import { color } from "../../types/propTypes";
import { _color } from "../../constants/propConstants";
import Checkbox from "../Checkbox";
import Input from "../Input";

const SelectDocs = () => {
    const [color, setColor] = useState<color>('gray');
    const [disabled, setDisabled] = useState<boolean>();
    const [multiple, setMultiple] = useState<boolean>();
    const [searchable, setSearchable] = useState<boolean>();
    const [width, setWidth] = useState<number|string>();
    const [placeholder, setPlaceholder] = useState<string>();
    const [propsStr, setPropsStr] = useState("");

    useLayoutEffect(() => {
        let props = '';
        props += (color? `\n\tcolor="${color}"`:'')
        props += (width? `\n\twidth="${width}"`:'');
        props += (multiple? `\n\tmultiple`:'');
        props += (searchable?"\n\tsearchable":'');
        props += (disabled?"\n\tdisabled":'');

        setPropsStr(props);

    },[color, width, searchable, multiple, disabled])

    return (
        <>
            <div className="title">Select</div>
            <div className="interactive-section">
                <div className="controller">
                    <div className="second-title" id="quick-view">Quick View</div>
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
                            width
                        </div>
                        <div className="control">
                            <Input 
                                type="text" 
                                value={width} 
                                placeholder="eg: 250, 400px, default: 100%"
                                onChange={(v) => {
                                    if(v.length === 0 || isNaN(v as any)) {
                                        setWidth(v)
                                    } else {
                                        setWidth(parseInt(v));
                                    }
                                }} 
                            />
                        </div>
                    </div>
                    <div className="select-panel">
                        <div className="label">
                            multiple
                        </div>
                        <div className="control">
                            <Checkbox checked={multiple} onChange={(v) => setMultiple(v)} />
                        </div>
                    </div>
                    <div className="select-panel">
                        <div className="label">
                            searchable
                        </div>
                        <div className="control">
                            <Checkbox checked={searchable} onChange={(v) => setSearchable(v)} />
                        </div>
                    </div>
                    <div className="select-panel">
                        <div className="label">
                            disabled
                        </div>
                        <div className="control">
                            <Checkbox checked={disabled} onChange={(v) => setDisabled(v)} />
                        </div>
                    </div>
                </div>
                <QuickViewResult>
                    <QuickViewResult.Code>
    {`
    <Select${propsStr}
        onChange={(s) => console.log(s)}
        options={data} 
    />
    `}

                    </QuickViewResult.Code>
                    <QuickViewResult.Preview>
                        <Select 
                            color={color} 
                            onChange={(s) => console.log(s)} 
                            width={width} 
                            options={selectDocData} 
                            multiple={multiple} 
                            disabled={disabled} 
                            searchable={searchable}
                        />
                    </QuickViewResult.Preview>
                </QuickViewResult>
            </div>
        </>
    );
}

export default SelectDocs;