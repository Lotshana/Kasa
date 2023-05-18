import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Banner = () => {
    const [aboutPage, setAboutPage] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/about') {
            setAboutPage(true)
        };
        
    }, [location.pathname])

    return (
        <section className={aboutPage ? 'banner_about' : 'banner'}>
            {!aboutPage && <p>Chez vous, partout et ailleurs</p>}
        </section>
    )
}

export default Banner;