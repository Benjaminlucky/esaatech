import React from "react";
import { motion } from "motion/react";
import heroImage from "/public/cloudMigrationPageHero.jpg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoMdCloudUpload } from "react-icons/io";

import { RiSecurePaymentFill } from "react-icons/ri";

import { SiClevercloud } from "react-icons/si";

import { MdOutlineCloudSync } from "react-icons/md";

import { MdOutlineAppShortcut } from "react-icons/md";

import { MdOutlineSupport } from "react-icons/md";

function CloudMigration() {
  const benefits = [
    {
      item: "Scalability – expand or shrink resources on demand without heavy infrastructure costs.",
    },
    {
      item: "Security – protect sensitive data with enterprise-grade cloud safeguards.",
    },
    {
      item: "Efficiency – improve performance and reduce downtime with modern infrastructure.",
    },
    {
      item: "Cost Savings – cut overhead by eliminating unnecessary hardware and maintenance.",
    },
    {
      item: "Innovation – unlock new possibilities with AI, automation, and cloud-native apps.",
    },
  ];
  const services = [
    {
      title: "Cloud Strategy & Roadmapping",
      description:
        "align your cloud journey with long-term business goals and ensure the right approach from the start.",
      icon: <IoMdCloudUpload />,
    },
    {
      title: "Secure Data Migration",
      description:
        "move applications, databases, and workloads safely with minimal downtime and zero data loss.",
      icon: <RiSecurePaymentFill />,
    },
    {
      title: "Hybrid & Multi-Cloud Solutions",
      description:
        "combine private, public, and multi-cloud environments for flexibility and resilience.",
      icon: <SiClevercloud />,
    },
    {
      title: "Cloud Optimization",
      description:
        "fine-tune costs, boost performance, and strengthen security after migration.",
      icon: <MdOutlineCloudSync />,
    },
    {
      title: "Cloud-Native Application Development",
      description:
        "build modern apps designed to fully leverage cloud scalability, speed, and reliability.",
      icon: <MdOutlineAppShortcut />,
    },
    {
      title: "Ongoing Cloud Support & Advisory",
      description:
        "get continuous monitoring, updates, and expert guidance to keep your operations running smoothly.",
      icon: <MdOutlineSupport />,
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
              <span className="text-orange-500">
                Seamless, Secure, and <br />
              </span>{" "}
              Scalable Cloud Solutions
            </h1>
            <p className="text-xl text-orange-100 mt-3">
              Cloud Migration isn’t just about technology—it transforms how your
              business operates, giving you the flexibility to scale, cut costs,
              and innovate securely.
            </p>
            <div className="buttons mt-16 w-10/12 md:w-full mx-auto flex flex-col md:flex-col lg:flex-row sm:flex-row items-center gap-4 justify-center">
              <button className="primaryButton ">
                START YOUR CLOUD JOURNEY
              </button>
              <button className="secondaryButton">TALK TO US</button>
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
                  Why Cloud Migration Matters
                </h2>
                <p className="text-lg text-blue-50 leading-relaxed text-justify hyphens-auto mb-8">
                  Unlock Flexibility, Security, and Innovation in the Cloud
                </p>
                <p className="text-xl text-orange-100 mb-4">
                  Cloud Migration helps you achieve:
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
                Core Services
              </h2>
              <p className="text-orange-100 text-center lg:w-10/12 mx-auto">
                Comprehensive Cloud Solutions to Power Your Business Forward
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
                <div className="font-bold text-2xl">Ready to Migrate?</div>
                {/* <p className="text-center text-blue-100">
                  Don't wait for a breach to test your defenses. Contact us
                  Today.
                </p> */}
                <button className="mt-3 bg-orange-500 px-3 py-3 rounded-sm  mx-auto text-lg w-[300px] hover:bg-orange-600 transition-300">
                  TALK TO AN EXPERT TODAY
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CloudMigration;
