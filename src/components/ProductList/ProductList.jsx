import ProductCard from '../ProductCard/ProductCard';
import ProductPopup from '../Modal/ProductPopup';
import './ProductList.css';
import React, { useState, useEffect } from 'react';

const ProductList = ({ isLoggedIn, searchQuery }) => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    useEffect(() => {
        fetch(`${API_BASE_URL}/products`)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery)
    );

    const handleBuyNow = (product) => {
        if (isLoggedIn) {
            setSelectedProduct(product);
        } else {
            alert('Please log in to buy this product.');
        }
    };

    const handleClosePopup = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="product-list">
            {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                    <ProductCard
                        key={product._id}
                        product={product}
                        isLoggedIn={isLoggedIn}
                        onBuyNow={handleBuyNow}
                    />
                ))
            ) : (
                <p className="no-products-message">No Products Found</p>
            )}

            {selectedProduct && (
                <ProductPopup product={selectedProduct} onClose={handleClosePopup} />
            )}
        </div>
    );
};

export default ProductList;
