import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './login.module.css';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            username,
            password,
        };

        try {
            const response = await fetch('http://localhost:8080/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                alert('Login successful!');
                navigate('/homepage'); 
            } else {
                const data = await response.json();
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            setError('An error occurred while logging in');
        }
    };

    return (
        <div className={styles['login-container']}>
            <h2>Login</h2>
            {error && <div className={styles['login-error']}>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className={styles['login-input-field']}>
                    <input 
                        type="text" 
                        placeholder=" " 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required 
                    />
                    <label>Username</label>
                </div>
                <div className={styles['login-input-field']}>
                    <input 
                        type="password" 
                        placeholder=" " 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                    <label>Password</label>
                </div>
                <button className={styles['login-button']} type="submit">Login</button>
            </form>
            <div className={styles['login-register-link']}>
                Don't have an account? <a href="/register">Register</a>
            </div>
        </div>
    );
}

export default LoginForm;
