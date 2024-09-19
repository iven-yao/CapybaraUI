import React from "react";
import fullLogo from '../../assets/fullLogo1000x250.png'
import './Home.scss';
import Nebula from "../../components/Background/Nebula";

const Home = () => {

    return (
        <div className='home-container'>
            <Nebula color1={"#f9b465"} color2={"blanchedalmond"}/>
            <img src={fullLogo} alt="capybara ui" style={{maxWidth:"50%"}}/>
        </div>
    
    );
}

export default Home;