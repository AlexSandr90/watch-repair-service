import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addFormCityAction} from "../../redux/action-creators/form-creators";

const Home = () => {
    const dispatch = useDispatch();
    const cities = useSelector(state => state.form.cities);
    const [ city, setCity ] = useState('');
    console.log(cities);
    console.log(city);

    const addCity = () => {
        let cityItem = city;
        dispatch(addFormCityAction(cityItem))
    };

    return (
        <div>
            <input
                type='text'
                placeholder='Type City...'
                value={city}
                onChange={event => setCity(event.target.value)}
            />
            <button onClick={() => addCity()}>Add city</button>
            <div>
                {
                    cities.length > 0
                        ? <ul>
                            {
                                cities.map(city => {
                                    return (
                                        <li>{city}</li>
                                    )
                                })
                            }
                        </ul>
                        : <div>Жодного міста не знайдено</div>
                }
            </div>
        </div>
    );
};

export default Home;