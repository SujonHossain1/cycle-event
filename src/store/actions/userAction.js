import { REGISTER } from "../constTypes";

export const register = (data) => async (dispatch) => {
    const res = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    });
    const result = await res.json();

    dispatch({
        type: REGISTER,
        payload: result
    })
}