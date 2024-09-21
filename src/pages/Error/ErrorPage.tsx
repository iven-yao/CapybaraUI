import React from "react";
import { Link } from 'react-router-dom';
import './Error.scss';
import Nebula from "../../components/Background/Nebula";
import { NeonText } from "@ivenyao/capybara-ui";

const ErrorPage = () => {
    return (
        <div className="error-page-container">
            <Nebula/>
            <div className='error-text'>
                <NeonText fontSize={60} color='#7befd0'>something went wrong</NeonText>
                <NeonText fontSize={30} color='#7befd0' className='back-btn'>
                    <Link to={'/'} style={{textDecoration:'none', color:'inherit'}}>
                        -Back-
                    </Link>
                </NeonText>
            </div>
        </div>
    )
}

export default ErrorPage;