import React from 'react';
import './HeroSection.css';
import heroImage from '../../assets/hero-section.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img src={heroImage} alt="Hero background" className="hero-bg-image" />
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-headline">
            Your Partner in Cyber Readiness, Security, and AI Transformation
          </h1>
          <p className="hero-subheading">
            We combine proactive defense strategies, expert consulting, and cutting-edge AI innovation 
            to protect your business and accelerate your digital transformation journey.
          </p>
          <div className="hero-cta-buttons">
            <button className="cta-button primary">Book a Free Consultation</button>
            <button className="cta-button secondary">Assess Your Cyber Readiness</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-graphic">
            <div className="security-shield"></div>
            <div className="ai-brain"></div>
            <div className="network-nodes"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 