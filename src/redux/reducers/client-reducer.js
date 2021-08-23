import client from "../data/clients.data";

const INITIAL_STATE = client;

const clientReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default clientReducer;