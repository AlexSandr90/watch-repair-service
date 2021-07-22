import masters from "../masters.data";

const INITIAL_STATE = masters;

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