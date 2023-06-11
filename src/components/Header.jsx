import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {
    const location = useLocation();
    const [path, setPath] = useState('/');

    useEffect(() => {
        setPath(location.pathname)
      },[location.pathname]);

    return (
        <header className="Navigation">
            <span><NavLink to="/"><img src={logo} alt="Logo Kasa" /></NavLink></span>
            <ul>
                <li><NavLink className={(path === '/' || path === '/home') ? "Underline" : ""} to="/">Accueil</NavLink></li>
                <li><NavLink className={(path === '/about') ? "Underline" : ""} to="/about">À propos</NavLink></li>
            </ul>
        </header>
    )
}

export default Header;