import React, { useState, useEffect } from 'react';
import ContactModal from './ContactModal';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'additional-services', label: 'Solutions' },
    { id: 'kids-academy', label: 'Kids Academy' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'tools', label: 'Tools' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container container">
          <a href="#home" className="nav-logo" onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}>
            Tech Consulting Pro
          </a>
          
          <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
            <button 
              className="nav-cta"
              onClick={() => setIsContactModalOpen(true)}
            >
              Contact Us
            </button>
          </div>
          
          <div 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default Navigation; 