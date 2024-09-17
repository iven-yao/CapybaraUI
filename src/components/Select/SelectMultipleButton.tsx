import React, { PropsWithChildren, useContext } from "react";
import { SelectMultipleButtonProps } from "./SelectProps";
import { XIcon } from "../Icon/Icons";
import { SelectContext } from "./SelectContext";
import clsx from "clsx";

const SelectMultipleButton = (props:PropsWithChildren<SelectMultipleButtonProps>) => {
    const {
        option
    } = {...props};

    const {setSelectedOption, selectedOption} = useContext(SelectContext);

    const handleRemoveOption = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        if(Array.isArray(selectedOption)) {
            setSelectedOption(selectedOption.filter(o => o.value !== option.value));
        }
    }

    return (
        <div 
            className={clsx(
                "multiple-button",
            )}>
            <div>{option.label}</div>
            <div className="icon-wrapper" onClick={handleRemoveOption} title="Remove"><XIcon className="xicon" /></div>
        </div>
    );
}

export default SelectMultipleButton;