import React from "react";
import { motion } from "motion/react";
import heroImage from "/public/devopsCoursesPageHero.jpg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { VscAzureDevops } from "react-icons/vsc";

import { AiOutlineDeploymentUnit } from "react-icons/ai";

import { VscCodeOss } from "react-icons/vsc";

import { SiDocker } from "react-icons/si";

import { MdOutlineAnalytics } from "react-icons/md";

import { SiKubernetes } from "react-icons/si";

function DevOpsCourses() {
  const benefits = [
    {
      item: "Accelerating Delivery – shorten development cycles and bring products to market faster.",
    },
    {
      item: "Improving Reliability – reduce downtime and errors with continuous integration and monitoring.",
    },
    {
      item: "Enhancing Collaboration – break down silos between developers, testers, and operations teams.",
    },
    {
      item: "Boosting Automation – automate builds, testing, and deployments for consistency and efficiency.",
    },
    {
      item: "Driving Innovation – free teams to focus on features and improvements, not repetitive tasks.",
    },
  ];
  const services = [
    {
      title: "DevOps Fundamentals",
      description:
        "grasp key principles, culture, and practices that drive DevOps success.",
      icon: <VscAzureDevops />,
    },
    {
      title: "CI/CD Pipelines",
      description:
        "learn to build continuous integration and delivery pipelines with tools like Jenkins, GitHub Actions, or GitLab CI.",
      icon: <AiOutlineDeploymentUnit />,
    },
    {
      title: "Infrastructure as Code (IaC)",
      description:
        "master tools like Terraform and Ansible to automate infrastructure setup and management.",
      icon: <VscCodeOss />,
    },
    {
      title: "Containerization & Orchestration",
      description:
        "work with Docker and Kubernetes to deploy, scale, and manage applications efficiently.",
      icon: <SiDocker />,
    },
    {
      title: "Monitoring & Logging",
      description:
        "set up observability practices with Prometheus, Grafana, and ELK stack to detect issues before they impact users.",
      icon: <MdOutlineAnalytics />,
    },
    {
      title: "Cloud & DevOps Integration",
      description:
        "apply DevOps practices in AWS, Azure, or GCP environments for scalable cloud-native operations.",
      icon: <SiKubernetes />,
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
              <span className="text-orange-500">Bridge the Gap Between </span>{" "}
              Development and Operations
            </h1>
            <p className="text-xl text-orange-100 mt-3">
              DevOps unites teams, automates workflows, and speeds up software
              delivery. Our courses give you the skills to streamline pipelines
              and innovate faster.
            </p>
            <div className="buttons mt-16 w-10/12 md:w-full mx-auto flex flex-col md:flex-col lg:flex-row sm:flex-row items-center gap-4 justify-center">
              <button className="primaryButton bg-gradient-to-r from-[#00D8FF] to-[#0A3D62] text-white hover:from-[#0A3D62] hover:to-[#00D8FF] transition-300">
                TALK TO US
              </button>

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
                  Why DevOps Training Matters
                </h2>

                <p className="text-sm lg:text-xl text-orange-100 text-center lg:text-left mb-4">
                  Manual processes, siloed teams, and outdated deployment
                  methods slow businesses down. DevOps transforms the way
                  organizations build and ship software by:
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
                Core Learning Areas
              </h2>
              <p className="text-orange-100 text-center lg:w-7/12 mx-auto">
                Build Practical Skills Across Every Layer of DevOps
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
                  Start Your DevOps Journey
                </div>
                {/* <p className="text-center text-blue-100">
                  Start Automating Today
                </p> */}
                <button className="primaryButton mt-4 !w-[300px]  bg-gradient-to-r from-[#00D8FF] to-[#0A3D62] text-white hover:from-[#0A3D62] hover:to-[#00D8FF] transition-300">
                  ENROLL NOW
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevOpsCourses;
