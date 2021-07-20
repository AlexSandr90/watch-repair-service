import {CLIENTS_INITIAL_STATE} from "../initialState";
const INITIAL_STATE = CLIENTS_INITIAL_STATE;

const clientReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default clientReducer;