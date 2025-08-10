import React from 'react';
import './CTAstrip.css';

const CTAstrip = () => {
  return (
    <section className="cta-strip">
      <div className="cta-container">
        <div className="cta-content">
          <h2>Not sure where to start?</h2>
          <p>Take our free readiness quiz to discover your organization's cybersecurity and AI readiness level</p>
          <button className="cta-quiz-btn">Take Free Readiness Quiz</button>
        </div>
        <div className="cta-visual">
          <div className="quiz-icon">📋</div>
        </div>
      </div>
    </section>
  );
};

export default CTAstrip; 