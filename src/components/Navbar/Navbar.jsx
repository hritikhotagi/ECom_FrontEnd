// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, onLogout, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <nav className="navbar">
            <h1 className="navbar-title">E-Commerce App</h1>
            <div className="navbar-links">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                {isLoggedIn ? (
                    <button onClick={onLogout} className="logout-button">
                        Logout
                    </button>
                ) : (
                    <Link to="/login" className="navbar-button">
                        Sign In / Sign Up
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
