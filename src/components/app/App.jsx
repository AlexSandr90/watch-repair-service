import React, {useState} from 'react';
import classes from './app.module.scss';
import {useDispatch, useSelector} from "react-redux";
import Header from "../header";
import UserForm from "../user-form";
import FormikForm from '../formik-form';
import Masters from "../masters";
import {Switch, Route} from "react-router-dom";
import Home from "../home";



const App = () => {
    const dispatch = useDispatch();
    const [ state, setState ] = useState({});
    const [ cities, setCities ] = useState([]);


    const fetchCity = () => {
        let res = fetch('https://shrouded-sea-24591.herokuapp.com/api/city', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(responce => responce.json())
            .then(data => {
                setCities(data);
            });

        return res;
    };

    const apiCities = cities.length > 0 
            ? cities.map(city => {
                return (
                    <li key={city._id} >{city.city_name}</li>
                )
            })
            : null;
    
    return (
        <div className={classes.app}>
            <Header/>
            <main className={classes.main_wrap}>
                <button onClick={fetchCity} >Paint FETCH cities</button>
                <button onClick={() => setCities([])} >Refresh</button>
                <ul>
                    { apiCities }
                </ul>
                <Switch>
                    <Route exact path='/' render={() => <Home/> }/>
                    <Route axect path='/masters' render={() => <Masters state={state}/>}/>
                    <Route exact path='/user-form' render={() => <UserForm updateData={setState}/>}/>
                    <Route exact path='/formik-form' render={() => <FormikForm />}/>
                </Switch>
            </main>
        </div>
    );
};

export default App;
