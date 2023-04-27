// import dataList from '../datas/Datas'
import { React, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Stars from '../components/Rating';
import Collaps from '../components/Collaps';

const Housing = () => {
    const [house, setHouse] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('../../datas/Housing.json'
        ,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(function(response){          
            return response.json();
        })
        .then(function(housing) {          
            if (housing.find((log) => log.id === params.id)) {
                setHouse(housing.find((log) => log.id === params.id)) 
                // console.log(house)                   
            }
            else {
                navigate("/404");
            }   
        })
}, [navigate, params.id]);

    return (
        house.id && (
        <section className="Housing">
            <div className="Carousel">
                <Carousel slides={house.pictures} />
            </div>

            <div className="Infos">
                <div className="InfosHouse">
                    <h1>{house.title}</h1>
                    <p>{house.location}</p>
                </div>
                <div className="Profile">
                    <p>{house.host.name}</p>
                    <img src={house.host.picture} alt="Profil user" />
                </div>
            </div>

            <div className="TagNotes">
                <ul>
                    {
                        house.tags.map((tag, i) =>  <li key={`${i}`}>{tag}</li>)
                    }
                </ul>
                <Stars />
            </div>

            <div className="MoreInfos">
                <Collaps
                    title="Description"
                    content={house.description}
                />
                <Collaps
                    title="Equipements"
                    content={house.equipments}
                />
            </div>
        </section>
        )
    )
}

export default Housing;