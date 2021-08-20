import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/app";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import store from "./redux/store/store";

console.log('store => ', store);
ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>,
    document.getElementById('root')
);