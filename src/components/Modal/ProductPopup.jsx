// src/components/ProductPopup/ProductPopup.js
import React from 'react';
import './ProductPopup.css';

const ProductPopup = ({ product, onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <h2>{product.name}</h2>
                <img src={product.image} alt={product.name} className="popup-image" />
                <p><strong>Price:</strong> ${product.price}</p>
                <p>{product.description}</p>
                <p className="future-features">
                    More features will be added in the future!
                </p>
                <button className="buy-now-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default ProductPopup;
