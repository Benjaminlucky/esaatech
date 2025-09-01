import React from "react";
import { motion } from "motion/react";
import heroImage from "/public/cyberSecurityPageHero.jpeg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { GoShieldLock } from "react-icons/go";
import { GiHazardSign } from "react-icons/gi";
import { PiCertificate } from "react-icons/pi";
import { PiSirenFill } from "react-icons/pi";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

function CyberSecurityConsulting() {
  const benefits = [
    {
      item: "Identify risks before attackers exploit them",
    },
    {
      item: "Develop policies and frameworks that align with business goals",
    },
    {
      item: "Ensure compliance with standards like GDPR, ISO 27001, or HIPAA",
    },
    {
      item: "Optimize existing tools instead of overspending on new ones",
    },
    {
      item: "Build resilience so your business can recover quickly if attacked",
    },
  ];
  const services = [
    {
      title: "Security Audits & Gap Analysis",
      description:
        "We conduct in-depth reviews of your systems, policies, and infrastructure to uncover hidden vulnerabilities and compliance gaps—giving you a clear picture of where you stand today.",
      icon: <GoShieldLock />,
    },
    {
      title: "Risk & Threat Assessments",
      description:
        "Not all threats are equal. We help you identify the risks most likely to impact your organization, prioritize them, and design mitigation strategies that make sense for your business.",
      icon: <GiHazardSign />,
    },
    {
      title: "Policy & Framework Development",
      description:
        "Strong policies are the foundation of strong security. We design tailored governance models, access controls, and security frameworks that keep your organization compliant and resilient..",
      icon: <PiCertificate />,
    },
    {
      title: " Incident Response Planning",
      description:
        "When an attack happens, every second counts. We build customized response playbooks and escalation processes so your team can act fast, stay calm, and contain threats effectively.",
      icon: <PiSirenFill />,
    },
    {
      title: "Cloud & Infrastructure Security Consulting",
      description:
        "From on-premises systems to hybrid and cloud environments, we ensure your infrastructure is hardened against evolving cyber threats—without slowing down your operations.",
      icon: <FaCloudDownloadAlt />,
    },
    {
      title: "Ongoing Advisory Support",
      description:
        "Cybersecurity is not a one-time project—it’s a continuous journey. We provide ongoing guidance, updates, and best practices to keep your defenses sharp and your team ready.",
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
              <span className="text-orange-500">
                Protect Your Business with
              </span>{" "}
              Expert Guidance
            </h1>
            <p className="text-xl text-orange-100 mt-3">
              Cyber threats today are smarter and faster than ever. Our
              Cybersecurity Consulting provides tailored strategies and expert
              guidance to strenghten defenses, reduce risk, and ensure
              compliance.
            </p>
            <div className="buttons mt-16 w-10/12 md:w-full mx-auto flex flex-col md:flex-col lg:flex-row sm:flex-row items-center gap-4 justify-center">
              <button className="primaryButton ">BOOK CONSULTATION</button>
              <button className="secondaryButton">START ASESSMENT</button>
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
                  Why Cybersecurity Consulting
                </h2>
                <p className="text-lg text-blue-50 leading-relaxed text-justify hyphens-auto mb-8">
                  Most organizations already use security tools - but tools
                  alone don't guarantee safety. without the right strategy,
                  policies, and oversight, even the best technology can leave
                  you exposed.
                </p>
                <p className="text-xl text-orange-100 mb-4">
                  Cybersecurity Consulting helps you:
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
                Our Consulting Services
              </h2>
              <p className="text-orange-100 text-center lg:w-6/12 mx-auto">
                We go beyond identifying risks—partnering with you to build a
                clear roadmap that strengthens security and aligns with your
                business goals.
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
                      className="card bg-[#99420C] rounded-md 
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
                <div className="font-bold text-2xl">Ready to Take Control?</div>
                <p className="text-center text-blue-100">
                  Don't wait for a breach to test your defenses. Contact us
                  Today.
                </p>
                <button className="mt-3 bg-orange-500 px-3 py-3 rounded-sm  mx-auto text-lg w-[300px] hover:bg-orange-600 transition-300">
                  SCHEDULE A CONSULTATION
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CyberSecurityConsulting;
