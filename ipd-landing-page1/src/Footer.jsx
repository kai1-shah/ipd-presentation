// Footer.jsx
import React from 'react';
import './Footer.css'; // Import the CSS file for the footer

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <h2>What Our Customers Say</h2>
                <div className="testimonials">
                    <div className="testimonial">
                        <p>"This app has been a game-changer for my business!"</p>
                        <p className="author">- John Doe, CEO of XYZ Corp</p>
                    </div>
                    <div className="testimonial">
                        <p>"I highly recommend this app to anyone looking to improve their workflow."</p>
                        <p className="author">- Jane Smith, Freelance Designer</p>
                    </div>
                    <div className="testimonial">
                        <p>"This is the best app I've ever used! It's easy to use and packed with features."</p>
                        <p className="author">- Bob Johnson, Small Business Owner</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;