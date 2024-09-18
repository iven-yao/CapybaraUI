import React, { useContext } from "react";
import fullLogo from '../../assets/fullLogo1000x250.png'
import './Home.scss';
import Nebula from "../Background/Nebula";
import ThemeContext from "../Theme/ThemeContext";

const Home = () => {

    const {primaryColor} = useContext(ThemeContext);

    return (
        <div className='home-container'>
            <Nebula color1={primaryColor} color2={"moccasin"}/>
            <img src={fullLogo} alt="capybara ui"/>
        </div>
    
    );
}

export default Home;