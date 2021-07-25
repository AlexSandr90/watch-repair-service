import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/app";
import {Provider} from "react-redux";
import store from "./redux/store/store";

console.log('store => ', store);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);