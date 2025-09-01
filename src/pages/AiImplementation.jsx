import React from "react";
import { motion } from "motion/react";
import heroImage from "/public/aiAutomationPageHero.jpeg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiFlowChart } from "react-icons/ri";

import { RiRobot3Fill } from "react-icons/ri";

import { IoStatsChart } from "react-icons/io5";

import { HiOutlineDocumentSearch } from "react-icons/hi";

import { AiOutlineApi } from "react-icons/ai";

import { BsRobot } from "react-icons/bs";

function AiImplementation() {
  const benefits = [
    {
      item: "Boosting Efficiency – eliminate repetitive tasks and free your team for higher-value work",
    },
    {
      item: "Improving Accuracy – reduce costly errors with intelligent decision-making",
    },
    {
      item: "Scaling Operations – automate workflows to handle more customers, data, and tasks without extra headcount",
    },
    {
      item: "Unlocking Insights – turn data into actionable strategies using AI-powered analytics",
    },
    {
      item: "Saving Time & Costs – faster processes mean leaner operations and bigger savings",
    },
  ];
  const services = [
    {
      title: "Process Automation",
      description:
        "streamline repetitive tasks like employee onboarding, approvals, and invoicing, freeing up your team to focus on higher-value work.",
      icon: <RiFlowChart />,
    },
    {
      title: "AI-Powered Chatbots",
      description:
        "deliver 24/7 customer support with fast, accurate, and personalized responses that feel human, improving satisfaction and reducing wait times.",
      icon: <BsRobot />,
    },
    {
      title: "Workflow Integration",
      description:
        "connect your apps, CRMs, and business platforms into one seamless ecosystem, ensuring smooth data flow and eliminating silos.",
      icon: <AiOutlineApi />,
    },
    {
      title: "Predictive Analytics",
      description:
        "leverage AI to forecast customer behavior, detect market shifts early, and identify potential risks before they disrupt your business.",
      icon: <IoStatsChart />,
    },
    {
      title: "Intelligent Document Processing",
      description:
        "Automate the handling of contracts, forms, invoices, and reports with AI-driven data extraction and error reduction.",
      icon: <HiOutlineDocumentSearch />,
    },
    {
      title: "Custom AI Solutions",
      description:
        "design and deploy automation tailored to your industry, addressing unique challenges and unlocking new growth opportunities.",
      icon: <RiRobot3Fill />,
    },
  ];

  return (
    <div className="pageContainer w-full">
      {/* HERO */}
      <div
        className="pageHero w-full bg-cover bg-center bg-no-repeat flex items-center mx-auto aspect-[16/9]"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="heroBg w-full min-h-screen flex justify-center items-center bg-[#020814]/90 aspect-[16/9]">
          <motion.div
            className="pageHeroContent text-white text-center py-8 sm:w-11/12 md:max-w-9/12 lg:max-w-5/12 mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight text-center">
              <span className="text-orange-500">Work Smarter,</span> Scale
              Faster
            </h1>
            <p className="text-xl text-orange-100 mt-3">
              Automation helps your team focus on strategy and growth while
              intelligent systems handle the heavy lifting. From customer
              service to data processing, AI ensures speed, accuracy, and
              efficiency that humans alone can’t match.
            </p>
            <div className="buttons mt-16 w-10/12 md:w-full mx-auto flex flex-col md:flex-col lg:flex-row sm:flex-row items-center gap-4 justify-center">
              <button className="primaryButton bg-gradient-to-r from-[#00D8FF] to-[#0A3D62] text-white hover:from-[#0A3D62] hover:to-[#00D8FF] transition-300">
                START AUTOMATING
              </button>

              <button className="secondaryButton">BOOK A FREE DEMO</button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WHY SECTION */}
      <div className="sectionWhy w-full bg-[#020814] text-white py-4 lg:py-16 ">
        <div className="whySectionWrapper w-11/12 px-4 lg:px-16 mx-auto">
          <div className="whyContent py-4 lg:py-24 flex flex-col lg:flex-row gap-12">
            <motion.div
              className="left flex-1 flex justify-center items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="leftContent ">
                <img
                  src={heroImage}
                  alt="Cyber Attack Readiness Consult"
                  className="rounded-md hidden lg:block object-cover "
                />
              </div>
            </motion.div>
            <motion.div
              className="right flex-1 flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="rightContent">
                <h2 className="text-2xl text-center lg:text-left lg:text-4xl font-semibold mb-3 ">
                  Why AI Automation Matter
                </h2>

                <p className="text-sm lg:text-xl text-orange-100 text-center lg:text-left mb-4">
                  Manual processes slow businesses down, introduce errors, and
                  drain resources. AI-driven automation transforms how you
                  operate by:
                </p>
                <div className="benefits">
                  {benefits.map((item, idx) => (
                    <div className="benefit flex items-center gap-4 py-2 text-lg">
                      <div className="icon text-orange-500">
                        <IoIosCheckmarkCircle />
                      </div>
                      <p className="text-blue-100 text-sm">{item.item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <div className="processSection w-full bg-[#020814] text-white py-4 lg:py-16">
        <div className="processWrapper w-11/12 px-4 lg:px-16 mx-auto">
          <div className="processContent w-full justify-center flex flex-col gap-12 mx-auto">
            <div className="titleContent mx-auto">
              <h2 className="text-2xl text-center lg:text-4xl font-semibold mb-3 ">
                Our AI Automation Services
              </h2>
              <p className="text-orange-100 text-center lg:w-7/12 mx-auto">
                We don’t just set up tools—we design smart, tailored automation
                systems that align with your goals:
              </p>
            </div>

            <div className="cards w-full mx-auto lg:mt-12">
              <div className="cardContents w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((serviceItem, idx) => (
                  <motion.div
                    key={idx}
                    className="group [perspective:1000px]"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                  >
                    <div
                      className="card bg-[#0A3D62] rounded-md 
                        transition-all duration-500 
                        hover:[transform:rotateY(-10deg)] 
                        hover:shadow-lg hover:bg-[#0A3D62]/50 
                        hover:shadow-black/30 
                        [transform-style:preserve-3d]"
                    >
                      <div className="cardContent flex flex-col justify-center w-full p-5 py-8">
                        <div className="icon mx-auto text-orange-400 text-6xl  text-center py-3 mb-4">
                          {serviceItem.icon}
                        </div>
                        <h3 className="text-xl lg:text-2xl lg:px-8 font-bold text-center mb-4">
                          {serviceItem.title}
                        </h3>
                        <p className=" text-center text-orange-100">
                          {serviceItem.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              className="cta py-16 flex flex-col justify-center w-full mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="ctaContent flex flex-col justify-center text-center mx-auto ">
                <div className="font-bold text-2xl">Start Automating Today</div>
                {/* <p className="text-center text-blue-100">
                  Start Automating Today
                </p> */}
                <button className="primaryButton mt-4 !w-[300px]  bg-gradient-to-r from-[#00D8FF] to-[#0A3D62] text-white hover:from-[#0A3D62] hover:to-[#00D8FF] transition-300">
                  GET STARTED
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiImplementation;
