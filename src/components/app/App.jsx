import React from 'react';
import './app.scss';
import {useDispatch, useSelector} from "react-redux";

const App = () => {
    const dispatch = useDispatch();
    const schedule = useSelector(state => state.schedule);
    console.log(schedule);
    return (
        <div className="app">
            Happy hacking!
        </div>
    );
};

export default App;
