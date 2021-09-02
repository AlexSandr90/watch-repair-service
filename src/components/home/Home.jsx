import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addFormCityAction} from "../../redux/action-creators/form-creators";
import classes from './home.module.scss';

const Home = () => {
    const dispatch = useDispatch();
    const cities = useSelector(state => state.form.cities);
    console.log('cities ==>> ', cities);
    const [ city, setCity ] = useState('');

    const addCity = () => {
        let cityItem = {
            id: cities.length + 1,
            city
        };
        if (city.length > 0) {
            dispatch(addFormCityAction(cityItem))
            setCity('');
        } else {
            alert('Введите название города');
        }
    };

    return (
        <div className={classes.home}>
            <input
                type='text'
                placeholder='Type City...'
                value={city}
                onChange={event => setCity(event.target.value)}
            />
            <button onClick={() => addCity()}>Add city</button>
            <ul>
                {
                    cities.map(({id, city}) => {
                        return (
                            <li key={id}>{city}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Home;