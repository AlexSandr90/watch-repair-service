import formData from "../data/form.data";

const INITIAL_STATE = formData;

const formReducer = ({state = INITIAL_STATE, action}) => {
    switch (action.type) {
        default:
            return state
    }
};

export default formReducer;