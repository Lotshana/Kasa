//import dataList from '../datas/Datas'
//import Carousel from '../components/Carousel';
import Collaps from '../components/Collaps';

const Housing = ({title, location, host, rating, tags, description, equipments}) => {
    return (
        <section className="Housing">
            {/* {dataList.map((carousel) =>
                <Carousel
                    key={carousel.id}
                    id={carousel.id}
                    pictures={carousel.pictures}
                />
            )} */}
            {/*dataList.map((housing) =>
                <div className="HousingInfos">
                    <h3>{housing.title}</h3>
                    <p>{housing.location}</p>
                </div>
            )*/}
            <div className="Carousel"></div>

            <div className="Infos">
                <div>
                    <h1>Cozy loft on the Canal</h1>
                    <p>Paris, Île-de-France</p>
                </div>
                <div className="Profile">
                    <p>Alexandre Dumas</p>
                    <img src="../assets/profile.png" alt="Profil" />
                </div>
            </div>
            <div>
                <ul>
                    <li>Cozy</li>
                    <li>Canal</li>
                    <li>Paris 10</li>
                </ul>
            </div>

            <div className="Description">
                <Collaps />
                <Collaps />
                {/*dataList.map(({title, content}, index) =>
                    <Collaps
                        key={`${index}`}
                        title={title}
                        content={content}
                    />
                )*/}
                {/*dataList.map(({title, content}, index) =>
                    <Collaps
                        key={`${index}`}
                        title={title}
                        equipments={equipments}
                    />
                )*/}
            </div>
        </section>
    )
}

export default Housing;