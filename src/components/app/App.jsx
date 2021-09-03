import React, {useState} from 'react';
import classes from './app.module.scss';
import {useDispatch, useSelector} from "react-redux";
import Header from "../header";
import UserForm from "../user-form";
import FormikForm from '../formik-form';
import Masters from "../masters";
import {Switch, Route} from "react-router-dom";
import Home from "../home";

const App = (props) => {
    const dispatch = useDispatch();
    const masters = useSelector(state => state);
    const [ state, setState ] = useState({});
    console.log('App masters ===>>> ', masters.form);
    const {form} = masters.form;
    console.log(form)
    return (
        <div className={classes.app}>
            <Header/>
            <main className={classes.main_wrap}>
                <Switch>
                    <Route exact path='/' render={() => <Home/> }/>
                    <Route axect path='/masters' render={() => <Masters state={state}/>}/>
                    <Route exact path='/user-form' render={() => <UserForm updateData={setState}/>}/>
                    <Route exact path='/formik-form' render={() => <FormikForm state={masters.form}/>}/>
                </Switch>
            </main>
        </div>
    );
};

export default App;
