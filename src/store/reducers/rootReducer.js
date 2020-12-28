import {combineReducers} from 'redux';
import blogReducer from './blogReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    blogs: blogReducer,
    user: userReducer,
});

export default rootReducer;