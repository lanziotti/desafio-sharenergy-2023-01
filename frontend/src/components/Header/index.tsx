import './styles.css';
import LogoImage from '../../assets/logo.png';

function Header() {
    return (
        <header className='header'>
            <img
                className='logo-image'
                src={LogoImage}
                alt='Logo Sharenergy'
            />
        </header>
    );
}

export default Header;