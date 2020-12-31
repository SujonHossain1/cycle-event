import React, { useState } from 'react';


const CheckoutProducts = ({ product }) => {
    const { img, price, name,  quantity} = product;
    const [productQuantity, setproductQuantity,] = useState(quantity)
    return (
        
            <div className="product">
                <img className="img-fluid" src={img} alt="" />
                <div>
                    <h6> {name} </h6>
                    <p> Price: {price} TK </p>
                    <span className="quantity-btn">
                        <button onClick={() => setproductQuantity(productQuantity <= 1 ? 1 : productQuantity - 1)} className="btn btn-sm">-</button>
                        <span className="mx-2 btn"> {productQuantity} </span>
                        <button onClick={() => setproductQuantity(productQuantity + 1)} className="btn btn-sm">+</button>
                    </span>
                </div>
            </div>
        
    );
};

export default CheckoutProducts;