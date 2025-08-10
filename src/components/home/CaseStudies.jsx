import React from 'react';
import './CaseStudies.css';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      category: 'Cyber Attack Readiness',
      title: 'Financial Institution Breach Prevention',
      challenge: 'A regional bank faced increasing cyber threats and needed to strengthen their security posture.',
      solution: 'Implemented comprehensive security assessments, penetration testing, and incident response planning.',
      outcome: 'Reduced security incidents by 85% and improved response time from 48 hours to 4 hours.',
      metrics: ['85% reduction in incidents', '4-hour response time', '100% compliance achieved']
    },
    {
      id: 2,
      category: 'Cyber Security Consulting',
      title: 'Healthcare Compliance Transformation',
      challenge: 'A healthcare provider struggled with HIPAA compliance and security policy gaps.',
      solution: 'Developed comprehensive security policies, staff training programs, and compliance frameworks.',
      outcome: 'Achieved full HIPAA compliance and reduced audit findings by 90%.',
      metrics: ['100% HIPAA compliance', '90% audit improvement', '500+ staff trained']
    },
    {
      id: 3,
      category: 'AI Implementation',
      title: 'Manufacturing Process Optimization',
      challenge: 'A manufacturing company needed to automate quality control and reduce production errors.',
      solution: 'Implemented AI-powered visual inspection systems and predictive maintenance algorithms.',
      outcome: 'Increased production efficiency by 40% and reduced defects by 60%.',
      metrics: ['40% efficiency gain', '60% defect reduction', '24/7 monitoring']
    }
  ];

  return (
    <section id="case-studies" className="case-studies">
      <div className="case-studies-container container">
        <div className="case-studies-header">
          <h2 className="text-secondary">Success Stories</h2>
          <p className="text-body">Real results from our partnerships with organizations across industries</p>
        </div>
        
        <div className="case-studies-grid">
          {caseStudies.map((study) => (
            <div key={study.id} className="case-study-card">
              <div className="case-study-header">
                <span className="case-category">{study.category}</span>
                <h3 className="text-tertiary">{study.title}</h3>
              </div>
              
              <div className="case-study-content">
                <div className="case-section">
                  <h4>Challenge</h4>
                  <p className="text-body">{study.challenge}</p>
                </div>
                
                <div className="case-section">
                  <h4>Solution</h4>
                  <p className="text-body">{study.solution}</p>
                </div>
                
                <div className="case-section">
                  <h4>Outcome</h4>
                  <p className="text-body">{study.outcome}</p>
                </div>
                
                <div className="case-metrics">
                  <h4>Key Metrics</h4>
                  <ul>
                    {study.metrics.map((metric, index) => (
                      <li key={index} className="text-small">{metric}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <button className="btn btn-primary btn-full">Read Full Case Study</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies; 