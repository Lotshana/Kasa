import { Link } from 'react-router-dom'

const HousingList = ({id, title, cover}) => {
    return (
        <Link to={'/housing/' + id} className="HousingCard">
            <img src={cover} alt={title} />
            <h3>{title}</h3>
        </Link>
    )
}

export default HousingList;