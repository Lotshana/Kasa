import React, {useState} from 'react';

const Collaps = ({title, content}) => {

    const [isOpen, setIsOpen] = useState(false);
    const clickCollaps = () => {setIsOpen((isOpen) => !isOpen)};
    const className = {
        button: `collapsible`,
        myicon: `fa-sharp fa-solid fa-chevron-up${isOpen ? ' ' : ' icon-rotate'}`,
        content: `content${isOpen ? ' ' : ' not-display'}`
    };

    return (
        <section className="AboutCollaps">
            <button type="button" className={className.button} onClick={() => {clickCollaps()}}>{title} <i className={className.myicon}></i></button>
            <div className={className.content}>
                <p>{content}</p>
            </div>
        </section>
    )
}

export default Collaps;