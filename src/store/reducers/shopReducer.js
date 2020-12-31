import { ADD_TO_CART, GET_SINGLE_PRODUCT, REMOVE_CART } from "../constTypes";

const initialState = {
    products: [
        {
            id: 1,
            name: 'Duranta Steel 1-Spd City Bike 26 Black',
            brand: 'Duranta',
            price: 12500,
            stock: 24,
            quantity: 1,
            img: 'https://www.avoncycles.com/images/ProductImages/large/calypso-Ih21591445892.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero facilis ipsa minima eaque rerum aperiam est nisi perspiciatis unde, architecto expedita soluta ratione dicta odit quisquam quia non cum ut.'
        },
        {
            id: 2,
            name: 'Duranta Steel 1-Spd City Bike 26 Black',
            brand: 'Duranta',
            price: 15500,
            stock: 4,
            quantity: 1,
            img: 'https://www.pcbcycles.com/wp-content/uploads/2020/06/XENON-Model-24-054-XN.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero facilis ipsa minima eaque rerum aperiam est nisi perspiciatis unde, architecto expedita soluta ratione dicta odit quisquam quia non cum ut.'
        },
        {
            id: 3,
            name: 'Duranta Steel 1-Spd City Bike 26 Black',
            brand: 'Duranta',
            price: 15500,
            stock: 4,
            quantity: 1,
            img: 'https://www.pcbcycles.com/wp-content/uploads/2020/06/XENON-Model-24-054-XN.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero facilis ipsa minima eaque rerum aperiam est nisi perspiciatis unde, architecto expedita soluta ratione dicta odit quisquam quia non cum ut.'
        },
        {
            id: 4,
            name: 'Duranta Steel 1-Spd City Bike 26 Black',
            brand: 'Duranta',
            price: 12500,
            stock: 24,
            quantity: 1,
            img: 'https://www.avoncycles.com/images/ProductImages/large/calypso-Ih21591445892.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero facilis ipsa minima eaque rerum aperiam est nisi perspiciatis unde, architecto expedita soluta ratione dicta odit quisquam quia non cum ut.'
        },
        
    ],
    cart: [],
    productItem: {}
}


const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SINGLE_PRODUCT:
            return {
                ...state,
                productItem: state.products.find(product => product.id == action.payload)
            }
        case ADD_TO_CART:
            const newItem = state.products.filter(cartItem => cartItem.id === action.payload);
            return {
                ...state,
                cart: [...newItem, ...state.cart]
            }
        case REMOVE_CART:
            return {
                ...state,
                cart: state.products.filter(cartItem => cartItem.id !== action.payload)
            }
        default:
            return state;
    }
};

export default shopReducer;