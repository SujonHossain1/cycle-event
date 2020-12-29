import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import cycleImg from '../../assets/images/cycle.jpg';
import { getSingleProduct } from '../../store/actions/shopAction';

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const productItem = useSelector(state => state.shop.productItem)

    useEffect(() => {
         dispatch(getSingleProduct(parseInt(id)))
    }, [dispatch, id]);
    
    console.log(id)
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>Duranta Steel 1-Spd City Bike 26 Black</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo impedit nam inventore laboriosam delectus deleniti voluptatem, repellat ducimus fuga consequuntur, nesciunt sequi magnam, sed saepe id voluptatum ullam soluta assumenda!</p>
                    <h6>Price: 12550 Tk</h6>
                    <p>Available Product: 6</p>
                    <div className="d-flex">
                        <button className="btn btn-light">-</button>
                         <span className="mx-2 btn"> 23 </span>
                        <button className="btn btn-light">+</button>
                    </div>
                    <button className="btn btn-warning mt-2 rounded-pill">Add To Cart</button>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={cycleImg} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;