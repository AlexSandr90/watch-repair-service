import React from 'react';
import './masters.scss';
import masters from "../../redux/data/masters.data";
import Master from "./master";

const Masters = (props) => {
    console.log('Masters component props =>>>>>>   ', props);
    const {
        city
    } = props.state;
    const {date} = props.state;
    const filterMastersArr = [];
    console.log('filterMastersArr => ', filterMastersArr);
    masters.map(master => {
       if (master.city === city) {
           master.schedule.map(item => {
               if (item.date === date) {
                   filterMastersArr.push(master)
               }
           })
       }
    });

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
        <div style={{
            margin: 'calc(50vh - 10%) auto',
            fontSize: '1.5rem',
            color: 'red',
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            Нет мастеров, соответствующих вашим критериям поиска
        </div>;

    console.log(master);

    return (
        <div className='masters'>
            { master }
        </div>
    );
};

export default Masters;