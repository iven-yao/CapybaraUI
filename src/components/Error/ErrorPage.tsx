import { Link } from 'react-router-dom';
import NeonText from '../Text/NeonText';
import './Error.scss';

const ErrorPage = () => {
    return (
        <div className="error-page-container">
            <div className='error-text'>
                <NeonText fontSize={120} color='red'>404 not found</NeonText>
                <NeonText fontSize={50} color='red'>
                    <Link to={'/'} style={{textDecoration:'none', color:'inherit'}}>
                        -Back-
                    </Link>
                </NeonText>
            </div>
        </div>
    )
}

export default ErrorPage;