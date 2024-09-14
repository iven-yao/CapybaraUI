import { Link } from 'react-router-dom';
import NeonText from '../Text/NeonText';
import './Error.scss';
import ImageText from '../Text/ImageText';
import ThreeDText from '../Text/ThreeDText';

const ErrorPage = () => {
    return (
        <div className="error-page-container">
            <div className='error-text'>
                <ThreeDText fontSize={60} color='white'>something went wrong</ThreeDText>
                <ThreeDText fontSize={30} color='white' className='back-btn'>
                    <Link to={'/'} style={{textDecoration:'none', color:'inherit'}}>
                        -Back-
                    </Link>
                </ThreeDText>
            </div>
        </div>
    )
}

export default ErrorPage;