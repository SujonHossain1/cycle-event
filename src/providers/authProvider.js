import React, {createContext, useReducer} from 'react';

export const AuthContext = createContext();

const authInitialState = {
    user: {},
    isSigned: false,
}

const authActions = dispatch => ({
    createUser: user => dispatch({
        type: 'CREATE_USER',
        payload: user
    })
})

const authReducer = (state, action) =>{
    switch(action.type){
        case 'CREATE_USER': 
        return{
            ...state,
            user: action.payload,
        }
        default:
            return state;
    }
}

const AuthProvider = (props) => {
    const [authState, dispatch] = useReducer(authReducer, authInitialState);
   const auth =  authActions(dispatch);
    return(
        <AuthContext.Provider value={{authState, auth}} >
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;