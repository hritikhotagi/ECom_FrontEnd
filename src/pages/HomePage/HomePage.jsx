// src/pages/HomePage.js
import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ProductList from '../../components/ProductList/ProductList';
import './HomePage.css';
import BannerCarousel from '../../components/BannerCarousel/BannerCarousel';
import { Link } from 'react-router-dom';

const HomePage = ({ isLoggedIn, onLogout }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query.toLowerCase());
    };

    return (
        <div className="home-page">
            <Navbar isLoggedIn={isLoggedIn} onLogout={onLogout} onSearch={handleSearch} />
            <BannerCarousel />
            {/* <div className="home-actions">
                <Link to="/add-product" className="add-product-button">
                    <button className="button">Add New Product</button>
                </Link>
            </div> */}
            <div className="product">
                <ProductList searchQuery={searchQuery} isLoggedIn={isLoggedIn} />
            </div>
        </div>
    );
};

export default HomePage;
