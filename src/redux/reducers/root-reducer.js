import { combineReducers } from "redux";
import masterReducer from "./master-reducer";
import clientReducer from "./client-reducer";
import formReducer from "./form-reducer";

const rootReducer = combineReducers({
    form: formReducer,
    master: masterReducer,
    client: clientReducer
});

export default rootReducer;