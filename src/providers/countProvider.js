import React, { createContext, useReducer } from 'react';

export const CountContext = createContext();

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';


const createActions = dispatch => ({
    increment: value => dispatch({
        type: INCREMENT,
        payload: value,
    }),
    decrement: value => dispatch({
        type: DECREMENT,
        payload: value,
    })
})

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + action.payload;
        case DECREMENT:
            return state - action.payload;
        case RESET:
            return 0;
        default:
            return state
    }
}

const CountProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, 0);

    const actions = createActions(dispatch);

    return (
        <CountContext.Provider value={{state, actions}}>
            {props.children}
        </CountContext.Provider>
    )
}
export default CountProvider;