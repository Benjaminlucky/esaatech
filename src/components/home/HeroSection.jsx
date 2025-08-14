import React from "react";
import { motion } from "motion/react";
import heroBg from "../../../public/heroBg.png";
import cyberImage from "../../../public/cyberImage.png";
import automationImage from "../../../public/automationImage.png";
import consultingImage from "../../../public/consultingImage.png";
import { Link } from "react-router-dom";

const HeroSection = ({ onOpenContactModal }) => {
  return (
    <section
      className="hero-section bg-cover w-full min-h-screen bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="w-[90%] mx-auto py-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Side */}
        <motion.div
          className="heroLeft w-full lg:w-1/2 flex flex-col items-start justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="content flex flex-col justify-center  py-4 lg:py-46">
            <h1 className="text-3xl  text-center lg:text-left md:text-6xl text-white font-bold leading-[1.2]">
              Your Partner in Cyber Readiness, Security, and AI Transformation
            </h1>
            <p className="text-[12px] text-center md:text-left md:text-lg text-blue-100 mt-6">
              We combine proactive defense strategies, expert consulting, and
              cutting-edge AI innovation to protect your business and accelerate
              your digital transformation journey.
            </p>
            <div className="buttons w-full mx-auto flex flex-col  sm:flex-row items-start sm:items-center gap-4 mt-8">
              <Link
                to="#"
                className="bg-orange-500 w-full md:w-fit  text-white px-3 md:px-6 py-3 rounded-sm hover:bg-orange-600 transition-colors duration-300 text-lg font-semibold"
              >
                BOOK A FREE CONSULTATION
              </Link>
              <Link
                to="#"
                className="bg-white text-navy-700 w-full md:w-fit  px-3 md:px-6 py-3 rounded-sm hover:bg-blue-100 transition-colors duration-300 text-lg font-semibold"
              >
                ASSESS YOUR CYBER READINESS
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <div className="heroRight py-16 flex flex-col items-center lg:items-end gap-6">
          {/* Top Image */}
          <motion.div
            className="cyber"
            initial={{ opacity: 0, y: 20, scale: 1 }}
            animate={{
              opacity: 1, // stays visible
              y: [0, -10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
              opacity: { duration: 1 }, // only fades in once
            }}
          >
            <img src={cyberImage} alt="Cyber Attack Readiness" />
          </motion.div>

          {/* Bottom Images */}
          <div className="bottom flex gap-6">
            <motion.div
              className="ai"
              initial={{ opacity: 0, y: 20, scale: 1 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                y: {
                  duration: 2.2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                },
                scale: {
                  duration: 2.2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                },
                opacity: { duration: 1, delay: 0.2 },
              }}
            >
              <img src={automationImage} alt="AI Automations" />
            </motion.div>

            <motion.div
              className="ai"
              initial={{ opacity: 0, y: 20, scale: 1 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                y: {
                  duration: 2.4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                },
                scale: {
                  duration: 2.4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                },
                opacity: { duration: 1, delay: 0.4 },
              }}
            >
              <img src={consultingImage} alt="Consulting" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
