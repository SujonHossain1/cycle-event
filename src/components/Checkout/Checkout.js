import React from 'react';
import CheckoutProducts from './CheckoutProducts';
import { useDispatch, useSelector } from 'react-redux';
const Checkout = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.shop.cart);
    console.log(cartProducts);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    {
                        cartProducts.map((product) => <CheckoutProducts
                            key={product.id}
                            product={product}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Checkout;