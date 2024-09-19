import React, { useContext, useState } from "react";
import Input from "../Input";
import { convertToHex } from "../../utils/colorHelper";
import { CheckControlProps, ColorControlProps, InputControlProps, SelectControlProps } from "./ControlPanelProps";
import Select from "../Select";
import Checkbox from "../Checkbox";
import ThemeContext from "../Theme/ThemeContext";

const ColorControl = (props:ColorControlProps) => {
    const {value, onChange, defaultValue} ={...props};
    const {primaryColor} = useContext(ThemeContext);
    const [internalId] = useState(crypto.randomUUID());

    return (
        <div className="control-panel">
            <div className="label">
                <label htmlFor={internalId}>
                    color
                </label>
            </div>
            <div className="control">
                <Input 
                    id={internalId}
                    type="text" 
                    value={value} 
                    onChange={(v) => onChange(v)} 
                    placeholder={`Hex color code or Name, default: ${defaultValue || primaryColor}`} 
                    width={"74%"}
                />
                <Input 
                    type="color" 
                    width={"24%"} 
                    onChange={(v) => onChange(v)} 
                    value={convertToHex(value || defaultValue || primaryColor)}
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
                <Select onChange={(value) => onChange(value as string|null)} value={value} options={options}/>
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

const InputControl = (props:InputControlProps) => {
    const {value, onChange, label, placeholder} = {...props};

    const handleChange = (value:string) => {
        onChange(value);
    }

    return (
        <div className="control-panel">
            <div className="label">
                {label}
            </div>
            <div className="control">
                <Input 
                    type="text" 
                    value={value} 
                    placeholder={placeholder}
                    onChange={handleChange} 
                />
            </div>
        </div>
    );
}

export {
    ColorControl,
    SelectControl,
    CheckControl,
    InputControl
}