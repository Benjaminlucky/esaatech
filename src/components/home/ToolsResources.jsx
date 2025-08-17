import React from "react";
import { motion } from "framer-motion";
import "./ToolsResources.css";
import { GiHazardSign } from "react-icons/gi";
import { RiShieldCheckLine } from "react-icons/ri";
import { BsRobot } from "react-icons/bs";
import { PiSirenFill } from "react-icons/pi";

const ToolsResources = () => {
  const tools = [
    {
      id: 1,
      title: "Cyber Risk Assessment",
      description:
        "Free self-assessment tool to evaluate your organization's cybersecurity posture.",
      icon: <GiHazardSign />,
      downloadText: "Start Assessment",
    },
    {
      id: 2,
      title: "Security Best Practices Guide",
      description:
        "Comprehensive guide with actionable cybersecurity tips for businesses.",
      icon: <RiShieldCheckLine />,
      downloadText: "Download Guide",
    },
    {
      id: 3,
      title: "AI Readiness Checklist",
      description:
        "Evaluate your organization's readiness for AI implementation.",
      icon: <BsRobot />,
      downloadText: "Get Checklist",
    },
    {
      id: 4,
      title: "Incident Response Template",
      description:
        "Ready-to-use templates for cybersecurity incident response procedures.",
      icon: <PiSirenFill />,
      downloadText: "Download Template",
    },
  ];

  // Section animation
  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        when: "beforeChildren",
        staggerChildren: 0.25,
      },
    },
  };

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
    hover: {
      scale: 1.05,
      rotate: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="tools"
      className="py-12 lg:py-36 w-full overflow-x-hidden text-white"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ willChange: "opacity, transform" }}
    >
      {/* Header */}
      <motion.div
        className="text-center w-11/12 mx-auto mb-12"
        variants={cardVariants}
      >
        <h2 className="title mb-4 text-secondary">Free Tools & Resources</h2>
        <p className="description max-w-xl mx-auto text-body">
          Access our collection of free cybersecurity tools, guides, and
          resources to strengthen your security posture.
        </p>
      </motion.div>

      {/* Tools Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
        variants={sectionVariants}
      >
        {tools.map((tool) => (
          <motion.div
            key={tool.id}
            className="relative rounded-2xl overflow-hidden group"
            variants={cardVariants}
            whileHover="hover"
          >
            {/* Glow Background */}
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at center, rgba(255,255,255,0.1), rgba(0,0,0,0.25))`,
                filter: "blur(30px)",
                transform: "scale(1.15)",
              }}
            ></div>

            {/* Glassmorphic Card */}
            <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl flex flex-col h-full shadow-lg shadow-black/40 p-6">
              <div className="flex flex-col flex-1 items-center text-center">
                {/* Icon */}
                <div className="text-5xl mb-4 text-orange-500">{tool.icon}</div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-3 text-tertiary">
                  {tool.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-300 flex-1">
                  {tool.description}
                </p>

                {/* CTA */}
                <button
                  className="mt-6 text-white font-semibold py-2 px-4 rounded-lg transition hover:scale-105 hover:bg-orange-500"
                  style={{
                    backgroundColor:
                      "rgba(243, 155, 22, 0.55) backdrop-blur-lg shadow-md",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.25)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    textShadow: "0px 0px 6px rgba(0,0,0,0.4)",
                  }}
                >
                  {tool.downloadText}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ToolsResources;
