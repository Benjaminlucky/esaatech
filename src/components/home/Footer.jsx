import React, { useState } from 'react';
import { subscribeToNewsletter } from '../../services/newsletterService';
import './Footer.css';

const Footer = ({ onOpenContactModal }) => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null); // 'success', 'error', null
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setSubscriptionStatus('error');
      setSubscriptionMessage('Please enter your email address');
      return;
    }

    setIsSubscribing(true);
    setSubscriptionStatus(null);
    setSubscriptionMessage('');

    try {
      await subscribeToNewsletter(email);
      setSubscriptionStatus('success');
      setSubscriptionMessage('Successfully subscribed! Check your email for confirmation.');
      setEmail('');
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubscriptionStatus(null);
        setSubscriptionMessage('');
      }, 5000);
    } catch (error) {
      setSubscriptionStatus('error');
      setSubscriptionMessage(error.message);
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubscriptionStatus(null);
        setSubscriptionMessage('');
      }, 5000);
    } finally {
      setIsSubscribing(false);
    }
  };

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
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="Your email address"
                className="footer-email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubscribing}
              />
              <button 
                type="submit" 
                className="footer-subscribe-btn"
                disabled={isSubscribing}
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {subscriptionMessage && (
              <div className={`newsletter-message ${subscriptionStatus}`}>
                {subscriptionMessage}
              </div>
            )}
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