import {createStore} from "redux";
import rootReducer from "../reducers/roorReducer";
import {composeWithDevTools} from "redux-devtools-extension";


const store = createStore(rootReducer,composeWithDevTools());

export default store;