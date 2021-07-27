import {createStore, applyMiddleware} from "redux";
import rootReducer from "../reducers/rootReducer";
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";


const store = createStore(rootReducer, composeWithDevTools());

export default store;