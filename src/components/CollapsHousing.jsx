import React, {useState} from 'react';

const CollapsHousing = ({id, description, equipments}) => {

    const [isOpen, setIsOpen] = useState(false);
    const clickCollaps = () => {setIsOpen((isOpen) => !isOpen)};
    const className = {
        button: `collapsible`,
        myicon: `fa-sharp fa-solid fa-chevron-up${isOpen ? ' ' : ' icon-rotate'}`,
        content: `content${isOpen ? ' ' : ' not-display'}`
    };

    return (
        <section className="MoreInfos">
            <div className="HousingCollaps">
                <button type="button" className={className.button} onClick={() => {clickCollaps()}}>Description <i className={className.myicon}></i></button>
                <div className={className.content}>
                    <p>{description}</p>
                </div>
            </div>
            <div className="HousingCollaps">
                <button type="button" className={className.button} onClick={() => {clickCollaps()}}>Équipements <i className={className.myicon}></i></button>
                <div className={className.content}>
                    <p>{equipments}</p>
                </div>
            </div>
        </section>
    )
}

export default CollapsHousing;