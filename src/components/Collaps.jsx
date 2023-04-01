import React, {useState} from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import dataList from '../datas/Datas'

const Collaps = () => {

    const [isOpen, setIsOpen] = useState(true);
    const clickCollaps = () => {setIsOpen((isOpen) => !isOpen)};
    const className = {
        button: `collapsible`,
        myicon: `fa-sharp fa-solid fa-chevron-up${isOpen ? ' ' : 'icon-rotate'}`,
        content: `content${isOpen ? ' ' : 'not-display'}`
    };

    return (
        <section className="AboutCollaps">
            <button type="button" className={className.button} onClick={() => {clickCollaps()}}>Respect</button>
            <div className={className.content}>
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div>
        </section>
    )
}

export default Collaps;