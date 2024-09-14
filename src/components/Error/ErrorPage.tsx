import { Link } from 'react-router-dom';
import NeonText from '../Text/NeonText';
import './Error.scss';
import ImageText from '../Text/ImageText';
import ThreeDText from '../Text/ThreeDText';

const ErrorPage = () => {
    return (
        <div className="error-page-container">
            <div className='error-text'>
                <ThreeDText fontSize={120} color='white'>404 not found</ThreeDText>
                <ThreeDText fontSize={50} color='white' className='back-btn'>
                    <Link to={'/'} style={{textDecoration:'none', color:'inherit'}}>
                        -Back-
                    </Link>
                </ThreeDText>
            </div>
        </div>
    )
}

export default ErrorPage;