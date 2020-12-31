import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import cycleImg from '../../assets/images/cycle.jpg';
import { addToCart, getSingleProduct } from '../../store/actions/shopAction';

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const productItem = useSelector(state => state.shop.productItem);
    const [quantity, setQuantity] = useState(1);
    const [addedSuccessful, setAddedSuccessful] = useState(false);

    const { name, description, img, price, stock } = productItem;

    useEffect(() => {
        dispatch(getSingleProduct(parseInt(id)))
    }, [dispatch, id]);

    const handleAddToCart = () => {
        productItem.quantity = quantity;
        console.log(productItem)
        dispatch(addToCart(productItem.id));
        setAddedSuccessful(true);
    }
    setTimeout(() => {
        setAddedSuccessful(false);
    }, 2000)
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <h2> {name} </h2>
                    <p>{description}</p>
                    <h6>Price: {price} Tk</h6>
                    <p>Available Product: {stock}</p>
                    <span className="quantity-btn">
                        <button onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)} className="btn btn-sm">-</button>
                        <span className="mx-2 btn"> {quantity} </span>
                        <button onClick={() => setQuantity(quantity + 1)} className="btn btn-sm">+</button>
                    </span>
                    <div className="mt-2">
                        <button onClick={handleAddToCart} className="btn btn-warning mt-2 rounded-pill ">Add To Cart</button>
                        <span className="success"> {addedSuccessful && "Item added to cart Successfully"} </span>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;