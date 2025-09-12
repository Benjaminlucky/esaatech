import React from "react";
import { motion } from "motion/react";
import heroImage from "/public/websiteDesignPageHero.jpg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";

import { IoLogoFigma } from "react-icons/io5";

import { BiSolidMobileVibration } from "react-icons/bi";

import { IoStorefrontSharp } from "react-icons/io5";

import { TbSeo } from "react-icons/tb";

import { GrOptimize } from "react-icons/gr";

function WebsiteDesign() {
  const benefits = [
    {
      item: "Brand Identity – your website communicates who you are and what you stand for.",
    },
    {
      item: "Responsive Experience – reach users on desktop, mobile, and tablets effortlessly.",
    },
    {
      item: "Performance – fast-loading pages reduce bounce rates and improve SEO rankings.",
    },
    {
      item: "Conversions – intuitive design turns visitors into leads and customers.",
    },
    {
      item: "Trust & Credibility – a polished design builds confidence in your brand.",
    },
  ];
  const services = [
    {
      title: "Custom Website Design",
      description:
        "tailored designs that capture your brand’s personality, communicate your message clearly, and leave a lasting impression on visitors.",
      icon: <CgWebsite />,
    },
    {
      title: "UI/UX Design",
      description:
        "user-focused interfaces that prioritize intuitive navigation and engaging experiences, ensuring visitors enjoy every interaction with your site.",
      icon: <IoLogoFigma />,
    },
    {
      title: "Responsive Web Development",
      description:
        "websites that adapt seamlessly to desktops, tablets, and mobile devices, delivering consistent performance everywhere.",
      icon: <BiSolidMobileVibration />,
    },
    {
      title: "E-commerce Solutions",
      description:
        "conversion-driven online stores designed for easy shopping, secure payments, and scalability to grow alongside your business.",
      icon: <IoStorefrontSharp />,
    },
    {
      title: "SEO-Friendly Design",
      description:
        " websites built with best practices in speed, structure, and content, helping you rank higher and get found by the right audience.",
      icon: <TbSeo />,
    },
    {
      title: "Website Redesign & Optimization",
      description:
        "modernize outdated sites with fresh designs, faster performance, and improved functionality that align with today’s digital standards.",
      icon: <GrOptimize />,
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
                Design That Engages, <br />
              </span>{" "}
              Converts, and Inspires
            </h1>
            <p className="text-xl text-blue-100 mt-3">
              Your website is more than a storefront—it’s your brand’s first
              impression. A great design builds trust, engages visitors, and
              drives conversions, while a poor one turns them away.
            </p>
            <div className="buttons mt-16 w-10/12 md:w-full mx-auto flex flex-col md:flex-col lg:flex-row sm:flex-row items-center gap-4 justify-center">
              <button className="primaryButton bg-gradient-to-r from-[#00D8FF] to-[#0A3D62] text-white hover:from-[#0A3D62] hover:to-[#00D8FF] transition-300">
                BUILD MY WEBSITE
              </button>

              <button className="secondaryButton">
                BOOK A FREE CONSULTATION
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
                  Why Website Design Matters
                </h2>

                <p className="text-sm lg:text-xl text-blue-100 text-center lg:text-left mb-4">
                  The Foundation of Trust, Engagement, and Growth Online
                </p>
                <div className="benefits">
                  {benefits.map((item, idx) => (
                    <div className="benefit flex items-center gap-4 py-2 text-lg">
                      <div className="icon text-orange-500">
                        <IoIosCheckmarkCircle />
                      </div>
                      <p className="text-blue-100 text-base">{item.item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <div className="processSection w-full bg-[#020814] text-white py-4 lg:py-16 flex justify-center">
        <div className="processWrapper w-11/12 px-4 lg:px-16 flex justify-center mx-auto">
          <div className="processContent w-full justify-center flex flex-col gap-12 mx-auto">
            <div className="titleContent mx-auto">
              <h2 className="text-2xl text-center lg:text-4xl font-semibold mb-3 ">
                Core Services
              </h2>
              <p className="text-orange-100 text-center lg:w-7/12 mx-auto">
                End-to-End Web Solutions Built for Performance and Impact
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
                        <p className=" text-center text-orange-100 ">
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
              className="cta py-16 w-11/12  flex flex-col justify-center  mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="ctaContent w-full flex flex-col items-center justify-center text-center mx-auto">
                <div className="font-bold text-2xl">
                  Ready to Take your Business Online?
                </div>
                {/* <p className="text-center text-blue-100">
    Start Automating Today
  </p> */}
                <button className="primaryButton uppercase mt-4 w-[300px] bg-gradient-to-r from-[#00D8FF] to-[#0A3D62] text-white hover:from-[#0A3D62] hover:to-[#00D8FF] transition-all duration-300">
                  CONTACT US TODAY
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsiteDesign;
