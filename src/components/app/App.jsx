import React from 'react';
import './app.scss';
import {useDispatch, useSelector} from "react-redux";
import Header from "../header";
import UserForm from "../user-form";
import Masters from "../masters";
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";

const App = (props) => {
    const dispatch = useDispatch();
    const schedule = useSelector(state => state.schedule);
    console.log(schedule);
    console.log('App props => ',props);
    return (
        <Router>
            <div className="app">
                <Header/>
                <main>
                    <Switch>
                        <Route exact path='/' render={() => <div>Main</div>} />
                        <Route axect path='/masters' component={Masters} />
                        <Route exact path='/user-form' component={UserForm} />
                    </Switch>
                </main>
            </div>
        </Router>
    );
};

export default App;
