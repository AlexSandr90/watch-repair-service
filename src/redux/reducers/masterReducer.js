import { MASTERS_INITIAL_STATE } from "../initialState";

const INITIAL_STATE = MASTERS_INITIAL_STATE;

const masterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_ORDER':
            return {
                ...state,
                schedule: action.schedule
            };
        default:
            return state;
    }
};

export default masterReducer;