// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Header.css'; // Import the CSS file
import logo from './assets/logo.png'; // Adjust the path to your logo image

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="logo" /> {/* Logo on the extreme left */}
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li> {/* Link to Home route */}
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/try-for-free">Try for Free</Link></li>
                </ul>
            </nav>
            <div className="dropdown-icon">&#9776;</div> {/* Dropdown icon */}
        </header>
    );
};

export default Header;
