// src/auth.js
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (data.message === "Login successful!") {
            // Store authentication state in localStorage
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', username); // Optionally store the username
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error logging in:', error);
        return false;
    }
};

export const logoutUser = () => {
    // Clear any stored authentication state
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username'); // Optionally clear the username
    // Add additional logout logic if needed
};

export const registerUser = async (username, password) => {
    try {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            return true;
        } else {
            alert(data.message || 'Registration failed');
            return false;
        }
    } catch (error) {
        console.error('Error registering user:', error);
        return false;
    }
};

// Function to check if the user is logged in
export const isAuthenticated = () => {
    return localStorage.getItem('isLoggedIn') === 'true';
};
