import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';  
import RegisterPage from './pages/RegisterPage';  
import HomePage from './pages/HomePage';
import LandingPage from './landingPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />  
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/homePage" element={<HomePage />} /> 
                <Route path="/landingPage" element={<LandingPage />} />  
            </Routes>
        </Router>
    );
}

export default App;
