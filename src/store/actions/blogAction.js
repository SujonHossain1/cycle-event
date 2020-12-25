export const addPost = (data) => async (dispatch) => {
    const response = await fetch('http://localhost:5000/api/blogs', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
    const result = await response.json();
    dispatch({
        type: 'ADD_POST',
        payload: result
    })
};

export const fetchPosts = () => async (dispatch) => {
    try {
        const res = await fetch('http://localhost:5000/api/blogs');
        const data = await res.json();
        dispatch({
            type: 'FETCH_POSTS',
            payload: data
        })
    } catch (err) {
        console.log(err.message);
    }
}