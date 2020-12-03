import React, { useReducer } from 'react';
import { addToCart } from '../../store/actions/foodAction';
import { foodReducer, foodState } from '../../store/reducers/foodReducer';

const FoodItem = ({ food, dispatch }) => {
    const { title, img, price, description } = food;
    const handleAddToCart = () => {
        dispatch(addToCart(food));
        console.log("Food Add")

    }
    return (
        <div className="col-md-4">
            <div className="card">
                <img className="img-fluid" src={img} alt="" />
                <h4> {title}</h4>
                <p>Price: ${price}</p>
                <button onClick={handleAddToCart} className="btn btn-success">Add To Cart</button>
            </div>
        </div>
    );
};

export default FoodItem;