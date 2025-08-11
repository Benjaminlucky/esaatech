import React from 'react';
import './CTAstrip.css';

const CTAstrip = ({ onOpenContactModal }) => {
  return (
    <section className="cta-strip">
      <div className="cta-container container">
        <div className="cta-content">
          <h2 className="text-secondary">Not sure where to start?</h2>
          <p className="text-body">
            Take our free readiness quiz to get personalized recommendations for your business
          </p>
          <button 
            className="btn btn-accent btn-large cta-button"
            onClick={() => onOpenContactModal('appointment')}
          >
            Get Started Today
            <span className="cta-icon">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTAstrip; 