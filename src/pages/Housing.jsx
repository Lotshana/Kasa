import dataList from '../datas/Datas'
//import Carousel from '../components/Carousel';

const Housing = ({title, location, host, rating, tags, description, equipment}) => {
    return (
        <section className="Housing">
            {/* {dataList.map((carousel) =>
                <Carousel
                    key={carousel.id}
                    id={carousel.id}
                    pictures={carousel.pictures}
                />
            )} */}
            {dataList.map((housing) =>
                <div className="HousingInfos">
                    <h3>{housing.title}</h3>
                    <p>{housing.location}</p>
                </div>
            )}
        </section>
    )
}

export default Housing;