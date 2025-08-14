import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HeroSection from "./components/home/HeroSection";
import CoreServices from "./components/home/CoreServices";
import AdditionalServices from "./components/home/AdditionalServices";
import CaseStudies from "./components/home/CaseStudies";
import KidsAcademy from "./components/home/KidsAcademy";
import ToolsResources from "./components/home/ToolsResources";
import CTAstrip from "./components/home/CTAstrip";
import Footer from "./components/home/Footer";
import ContactModal from "./components/ContactModal";
import HeaderNavigation from "./components/HeaderNavigation";
import Home from "./pages/Home";

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactModalTab, setContactModalTab] = useState("message");

  const openContactModal = (tab = "message") => {
    setContactModalTab(tab);
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <Router>
      <HeaderNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
