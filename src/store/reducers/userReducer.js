import { REGISTER } from "../constTypes";

const initialState = {
    user: {}
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state;
    }
};

export default userReducer;;