import client from "../client.data";

const INITIAL_STATE = client;

const clientReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default clientReducer;