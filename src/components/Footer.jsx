import logo from '../assets/images/logo.svg';

const Footer = () => {
    return (
        <footer className="Footer">
            <span><img src={logo} alt="Logo Kasa" /></span>
            <span>© 2020 Kasa. All rights reserved</span>
        </footer>
    )
}

export default Footer;