// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css'; // Make sure to create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h5>About Us</h5>
          <p>Description of the restaurant or company.</p>
        </div>
        <div className="footer-section">
          <h5>Contact</h5>
          <p>(123) 456-7890</p>
          <p>info@example.com</p>
        </div>
        <div className="footer-section">
          <h5>Follow Us</h5>
          {/* Social media icons */}
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Epicurean Symphony | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
