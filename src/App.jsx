import React, { useState } from 'react';
import './App.css'
import Navigation from './components/Navigation'
import HeroSection from './components/home/HeroSection'
import CoreServices from './components/home/CoreServices'
import AdditionalServices from './components/home/AdditionalServices'
import CaseStudies from './components/home/CaseStudies'
import KidsAcademy from './components/home/KidsAcademy'
import ToolsResources from './components/home/ToolsResources'
import CTAstrip from './components/home/CTAstrip'
import Footer from './components/home/Footer'
import ContactModal from './components/ContactModal';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactModalTab, setContactModalTab] = useState('message');

  const openContactModal = (tab = 'message') => {
    setContactModalTab(tab);
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="App">
      <Navigation />
      
      <main>
        <HeroSection onOpenContactModal={openContactModal} />
        <CoreServices />
        <AdditionalServices />
        <KidsAcademy />
        <CaseStudies />
        <ToolsResources />
        <CTAstrip onOpenContactModal={openContactModal} />
      </main>
      
      <Footer onOpenContactModal={openContactModal} />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal}
        initialTab={contactModalTab}
      />
    </div>
  );
}

export default App;
