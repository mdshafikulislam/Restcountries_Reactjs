import React from 'react';
import './Product.css';


const Product = (props) => {
    const {name,img,features,seller,price,stock}=props.product;
    return (
        <div className="product-detail">
         <div className="product-1">
             <img src={img} alt="" />
         </div>
         <div className="product-2">
             <h3>{name}</h3>
             <div className="product-3">
        <div className="">
        <p>By:{seller}</p>
            <h4>${price}</h4>
            <p>only {stock} left in stock - order soon</p>
            <button className="btn-cart" onClick={() => props.handleAddToCart(props.product)}>Add to Cart
            </button>
        </div>
<div className="">
    <h3>Features</h3>
</div>
             </div>
         </div>
        </div>
    );
};

export default Product;