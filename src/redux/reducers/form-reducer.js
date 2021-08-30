import formData from "../data/form.data";

export const ADD_CITY = 'ADD_CITY';
const INITIAL_STATE = formData;

const formReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_CITY:
            return {
                ...state, cities: [...state.cities, action.payload]
            };
        default:
            return state;
    }
};

export default formReducer;