import {combineReducers} from 'redux';
import blogReducer from './blogReducer';
import shopReducer from './shopReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    blogs: blogReducer,
    user: userReducer,
    shop: shopReducer,
});

export default rootReducer;