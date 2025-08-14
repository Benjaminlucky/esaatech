import React from "react";
import "./AdditionalServices.css";

const AdditionalServices = () => {
  const additionalServices = [
    {
      id: 1,
      title: "IT Consulting",
      icon: "💻",
      description:
        "Strategic IT planning and infrastructure optimization for your business needs.",
    },
    {
      id: 2,
      title: "Project Management Training",
      icon: "📊",
      description:
        "Comprehensive training programs to enhance your team's project management skills.",
    },
    {
      id: 3,
      title: "DevOps Courses",
      icon: "⚙️",
      description:
        "Modern DevOps practices and tools training for improved development workflows.",
    },
    {
      id: 4,
      title: "Digital Transformation",
      icon: "🚀",
      description:
        "End-to-end digital transformation consulting to modernize your business processes.",
    },
    {
      id: 5,
      title: "Cloud Migration",
      icon: "☁️",
      description:
        "Seamless cloud migration strategies and implementation support.",
    },
    {
      id: 6,
      title: "Website Design",
      icon: "🎨",
      description:
        "Modern, responsive website design and development for businesses of all sizes.",
    },
  ];

  return (
    <section id="additional-services" className="additional-services">
      <div className="additional-container container">
        <div className="additional-header">
          <h2 className="text-secondary">Additional Solutions</h2>
          <p className="text-body text-2xl">
            Comprehensive services to support your complete digital journey
          </p>
        </div>

        <div className="additional-grid">
          {additionalServices.map((service) => (
            <div key={service.id} className="additional-card">
              <div className="additional-icon">
                <span>{service.icon}</span>
              </div>
              <h3 className="text-tertiary">{service.title}</h3>
              <p className="text-body">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="additional-cta">
          <p className="text-body">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
