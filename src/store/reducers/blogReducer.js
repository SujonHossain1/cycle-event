const initialState = {
    blogs: []
};

const postReducer = (state = initialState, action) => {
    switch (action.type) { 
        case 'FETCH_POSTS':
            return {
                ...state,
                blogs: action.payload
            }
        case 'ADD_POST':
            return {
                ...state,
                blogs: [action.payload, ...state.blogs]
            }
        default:
            return state;
    }
}

export default postReducer;