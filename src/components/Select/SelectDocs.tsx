/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useLayoutEffect, useState } from "react";
import { selectDocData } from "../../constants/mockData";
import Select from "./Select";
import QuickViewResult from "../Docs/QuickViewResult";
import Input from "../Input";
import { CheckControl, ColorControl, InputControl } from "../Docs/ControlPanel";

const SelectDocs = () => {
    const [color, setColor] = useState("");
    const [disabled, setDisabled] = useState<boolean>(false);
    const [multiple, setMultiple] = useState<boolean>(false);
    const [searchable, setSearchable] = useState<boolean>(false);
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

    const handleWidthChange = (value: string) => {
        if(value.length === 0 || isNaN(Number(value))) {
            setWidth(value);
        } else {
            setWidth(parseInt(value));
        }
    }

    return (
        <>
            <div className="title">Select</div>
            <div className="interactive-section">
                <div className="controller">
                    <div className="second-title" id="quick-view">Quick View</div>
                    <ColorControl value={color} onChange={(value:string) => setColor(value)} />
                    <InputControl label="width" value={width} placeholder="eg: 250, 400px, default: 100%" onChange={handleWidthChange}/>
                    <CheckControl label="multiple" checked={multiple} onChange={(v) => setMultiple(v)} />
                    <CheckControl label="searchable" checked={searchable} onChange={(v) => setSearchable(v)} />
                    <CheckControl label="disabled" checked={disabled} onChange={(v) => setDisabled(v)} />
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
                            placeholder={placeholder}
                        />
                    </QuickViewResult.Preview>
                </QuickViewResult>
            </div>
        </>
    );
}

export default SelectDocs;