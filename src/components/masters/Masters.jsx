import React from 'react';
import './masters.scss';
import masters from "../../redux/masters.data";
import Master from "./master";

const Masters = (props) => {
    const { city } = props.state;
    const filterMastersArr = masters.filter(master => master.city === city);

    const master = filterMastersArr.length > 0 ?
        filterMastersArr.map(item => {
            return (
                <Master
                    city={item.city}
                    name={item.name}
                    rating={item.rating}
                    schedule={item.schedule}
                />
            )
        }) :
        masters.map(item => {
            return (
                <Master
                    city={item.city}
                    name={item.name}
                    rating={item.rating}
                    schedule={item.schedule}
                />
            )
        });

    console.log(master);

    return (
        <div className='masters'>
            { master }
        </div>
    );
};

export default Masters;