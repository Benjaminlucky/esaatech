import React from 'react';
import './Footer.css';

const Footer = ({ onOpenContactModal }) => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Tech Consulting Pro</h3>
            <p>Your partner in cyber readiness, security, and AI transformation. We help organizations protect their assets and accelerate their digital journey.</p>
            <div className="social-links">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Email</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#">Cyber Attack Readiness</a></li>
              <li><a href="#">Security Consulting</a></li>
              <li><a href="#">AI Implementation</a></li>
              <li><a href="#">IT Consulting</a></li>
              <li><a href="#">Training Programs</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><a href="#">Free Assessment</a></li>
              <li><a href="#">Security Guide</a></li>
              <li><a href="#">AI Checklist</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <p>📧 info@techconsultingpro.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Business Ave, Tech City, TC 12345</p>
            </div>
            <button 
              className="footer-consultation-btn"
              onClick={() => onOpenContactModal('appointment')}
            >
              Book a Free Consultation
            </button>
          </div>
        </div>
        
        <div className="footer-newsletter">
          <div className="newsletter-section">
            <h4>Stay Updated</h4>
            <p>Get the latest insights on cybersecurity and AI trends</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address"
                className="footer-email-input"
              />
              <button className="footer-subscribe-btn">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Tech Consulting Pro. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 