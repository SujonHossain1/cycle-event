import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { foodReducer, foodState } from '../../store/reducers/foodReducer';
import FoodItem from './FoodItem';

const Home = () => {
    const [foods, dispatch] = useReducer(foodReducer, foodState);
    console.log(foods);
    return (
        <div className="container">
            <h3>Add To Cart  <Link to="/"> {foods.cart.length} </Link> </h3>
            <div className="row">
                {
                    foods?.foods.map(food => <FoodItem
                        key={food.id}
                        food={food}
                        dispatch={dispatch}
                    />)
                }
            </div>
        </div>
    );
};

export default Home;