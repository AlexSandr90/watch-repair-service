import React from 'react';
import './masters.scss';
import Master from "./master";
import { storage } from "../formik-form/FormikForm";
import { useSelector } from "react-redux";

const Masters = (props) => {
    const city = JSON.parse(storage.getItem('formikData')).city;
    const cities = useSelector(state => state.form.cities);
    const masters = useSelector(state => state.master);
    console.log('Masters city === ', city);
    console.log('Masters cities ===>>>> ', cities);
    const {date} = props.state;
    const filterMastersArr = [];
    console.log('filterMastersArr => ', filterMastersArr);
    masters.map(master => {
       if (master.city.toLowerCase() === city) {
           filterMastersArr.push(master);
       }
    });

    const master = filterMastersArr.length > 0 ?
        filterMastersArr.map(item => {
            return (
                <Master
                    key={item.id}
                    city={item.city}
                    name={item.name}
                    rating={item.rating}
                    schedule={item.schedule}
                />
            )
        }) :
        <div className='master'>
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