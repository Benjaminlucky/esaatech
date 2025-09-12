import React from "react";
import { motion } from "motion/react";
import heroImage from "/public/digitalTransformationPageHero.jpeg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { PiCloudArrowUpFill } from "react-icons/pi";

import { SiLegacygames } from "react-icons/si";

import { TbAutomation } from "react-icons/tb";

import { IoMdAnalytics } from "react-icons/io";

import { MdOutlineAnalytics } from "react-icons/md";

import { RiCustomerServiceFill } from "react-icons/ri";
import { MdOutlineManageAccounts } from "react-icons/md";

function DigitalTransformation() {
  const benefits = [
    {
      item: "Stay Competitive – adapt quickly to shifting markets and customer expectations.",
    },
    {
      item: "Boost Efficiency – streamline operations with automation and modern platforms.",
    },
    {
      item: "Enhance Customer Experience – deliver seamless, personalized digital interactions.",
    },
    {
      item: "Strengthen Security – protect data and systems as your business scales digitally.",
    },
    {
      item: "Unlock Innovation – leverage emerging tech to create new revenue streams.",
    },
  ];
  const services = [
    {
      title: "Cloud Migration & Optimization",
      description:
        "move workloads securely to the cloud and optimize for performance.",
      icon: <PiCloudArrowUpFill />,
    },
    {
      title: "Legacy System Modernization",
      description:
        "learn to build continuous integration and delivery pipelines with tools like Jenkins, GitHub Actions, or GitLab CI.",
      icon: <SiLegacygames />,
    },
    {
      title: "Process Automation",
      description:
        "automate manual workflows for speed, accuracy, and efficiency.",
      icon: <TbAutomation />,
    },
    {
      title: "Data & Analytics Strategy",
      description:
        "harness data for smarter decisions and predictive insights.",
      icon: <IoMdAnalytics />,
    },
    {
      title: "Customer Experience Solutions",
      description:
        "integrate digital platforms to improve engagement and satisfaction.",
      icon: <RiCustomerServiceFill />,
    },
    {
      title: "Change Management & Training",
      description: "equip teams to adopt and thrive with new technologies.",
      icon: <MdOutlineManageAccounts />,
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
              <span className="text-orange-500">
                Reimagine Your Business <br />{" "}
              </span>{" "}
              for the Digital Age
            </h1>
            <p className="text-xl text-orange-100 mt-3">
              Digital Transformation is about rethinking how your business
              creates value and grows. We help you modernize systems, adopt the
              cloud, and use AI to stay competitive and future-ready.
            </p>
            <div className="buttons mt-16 w-10/12 md:w-full mx-auto flex flex-col md:flex-col lg:flex-row sm:flex-row items-center gap-4 justify-center">
              <button className="primaryButton bg-gradient-to-r from-[#00D8FF] to-[#0A3D62] text-white hover:from-[#0A3D62] hover:to-[#00D8FF] transition-300">
                TALK TO US
              </button>

              <button className="secondaryButton">
                Start Your Transformation
              </button>
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
                  Why Digital Transformation Matters
                </h2>

                <p className="text-sm lg:text-xl text-orange-100 text-center lg:text-left mb-4">
                  The Key to Staying Relevant, Resilient, and Ready for the
                  Future
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
                Core Services
              </h2>
              <p className="text-orange-100 text-center lg:w-12/12 mx-auto">
                Practical Solutions to Drive Your Digital Future
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
                      className="card bg-[#0A3D62] rounded-md min-h-[300px] 
                        transition-all duration-500 
                        hover:[transform:rotateY(10deg)] 
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
                <div className="font-bold text-2xl">
                  Start Your Transformation
                </div>
                {/* <p className="text-center text-blue-100">
                  Start Automating Today
                </p> */}
                <button className="primaryButton mt-4 !w-[300px]  bg-gradient-to-r from-[#00D8FF] to-[#0A3D62] text-white hover:from-[#0A3D62] hover:to-[#00D8FF] transition-300">
                  TALK TO AN EXPERT
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalTransformation;
