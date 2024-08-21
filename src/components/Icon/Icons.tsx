import { FaChevronDown, FaRegHandPointUp } from "react-icons/fa"
import { FaRotate } from "react-icons/fa6"
import { componentBasics } from "../../types/propTypes"

const DropdownIcon = ({className, style}:componentBasics) => {
    return <FaChevronDown 
        className={className}
        style={{transform:"translateY(2px)", marginLeft:"0.5rem", color:"rgba(0,0,0,0.25)", ...style}}
    />
}

const RotateIcon = ({className, style}:componentBasics) => {
    return <FaRotate 
        className={className}
        style={{transform:"translateY(2px)", marginRight:"0.5rem", color:"rgba(0,0,0,0.25)", ...style}}
    />
}

const HandPointUpIcon = ({className, style}:componentBasics) => {
    return <FaRegHandPointUp 
        className={className}        
        style={{transform:"translateY(2px)", ...style}}
    />
}

export {
    DropdownIcon, 
    RotateIcon,
    HandPointUpIcon
};