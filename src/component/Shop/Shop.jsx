import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './Shop.css';

const Shop = () => {
    
    const [products,setProducts]=useState([]);
    
useEffect(() =>{
    fetch('./products.JSON')
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[]);
const handleAddToCart = (product) => {
    console.log(product.name);
}

    return (
      <div className="shop-container">
            <div className="product-container">
            {
                products.map(product => <Product 
                    product={product}
                     key={product.key}
                     handleAddToCart={handleAddToCart}
                    ></Product>)
            }
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
                <h4>Items Ordered :{products.length}</h4>
            </div>
    </div>
       
    );
};

export default Shop;