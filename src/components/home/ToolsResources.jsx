import React from 'react';
import './ToolsResources.css';

const ToolsResources = () => {
  const resources = [
    {
      id: 1,
      title: 'Free Cyber Risk Assessment',
      description: 'Evaluate your organization\'s cybersecurity posture with our comprehensive self-assessment tool.',
      icon: '📊',
      type: 'Interactive Tool',
      duration: '15-20 minutes'
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices Guide',
      description: 'Download our comprehensive guide covering essential security practices for modern businesses.',
      icon: '📋',
      type: 'PDF Download',
      duration: '25 pages'
    },
    {
      id: 3,
      title: 'AI Readiness Checklist',
      description: 'Assess your organization\'s readiness for AI implementation with our detailed checklist.',
      icon: '🤖',
      type: 'Interactive Checklist',
      duration: '10-15 minutes'
    },
    {
      id: 4,
      title: 'Security Policy Templates',
      description: 'Ready-to-use security policy templates that you can customize for your organization.',
      icon: '📄',
      type: 'Template Pack',
      duration: 'Multiple files'
    }
  ];

  return (
    <section className="tools-resources">
      <div className="tools-container">
        <div className="tools-header">
          <h2>Free Tools & Resources</h2>
          <p>Empower your organization with our comprehensive cybersecurity and AI resources</p>
        </div>
        
        <div className="tools-grid">
          {resources.map((resource) => (
            <div key={resource.id} className="resource-card">
              <div className="resource-icon">
                <span>{resource.icon}</span>
              </div>
              <div className="resource-content">
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <div className="resource-meta">
                  <span className="resource-type">{resource.type}</span>
                  <span className="resource-duration">{resource.duration}</span>
                </div>
              </div>
              <button className="resource-cta">Get Started</button>
            </div>
          ))}
        </div>
        
        <div className="tools-newsletter">
          <div className="newsletter-content">
            <h3>Stay Updated</h3>
            <p>Get the latest cybersecurity insights and AI trends delivered to your inbox.</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsResources; 