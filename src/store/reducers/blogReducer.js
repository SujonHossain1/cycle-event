import { ADD_BLOG, GET_ALL_BLOGS, GET_BLOG, REMOVE_BLOG, UPDATE_BLOG } from "../constTypes";

const initialState = {
    blogs: [],
    singleBlog: {},
    deletePost: {}
};


const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_BLOGS:
            return {
                ...state,
                blogs: action.payload
            }
        case GET_BLOG:
            return {
                ...state,
                singleBlog: action.payload
            }

        case ADD_BLOG:
            return {
                ...state,
                blogs: [action.payload, ...state.blogs]
            }
        case UPDATE_BLOG:
            return {
                ...state,
                blogs: state.blogs.map(item => item._id === action.payload._id ? action.payload : item),
            }
        case REMOVE_BLOG:
            return {
                ...state,
                blogs: state.blogs.filter(item => item._id !== action.payload._id)
            }
        default:
            return state;
    }
}

export default postReducer;