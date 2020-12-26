import { ADD_BLOG, GET_ALL_BLOGS, GET_BLOG, REMOVE_BLOG, UPDATE_BLOG } from "../constTypes";

export const fetchPosts = () => async (dispatch) => {
    try {
        const res = await fetch('http://localhost:5000/api/blogs');
        const data = await res.json();
        dispatch({
            type: GET_ALL_BLOGS,
            payload: data
        })
    } catch (err) {
        console.log(err.message);
    }
}
export const addPost = (data) => async (dispatch) => {
    const response = await fetch('http://localhost:5000/api/blogs', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
    const result = await response.json();
    dispatch({
        type: ADD_BLOG,
        payload: result
    })
};

export const getSinglePost = (id) => async (dispatch) => {
    try {
        const res = await fetch(`http://localhost:5000/api/blogs/${id}`);
        const data = await res.json();
        dispatch({
            type: GET_BLOG,
            payload: data,
        })

    } catch (err) {
        console.log(err.message)
    }
};

export const deleteBlogPost = (_id) => async (dispatch) => {
    try {
        const res = await fetch(`http://localhost:5000/api/blogs/${_id}`, {
            method: 'DELETE',
        });
        const data = await res.json();
        dispatch({
            type: REMOVE_BLOG,
            payload: data,
            headers: { 'Content-Type': 'application/json' }
        })
    } catch (err) {
        console.log(err.message)
    }
};

export const updateBlogPost = (_id, data) => async (dispatch) => {
    try {
        const res = await fetch(`http://localhost:5000/api/blogs/${_id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });
        const result = await res.json();
        dispatch({
            type: UPDATE_BLOG,
            payload: result
        })
    } catch (err) {

    }
}