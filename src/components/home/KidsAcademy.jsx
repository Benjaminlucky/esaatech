import React from "react";
import { motion } from "framer-motion";
import "./KidsAcademy.css";
import { FaCircleCheck } from "react-icons/fa6";

const KidsAcademy = () => {
  const programs = [
    {
      id: 1,
      title: "Coding Fundamentals",
      age: "12-16 years",
      duration: "8 weeks",
      description:
        "Basic programming concepts using kid-friendly languages and tools.",
      topics: ["Scratch programming", "Python basics", "Game development"],
    },
    {
      id: 2,
      title: "Cyber Safety Basics",
      age: "8-12 years",
      duration: "4 weeks",
      description:
        "Introduction to online safety, password security, and responsible internet use.",
      topics: ["Password creation", "Safe browsing", "Social media awareness"],
    },
    {
      id: 3,
      title: "AI & Robotics",
      age: "10-14 years",
      duration: "6 weeks",
      description:
        "Introduction to artificial intelligence and robotics concepts for young learners.",
      topics: ["AI basics", "Robotics fundamentals", "Machine learning intro"],
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: "12",
      quote: "I learned how to stay safe online and even made my first game!",
    },
    {
      id: 2,
      name: "Michael Chen",
      age: "14",
      quote: "The coding class was amazing. I can now build simple websites!",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      age: "10",
      quote: "I feel much more confident using the internet safely now.",
    },
  ];

  // Animation variants for section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  // Animation variants for zoom-in and hover for cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
    hover: {
      scale: 1.03,
      rotate: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Animation variants for carousel
  const carouselVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    },
  };

  // Animation variants for carousel items
  const carouselItemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  return (
    <motion.section
      className="py-12 lg:py-36 w-full overflow-x-hidden text-white"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      style={{ willChange: "opacity, transform" }}
    >
      {/* Intro */}
      <motion.div
        className="text-center w-11/12 mx-auto mb-12"
        variants={cardVariants}
      >
        <h2 className="title mb-4">Code Cubs</h2>
        <p className="description max-w-xl mx-auto">
          Empowering the next generation with essential digital skills and cyber
          safety knowledge. Our age-appropriate programs make learning
          technology fun, safe, and engaging.
        </p>
      </motion.div>

      {/* Programs */}
      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
        variants={containerVariants}
      >
        {programs.map((program) => (
          <motion.div
            key={program.id}
            className="relative rounded-2xl overflow-hidden group"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            style={{ willChange: "transform, opacity" }}
          >
            {/* Glow Background */}
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at center, rgba(255,255,255,0.1), rgba(0,0,0,0.2))`,
                filter: "blur(30px)",
                transform: "scale(1.15)",
              }}
            ></div>

            {/* Glassmorphic Card */}
            <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl flex flex-col h-full overflow-hidden shadow-lg shadow-black/40 p-6">
              <div className="flex flex-col flex-1">
                <h4 className="cardTitle py-3 font-bold mb-3">
                  {program.title}
                </h4>
                <div className="text-sm text-gray-50 mb-2 py-5">
                  <span className="mr-3 bg-orange-400/50 backdrop-blur-lg shadow-md px-3 py-2 rounded-sm">
                    {program.age}
                  </span>{" "}
                  <span className="ml-3 bg-blue-400/50 backdrop-blur-lg shadow-md px-3 py-2 rounded-sm">
                    {program.duration}
                  </span>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  {program.description}
                </p>
                <ul className="text-sm text-gray-200 flex-1 space-y-1">
                  {program.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-center gap-2 py-1">
                      <FaCircleCheck />
                      {topic}
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-6 text-white font-semibold py-2 px-4 rounded-lg transition backdrop-blur-sm hover:scale-105"
                  style={{
                    backgroundColor:
                      "rgba(243, 155, 22, 0.55) backdrop-blur-lg shadow-md",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.25)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    textShadow: "0px 0px 6px rgba(0,0,0,0.4)",
                  }}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Testimonials Carousel */}
      <motion.div className="mt-20" variants={cardVariants}>
        <h3 className="text-center text-2xl font-semibold mb-6">
          What Kids Say
        </h3>
        <div className="overflow-hidden relative max-w-4xl mx-auto">
          <motion.div
            className="flex"
            variants={carouselVariants}
            animate="animate"
            style={{ width: "200%", willChange: "transform" }}
          >
            {[...testimonials, ...testimonials, ...testimonials].map(
              (testimonial, idx) => (
                <motion.div
                  key={idx}
                  className="min-w-[300px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 mx-3 shadow-md"
                  variants={carouselItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <p className="text-body text-sm mb-2">{testimonial.quote}</p>
                  <div className="testimonial-author text-xs  text-gray-300">
                    <strong>{testimonial.name}</strong> {testimonial.age} years
                    old
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div className="text-center mt-16" variants={cardVariants}>
        <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
        <p className="max-w-lg mx-auto text-gray-300 mb-6">
          Give your child the digital skills they need for the future. Limited
          spots available for our next session.
        </p>
        <div className="flex justify-center gap-4">
          <button className="btn btn-primary bg-orange-500 hover:bg-orange-600 transition-colors duration-300 text-white font-semibold py-2 px-4 rounded-sm shadow-md">
            Register Your Child
          </button>
          <button className="btn btn-outline border border-2-white hover:bg-white/10 transition-colors duration-300 text-white font-semibold py-2 px-4 rounded-sm shadow-md">
            Download Brochure
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default KidsAcademy;
