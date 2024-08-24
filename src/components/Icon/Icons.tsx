import { PiCursorClick, PiXBold } from "react-icons/pi";
import { IoChevronDownOutline } from "react-icons/io5";
import { HiArrowPath } from "react-icons/hi2";
import { componentBasics } from "../../types/propTypes"
import { GoStar } from "react-icons/go";

const DropdownIcon = ({className, style}:componentBasics) => {
    return <IoChevronDownOutline  
        className={className}
        style={style}
    />
}

const RotateIcon = ({className, style}:componentBasics) => {
    return <HiArrowPath 
        className={className}
        style={style}
    />
}

const HandPointUpIcon = ({className, style}:componentBasics) => {
    return <PiCursorClick 
        className={className}        
        style={style}
    />
}

const XIcon = ({className, style}:componentBasics) => {
    return <PiXBold
        className={className}
        style={style}
    />
}

const StarIcon = ({className, style}:componentBasics) => {
    return <GoStar
        className={className}
        style={style}
    />
}

export {
    DropdownIcon, 
    RotateIcon,
    HandPointUpIcon,
    XIcon,
    StarIcon
};