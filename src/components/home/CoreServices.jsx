import React from 'react';
import './CoreServices.css';

const CoreServices = () => {
  const services = [
    {
      id: 1,
      title: 'Cyber Attack Readiness',
      icon: '🛡️',
      description: 'Prepare your organization for cyber threats with comprehensive readiness programs.',
      features: [
        'Security posture assessments',
        'Simulated attack drills (penetration testing, phishing simulations)',
        'Incident response planning'
      ]
    },
    {
      id: 2,
      title: 'Cyber Security Consulting',
      icon: '🔒',
      description: 'Expert guidance to build robust security frameworks and compliance strategies.',
      features: [
        'Strategy development & compliance',
        'Security policy creation',
        'Staff training on security best practices'
      ]
    },
    {
      id: 3,
      title: 'AI Implementation',
      icon: '🤖',
      description: 'Transform your business operations with cutting-edge AI solutions.',
      features: [
        'AI workflow automation',
        'AI-powered data analysis & decision-making',
        'AI chatbots & customer service integration'
      ]
    }
  ];

  return (
    <section className="core-services">
      <div className="services-container">
        <div className="services-header">
          <h2>Our Core Services</h2>
          <p>Comprehensive solutions to protect, secure, and transform your business</p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="service-cta">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices; 