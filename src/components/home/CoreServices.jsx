import React from 'react';
import './CoreServices.css';
import cyberAttackImage from '../../assets/cyber_attack.png';
import cyberConsultingImage from '../../assets/cyber_consulting.png';
import aiImage from '../../assets/ai.png';

const CoreServices = () => {
  const services = [
    {
      id: 1,
      title: 'Cyber Attack Readiness',
      icon: cyberAttackImage,
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
      icon: cyberConsultingImage,
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
      icon: aiImage,
      description: 'Transform your business operations with cutting-edge AI solutions.',
      features: [
        'AI workflow automation',
        'AI-powered data analysis & decision-making',
        'AI chatbots & customer service integration'
      ]
    }
  ];

  return (
    <section id="services" className="core-services">
      <div className="services-container container">
        <div className="services-header">
          <h2 className="text-secondary">Our Core Services</h2>
          <p className="text-body">Comprehensive solutions to protect, secure, and transform your business</p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`service-card ${service.id === 1 ? 'cyber-attack-card' : service.id === 2 ? 'cyber-consulting-card' : 'ai-card'}`}
              style={service.id === 1 ? { '--cyber-attack-bg': `url(${cyberAttackImage})` } : 
                     service.id === 2 ? { '--cyber-consulting-bg': `url(${cyberConsultingImage})` } :
                     { '--ai-bg': `url(${aiImage})` }}
            >
              <div className="card-background-overlay"></div>
              
              <div className="card-header">
                <h3 className="card-title">{service.title}</h3>
              </div>
              
              <div className="card-content">
                <p className="card-description">{service.description}</p>
                <ul className="card-features">
                  {service.features.map((feature, index) => (
                    <li key={index} className="feature-item">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="card-footer">
                <button className="btn btn-primary btn-full">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices; 