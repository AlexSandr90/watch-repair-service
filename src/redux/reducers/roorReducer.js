import { combineReducers } from "redux";
import masterReducer from "./masterReducer";
import clientReducer from "./clientReducer";

const rootReducer = combineReducers({
    master: masterReducer,
    client: clientReducer
});

export default rootReducer;