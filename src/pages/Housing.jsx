import dataList from '../datas/Datas'
import Carousel from '../components/Carousel';
import CollapsHousing from '../components/CollapsHousing';

const Housing = ({id, title, location, host, rating, tags, description, equipments}) => {
    return (
        <section className="Housing">
            <div className="Carousel">
                <Carousel />
            </div>
            {/* {dataList.map((carousel) =>
            )} }
            {/*dataList.map((housing) =>
                <div className="HousingInfos">
                    <h3>{housing.title}</h3>
                    <p>{housing.location}</p>
                </div>
            )*/}

            <div className="Infos">
                <div className="InfosHouse">
                    <h1>Cozy loft on the Canal Saint-Martin</h1>
                    <p>Paris, Île-de-France</p>
                </div>
                <div className="Profile">
                    <p>Alexandre Dumas</p>
                    <img src="../assets/profile.jpg" alt="Profil user" />
                </div>
            </div>
            <div className="TagNotes">
                <ul>
                    <li>Cozy</li>
                    <li>Canal</li>
                    <li>Paris 10</li>
                </ul>
            </div>

            <div>
            {dataList.map(({id, description, equipments}, index) =>
                <CollapsHousing
                    key={`${index}`}
                    id={id}
                    description={description}
                    equipments={equipments}
                />
            )}
            </div>
        </section>
    )
}

export default Housing;