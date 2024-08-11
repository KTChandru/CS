import React from 'react';
import './footerStyles.css'; // Import CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>CS Vehicle Repair & Parts Hub</h3>
          <p>&copy; 2024 CS Vehicle Repair & Parts Hub. All rights reserved.</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@csrepairhub.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <a href="https://www.facebook.com/csrepairhub" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com/csrepairhub" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com/csrepairhub" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
