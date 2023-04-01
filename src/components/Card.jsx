import dataList from '../datas/Datas'
import HousingList from './HousingList';

const Card = () => {
    return (
        <section className="Card">
            {dataList.map((data) =>
                <HousingList
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    cover={data.cover}
                />
            )}
        </section>
    )
}

export default Card;