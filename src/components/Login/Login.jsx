import React, { useState } from 'react';
import './Login.css';
import { loginUser, registerUser } from '../auth';
import { useNavigate } from 'react-router-dom';
import banner from '../../assets/bannerEcome.jpg'

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const result = await loginUser(username, password);
            if (result) {
                onLogin();
                navigate('/');
            } else {
                alert('Invalid credentials');
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    const handleRegister = async () => {
        try {
            const result = await registerUser(username, password);
            if (result) {
                alert('Registration successful! You can now log in.');
                setIsRegistering(false);
            }
        } catch (error) {
            console.error('Error registering:', error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-banner">
                <img src={banner} width="110%" alt="Login Banner" />
            </div>
            <div className="login-form">
                <h2>{isRegistering ? 'Register' : 'Login'}</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {isRegistering ? (
                    <button onClick={handleRegister}>Register</button>
                ) : (
                    <button onClick={handleLogin}>Login</button>
                )}
                <button
                    className="toggle-button"
                    onClick={() => setIsRegistering(!isRegistering)}
                >
                    {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
                </button>
            </div>
        </div>
    );
};

export default LoginPage;