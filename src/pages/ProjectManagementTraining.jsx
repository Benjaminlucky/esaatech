import React from "react";
import { motion } from "motion/react";
import heroImage from "/public/projectMgtPageHero.jpg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { ImFlag } from "react-icons/im";

import { DiScrum } from "react-icons/di";

import { TbPodium } from "react-icons/tb";

import { MdManageAccounts } from "react-icons/md";

import { FaChessRook } from "react-icons/fa";

import { RiCustomerService2Fill } from "react-icons/ri";

function ProjectManagementTraining() {
  const benefits = [
    {
      item: "Plan Effectively – define scope, timelines, and resources with clarity",
    },
    {
      item: "Collaborate Better – improve team communication and stakeholder alignment",
    },
    {
      item: "Control Risks – identify challenges early and keep projects on track",
    },
    {
      item: "Boost Efficiency – streamline workflows and eliminate costly delays",
    },
    {
      item: "Deliver Results – achieve business goals through structured execution",
    },
  ];
  const services = [
    {
      title: "Project Management Fundamentals",
      description:
        "build a strong foundation in planning, scheduling, and execution so projects stay on track and deliver measurable value.",
      icon: <ImFlag />,
    },
    {
      title: "Agile & Scrum Training",
      description:
        "master modern, flexible frameworks that help teams adapt quickly, respond to change, and deliver faster outcomes.",
      icon: <DiScrum />,
    },
    {
      title: "Leadership & Team Management",
      description:
        "develop the people skills needed to inspire, communicate effectively, and manage high-performing teams under pressure.",
      icon: <TbPodium />,
    },
    {
      title: " Risk & Change Management",
      description:
        "learn how to anticipate obstacles, minimize costly disruptions, and guide organizations smoothly through change.",
      icon: <MdManageAccounts />,
    },
    {
      title: "Advanced Project Strategies",
      description:
        "refine your expertise with proven tools, metrics, and best practices that optimize performance and give you a competitive edge.",
      icon: <FaChessRook />,
    },
    {
      title: "Communication & Stakeholder Management",
      description:
        "access expert guidance whenever you need it, with continuous support that evolves alongside your business.",
      icon: <RiCustomerService2Fill />,
    },
  ];

  return (
    <div className="pageContainer w-full">
      {/* HERO */}
      <div
        className="pageHero w-full bg-cover bg-center bg-no-repeat flex items-center mx-auto "
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="heroBg w-full min-h-screen flex justify-center items-center bg-[#020814]/90">
          <motion.div
            className="pageHeroContent text-white text-center py-8 sm:w-11/12 md:max-w-9/12 lg:max-w-5/12 mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight text-center">
              <span className="text-orange-500">Master the Skills to</span> Lead
              Projects with Confidence
            </h1>
            <p className="text-xl text-orange-100 mt-3">
              In today’s fast-moving business world, successful projects require
              strong leadership, clear processes, and proven skills. Our Project
              Management Training gives your team the tools and techniques to
              deliver on time, on budget, and with real impact.
            </p>
            <div className="buttons mt-16 w-10/12 md:w-full mx-auto flex flex-col md:flex-col lg:flex-row sm:flex-row items-center gap-4 justify-center">
              <button className="primaryButton ">TALK TO US</button>
              <button className="secondaryButton">ENROLL NOW</button>
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
                  className="rounded-md hidden lg:block object-cover shadow-lg shadow-black/40"
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
                  Why Project Management Training
                </h2>
                <p className="text-lg text-blue-50 leading-relaxed text-justify hyphens-auto mb-8">
                  Many projects fail due to poor planning, weak communication,
                  or lack of accountability. The right training ensures your
                  teams can:
                </p>
                <p className="text-xl text-orange-100 mb-4">
                  Project Management Training helps you:
                </p>
                <div className="benefits">
                  {benefits.map((item, idx) => (
                    <div className="benefit flex items-center gap-4 py-2 text-lg">
                      <div className="icon text-orange-500">
                        <IoIosCheckmarkCircle />
                      </div>
                      <p className="text-blue-100">{item.item}</p>
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
                Our Training Programs
              </h2>
              <p className="text-orange-100 text-center lg:w-7/12 mx-auto">
                We go beyond theory—our sessions are interactive, practical, and
                tailored to your industry:
              </p>
            </div>

            <div className="cards w-full mx-auto lg:mt-12 ">
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
                      className="card bg-[#99420C] rounded-md  min-h-[350px]
                        transition-all duration-500 
                        hover:[transform:rotateY(-10deg)] 
                        hover:shadow-lg hover:bg-[#99420C]/50 
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
                <div className="font-bold text-2xl">Ready to Upgrade</div>
                {/* <p className="text-center text-blue-100">
                  Don't wait for a breach to test your defenses. Contact us
                  Today.
                </p> */}
                <button className="mt-3 bg-orange-500 px-3 py-3 rounded-sm  mx-auto text-lg w-[300px] hover:bg-orange-600 transition-300">
                  ENROLL TODAY
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectManagementTraining;
