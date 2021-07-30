import React from 'react';
import './masters.scss';
import masters from "../../redux/masters.data";
import Master from "./master";

const Masters = (props) => {
    console.log('Masters component props =>>>>>>   ', props);
    const {
        city
    } = props.state;
    const {date} = props.state;
    masters.map(master => master.schedule.map(item => console.log(item.date)));
    console.log('Masters component date =>>>>>>   ', date);
    const filterMastersArr = masters.filter(master => (master.city === city) && (master.schedule.date === date));
    const filterMastersArr1 = masters.map(master => {
        const resArr = [];

        // console.log('props.state.schedule.date => ', date);
        // console.log('master.schedule ==============>>>>>>>>>>>>>>> ', master.schedule);
        const masterArrDate = master.schedule.filter(scheduleItem => scheduleItem.date === date);

        console.log('masterArrDate ==> ', masterArrDate);
        // console.log(master);

        if ((master.city === city) && (masterArrDate.length > 0)) {
            resArr.push(master);
        }

        console.log('resArr =>  ', resArr);
        return resArr;
    });
    // console.log('filterMastersArr => ', filterMastersArr);

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
        // masters.map(item => {
        //     return (
        //         <Master
        //             city={item.city}
        //             name={item.name}
        //             rating={item.rating}
        //             schedule={item.schedule}
        //         />
        //     )
        // });

    console.log(master);

    return (
        <div className='masters'>
            { master }
        </div>
    );
};

export default Masters;