import React from 'react';
import './KidsAcademy.css';

const KidsAcademy = () => {
  const programs = [
    {
      id: 1,
      title: 'Coding Fundamentals',
      age: '12-16 years',
      duration: '8 weeks',
      description: 'Basic programming concepts using kid-friendly languages and tools.',
      topics: ['Scratch programming', 'Python basics', 'Game development']
    },
    {
      id: 2,
      title: 'Cyber Safety Basics',
      age: '8-12 years',
      duration: '4 weeks',
      description: 'Introduction to online safety, password security, and responsible internet use.',
      topics: ['Password creation', 'Safe browsing', 'Social media awareness']
    },
    {
      id: 3,
      title: 'AI & Robotics',
      age: '10-14 years',
      duration: '6 weeks',
      description: 'Introduction to artificial intelligence and robotics concepts for young learners.',
      topics: ['AI basics', 'Robotics fundamentals', 'Machine learning intro']
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      age: '12',
      quote: 'I learned how to stay safe online and even made my first game!'
    },
    {
      id: 2,
      name: 'Michael Chen',
      age: '14',
      quote: 'The coding class was amazing. I can now build simple websites!'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      age: '10',
      quote: 'I feel much more confident using the internet safely now.'
    }
  ];

  return (
    <section id="kids-academy" className="kids-academy">
      <div className="academy-container container">
        <div className="academy-intro">
          <h2 className="text-secondary">Kids Academy</h2>
          <p className="text-body">
            Empowering the next generation with essential digital skills and cyber safety knowledge. 
            Our age-appropriate programs make learning technology fun, safe, and engaging.
          </p>
        </div>

        <div className="programs-section">
          <h3 className="text-tertiary">Our Programs</h3>
          <div className="programs-grid">
            {programs.map((program) => (
              <div key={program.id} className="program-card">
                <div className="program-header">
                  <h4 className="text-tertiary">{program.title}</h4>
                  <div className="program-meta">
                    <span className="age-group">{program.age}</span>
                    <span className="duration">{program.duration}</span>
                  </div>
                </div>
                <p className="text-body">{program.description}</p>
                <ul className="program-topics">
                  {program.topics.map((topic, index) => (
                    <li key={index} className="text-small">{topic}</li>
                  ))}
                </ul>
                <button className="btn btn-accent btn-full">Enroll Now</button>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials-section">
          <h3 className="text-tertiary">What Kids Say</h3>
          <div className="testimonials-carousel">
            <div className="testimonials-track">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <p className="text-body">"{testimonial.quote}"</p>
                  <div className="testimonial-author">
                    <strong>{testimonial.name}</strong>
                    <span className="text-small">, {testimonial.age} years old</span>
                  </div>
                </div>
              ))}
              {/* Duplicate testimonials for seamless loop */}
              {testimonials.map((testimonial) => (
                <div key={`duplicate-${testimonial.id}`} className="testimonial-card">
                  <p className="text-body">"{testimonial.quote}"</p>
                  <div className="testimonial-author">
                    <strong>{testimonial.name}</strong>
                    <span className="text-small">, {testimonial.age} years old</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="academy-cta">
          <h3 className="text-tertiary">Ready to Get Started?</h3>
          <p className="text-body">
            Give your child the digital skills they need for the future. 
            Limited spots available for our next session.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Register Your Child</button>
            <button className="btn btn-outline">Download Brochure</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsAcademy; 