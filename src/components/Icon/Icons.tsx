import React from "react";
import { IoCheckmark, IoChevronDown, IoChevronUp, IoClose, IoMailOutline, IoMoonOutline, IoRepeat, IoSearch, IoStar, IoStarHalf, IoStarOutline, IoSunnyOutline } from "react-icons/io5";
import { componentBasics } from "../../types/propTypes"

const ChevronDownIcon = ({className, style}:componentBasics) => {
    return <IoChevronDown  
        className={className}
        style={style}
    />
}

const ChevronUpIcon = ({className, style}:componentBasics) => {
    return <IoChevronUp  
        className={className}
        style={style}
    />
}

const RotateIcon = ({className, style}:componentBasics) => {
    return <IoRepeat 
        className={className}
        style={style}
    />
}

const XIcon = ({className, style}:componentBasics) => {
    return <IoClose
        className={className}
        style={style}
    />
}

const StarIcon = ({className, style}:componentBasics) => {
    return <IoStarOutline
        className={className}
        style={style}
    />
}

const StarFillIcon = ({className, style}:componentBasics) => {
    return <IoStar
        className={className}
        style={style}
    />
}

const StarHalfIcon = ({className, style}:componentBasics) => {
    return <IoStarHalf
        className={className}
        style={style}
    />
}

const MailIcon = ({className, style}:componentBasics) => {
    return <IoMailOutline
        className={className}
        style={style}
    />
}

const SearchIcon = ({className, style}:componentBasics) => {
    return <IoSearch
        className={className}
        style={style}
    />
}

const SunnyIcon = ({className, style}:componentBasics) => {
    return <IoSunnyOutline
        className={className}
        style={style}
    />
}

const MoonIcon = ({className, style}:componentBasics) => {
    return <IoMoonOutline
        className={className}
        style={style}
    />
}

const CheckIcon = ({className, style}:componentBasics) => {
    return <IoCheckmark
        className={className}
        style={style}
    />
}

export {
    ChevronDownIcon,
    ChevronUpIcon,
    RotateIcon,
    XIcon,
    StarIcon,
    StarFillIcon,
    StarHalfIcon,
    MailIcon,
    SearchIcon,
    SunnyIcon,
    MoonIcon,
    CheckIcon
};