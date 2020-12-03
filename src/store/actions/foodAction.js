import { ADD_TO_CART } from "../types"

export const addToCart = (food) => {
    return {
        type: ADD_TO_CART,
        payload: food
    }
}