import React from "react";
import Input from "../Input";
import { convertToHex } from "../../utils/colorHelper";
import { CheckControlProps, ColorControlProps, SelectControlProps } from "./ControlPanelProps";
import Select from "../Select";
import Checkbox from "../Checkbox";

const ColorControl = (props:ColorControlProps) => {
    const {value, onChange, defaultValue} ={...props};

    return (
        <div className="control-panel">
            <div className="label">
                color
            </div>
            <div className="control">
                <Input 
                    type="text" 
                    value={value} 
                    onChange={(v) => onChange(v)} 
                    placeholder={`Color code or css named color, default: ${defaultValue || "gray"}`} 
                    width={"74%"}
                />
                <Input 
                    type="color" 
                    width={"24%"} 
                    onChange={(v) => onChange(v)} 
                    value={convertToHex(value || defaultValue || "gray")}
                />
            </div>
        </div>
    );
}

const SelectControl = (props:SelectControlProps) => {
    const {value, onChange, options, label} = {...props};
    return (
        <div className="control-panel">
            <div className="label">
                {label}
            </div>
            <div className="control">
                <Select onChange={(value) => onChange(value as string)} value={value} options={options}/>
            </div>
        </div>
    );
}

const CheckControl = (props:CheckControlProps) => {
    const {checked, onChange, label} = {...props};
    return (
        <div className="control-panel">
            <div className="label">
                {label}
            </div>
            <div className="control">
                <Checkbox checked={checked} onChange={(v) => onChange(v)}/>
            </div>
        </div>
    );
}

export {
    ColorControl,
    SelectControl,
    CheckControl
}