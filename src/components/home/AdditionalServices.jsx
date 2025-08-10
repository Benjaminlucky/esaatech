import React from 'react';
import './AdditionalServices.css';

const AdditionalServices = () => {
  const additionalServices = [
    {
      id: 1,
      title: 'IT Consulting',
      icon: '💻',
      description: 'Strategic IT planning and infrastructure optimization for your business needs.'
    },
    {
      id: 2,
      title: 'Project Management Training',
      icon: '📊',
      description: 'Comprehensive training programs to enhance your team\'s project management skills.'
    },
    {
      id: 3,
      title: 'DevOps Courses',
      icon: '⚙️',
      description: 'Modern DevOps practices and tools training for improved development workflows.'
    },
    {
      id: 4,
      title: 'Digital Transformation',
      icon: '🚀',
      description: 'End-to-end digital transformation consulting to modernize your business processes.'
    },
    {
      id: 5,
      title: 'Cloud Migration',
      icon: '☁️',
      description: 'Seamless cloud migration strategies and implementation support.'
    },
    {
      id: 6,
      title: 'Data Analytics',
      icon: '📈',
      description: 'Advanced data analytics and business intelligence solutions.'
    }
  ];

  return (
    <section className="additional-services">
      <div className="additional-container">
        <div className="additional-header">
          <h2>Additional Solutions</h2>
          <p>Comprehensive services to support your complete digital journey</p>
        </div>
        
        <div className="additional-grid">
          {additionalServices.map((service) => (
            <div key={service.id} className="additional-card">
              <div className="additional-icon">
                <span>{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="additional-cta">
          <p>Need a custom solution? Let's discuss your specific requirements.</p>
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices; 