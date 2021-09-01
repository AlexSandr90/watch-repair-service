import React, {useState} from 'react';
import './app.scss';
import {useDispatch, useSelector} from "react-redux";
import Header from "../header";
import UserForm from "../user-form";
import Masters from "../masters";
import {Switch, Route} from "react-router-dom";
import Home from "../home";

const App = (props) => {
    const dispatch = useDispatch();
    const schedule = useSelector(state => state.schedule);
    const [ state, setState ] = useState({});
    console.log(schedule);
    return (
        <div className="app">
            <Header/>
            <main>
                <Switch>
                    <Route exact path='/' render={() => <Home/> }/>
                    <Route axect path='/masters' render={() => <Masters state={state}/>}/>
                    <Route exact path='/user-form' render={() => <UserForm updateData={setState}/>}/>
                </Switch>
            </main>
        </div>
    );
};

export default App;
