import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

const Product = () => {
    const products = useSelector(state => state.shop.products);
    console.log(products);
    
    return (
        <div className="container">
            <div className="row">
                {
                    products.map((product) => <ProductItem
                        key={product.id}
                        product={product}
                    />)
                }
            </div>
        </div>
    );
};

export default Product;