import dataList from '../datas/Datas'
import { React, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import CollapsHousing from '../components/CollapsHousing';

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
                console.log(house)                   
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
                <Carousel />
            </div>

            <div className="Infos">
                <div className="InfosHouse">
                    <h1>{house.title}</h1>
                    <p>{house.location}</p>
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
    )
}

export default Housing;