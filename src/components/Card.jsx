//import dataList from '../datas/Datas';
import HousingList from './HousingList';
import { React, useState, useEffect } from 'react';

const Card = () => {
    const [dataList, setdataList] = useState([]);

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
            setdataList(housing);
        })
}, []);

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