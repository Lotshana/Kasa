import React, {useState} from 'react';

const CollapsHousing = ({id, equipments}) => {

    const [isOpen, setIsOpen] = useState(false);
    const clickCollaps = () => {setIsOpen((isOpen) => !isOpen)};
    const className = {
        button: `collapsible`,
        myicon: `fa-sharp fa-solid fa-chevron-up${isOpen ? ' ' : ' icon-rotate'}`,
        content: `content${isOpen ? ' ' : ' not-display'}`
    };

    return (
        <section className="HousingCollaps">
            <button type="button" className={className.button} onClick={() => {clickCollaps()}}>Équipements <i className={className.myicon}></i></button>
            <div className={className.content}>
                <p>{equipments}</p>
            </div>
        </section>
    )
}

export default CollapsHousing;