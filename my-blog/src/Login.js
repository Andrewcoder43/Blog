import React, { useState } from 'react';
import { useUser } from './UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, user } = useUser();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Attempting to login with:', username, password); // For debugging
        const success = login(username, password);
        console.log('Login success:', success); // For debugging
        console.log('Current user after login attempt:', user); // For debugging
        if (success) {
            // Redirect to home page after successful login
            navigate('/');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Log In</button>
        </form>
    );
};

export default Login;