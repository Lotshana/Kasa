import {NavLink} from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const Header = () => {
    return (
        <header className="Navigation">
            <span><img src={logo} alt="Logo Kasa" /></span>
            <ul>
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/about">À propos</NavLink></li>
            </ul>
        </header>
    )
}

export default Header;