import React from "react";
import HeroSection from "../components/home/HeroSection";
import CoreServices from "../components/home/CoreServices";
import AdditionalServices from "../components/home/AdditionalServices";
import KidsAcademy from "../components/home/KidsAcademy";
import CaseStudies from "../components/home/CaseStudies";
import ToolsResources from "../components/home/ToolsResources";

function Home() {
  return (
    <div className="mt-16">
      <div id="home" className="hero__wrapper min-h-screen bg-[#020814]">
        <HeroSection />
      </div>
      <div id="services" className="hero__wrapper min-h-screen bg-[#020814]">
        <CoreServices />
      </div>
      <div
        id="additional-services"
        className="hero__wrapper min-h-screen bg-[#020814]"
      >
        <AdditionalServices />
      </div>
      <div id="KidsAcademy" className="hero__wrapper min-h-screen bg-navy-300">
        <KidsAcademy />
      </div>
      <div id="case-studies" className="hero__wrapper min-h-screen bg-blue-600">
        <CaseStudies />
      </div>
      <div id="tools" className="hero__wrapper min-h-screen bg-orange-700">
        <ToolsResources />
      </div>
    </div>
  );
}

export default Home;
