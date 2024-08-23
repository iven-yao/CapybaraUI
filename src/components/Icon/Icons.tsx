import { PiCursorClick } from "react-icons/pi";
import { IoChevronDownOutline } from "react-icons/io5";
import { HiArrowPath } from "react-icons/hi2";
import { componentBasics } from "../../types/propTypes"

const DropdownIcon = ({className, style}:componentBasics) => {
    return <IoChevronDownOutline  
        className={className}
        style={{transform:"translateY(2px)", ...style}}
    />
}

const RotateIcon = ({className, style}:componentBasics) => {
    return <HiArrowPath 
        className={className}
        style={{transform:"translateY(2px)", marginRight:"0.5rem", ...style}}
    />
}

const HandPointUpIcon = ({className, style}:componentBasics) => {
    return <PiCursorClick 
        className={className}        
        style={{transform:"translateY(2px)", ...style}}
    />
}

export {
    DropdownIcon, 
    RotateIcon,
    HandPointUpIcon
};