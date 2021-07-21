import React from 'react';
import './app.scss';
import {useDispatch, useSelector} from "react-redux";
import UserForm from "../user-form";

const App = () => {
    const dispatch = useDispatch();
    const schedule = useSelector(state => state.schedule);
    console.log(schedule);
    return (
        <div className="app">
            Happy hacking!
            <UserForm/>
        </div>
    );
};

export default App;
