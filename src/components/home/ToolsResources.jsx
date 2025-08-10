import React from 'react';
import './ToolsResources.css';

const ToolsResources = () => {
  const tools = [
    {
      id: 1,
      title: 'Cyber Risk Assessment',
      description: 'Free self-assessment tool to evaluate your organization\'s cybersecurity posture.',
      icon: '🔍',
      downloadText: 'Start Assessment'
    },
    {
      id: 2,
      title: 'Security Best Practices Guide',
      description: 'Comprehensive guide with actionable cybersecurity tips for businesses.',
      icon: '📋',
      downloadText: 'Download Guide'
    },
    {
      id: 3,
      title: 'AI Readiness Checklist',
      description: 'Evaluate your organization\'s readiness for AI implementation.',
      icon: '🤖',
      downloadText: 'Get Checklist'
    },
    {
      id: 4,
      title: 'Incident Response Template',
      description: 'Ready-to-use templates for cybersecurity incident response procedures.',
      icon: '🚨',
      downloadText: 'Download Template'
    }
  ];

  return (
    <section id="tools" className="tools-resources">
      <div className="tools-container container">
        <div className="tools-header">
          <h2 className="text-secondary">Free Tools & Resources</h2>
          <p className="text-body">
            Access our collection of free cybersecurity tools, guides, and resources to strengthen your security posture.
          </p>
        </div>
        
        <div className="tools-grid">
          {tools.map((tool) => (
            <div key={tool.id} className="tool-card">
              <div className="tool-icon">
                <span>{tool.icon}</span>
              </div>
              <h3 className="text-tertiary">{tool.title}</h3>
              <p className="text-body">{tool.description}</p>
              <button className="btn btn-outline btn-full">{tool.downloadText}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsResources; 