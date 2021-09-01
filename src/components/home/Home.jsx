import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addFormCityAction} from "../../redux/action-creators/form-creators";

const Home = () => {
    const dispatch = useDispatch();
    const cities = useSelector(state => state.form.cities);
    console.log('cities ==>> ', cities);
    const [ city, setCity ] = useState('');
    // console.log(cities);
    // console.log(city);

    const addCity = () => {
        let cityItem = city;
        if (city.length > 0) {
            dispatch(addFormCityAction(cityItem))
            setCity('');
        } else {
            alert('Введите название города');
        }
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
                {/* {
                    cities.length > 0
                        ? <ul>
                            {
                                cities.map(city => {
                                    console.log('city: ', city)
                                    return (
                                        <li>{city}</li>
                                    )
                                })
                            }
                        </ul>
                        : <div>Жодного міста не знайдено</div>
                } */}
                <ul>
                    {
                        cities.map(({ id, city }) => {
                            console.log('city: ', city);
                            console.log('city.id: ', id);
                            return (
                                <li key={id}>{city}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Home;