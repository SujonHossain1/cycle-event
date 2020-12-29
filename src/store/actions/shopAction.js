import { ADD_TO_CART, GET_SINGLE_PRODUCT } from "../constTypes"

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        payload: id
    }
};

export const getSingleProduct = (id) => {
    return {
        type: GET_SINGLE_PRODUCT,
        payload: id
    }
}