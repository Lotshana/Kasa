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
        <div className="Collaps">
            <button type="button" className={className.button} onClick={() => {clickCollaps()}}>{title} <i className={className.myicon}></i></button>
            {
                Array.isArray(content) ?
                <ul className={className.content}>
                    {content.map((item, i) =>  <li key={`${i}`}>{item}</li>)}
                </ul>
                :
                <p className={className.content}>{content}</p>
            }
        </div>
    )
}

export default Collaps;