import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, isLoggedIn, onBuyNow }) => {
    const handleBuyNow = () => {
        if (isLoggedIn) {
            onBuyNow(product);
        } else {
            alert('Please log in to buy this product.');
        }
    };

    return (
        <div className="product-card">
            <div className="product-image-wrapper">
                <div className="product-image-container">
                    <img src={product.image} alt={product.name} />
                </div>
            </div>
            <h3>{product.name}</h3>
            <p>Rs. {product.price}</p>
            <button className="buy-now" onClick={handleBuyNow}>
                {isLoggedIn ? "Buy Now" : "Login to Buy"}
            </button>
        </div>
    );
};

export default ProductCard;
