import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../store/actions/shopAction';
const ProductItem = ({ product }) => {
    const { id, name, price, img } = product;
    const dispatch = useDispatch();
    
    const addProductHandler = () => {
        dispatch(addToCart(id));
    }

    return (
        <div className="col-md-3">
            <div className="shop-item rounded-3 mt-3 shop-item">
                <img className="img-fluid" src={img} alt={name} />
                <h6> <Link to={`/shops/${id}`} style={{textDecoration: 'none'}}> {name} </Link> </h6>
                <p>Tk {price} </p>
                <div class="rating-style mt-1">
                    <span> 207 Rating / </span>
                    <span>110 Reviewers</span>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="mt-3 favorites" style={{ fontSize: '16px' }}>
                        <span className="icon">
                            <AiOutlineHeart />
                        </span>
                        <span>Favorites</span>
                    </p>
                    <button onClick={addProductHandler} class="btn btn-sm btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;