// src/components/AddProduct.js
import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');
    
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('image', image);

        try {
            const response = await fetch(`${API_BASE_URL}/products`, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setMessage('Product added successfully!');
                setName('');
                setPrice('');
                setDescription('');
                setImage(null);
            } else {
                setMessage('Failed to add product.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error adding product.');
        }
    };

    return (
        <div className="add-product-container">
            <h2>Add New Product</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Product Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Product Image:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
