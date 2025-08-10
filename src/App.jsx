import React from 'react'
import './App.css'
import HeroSection from './components/home/HeroSection'
import CoreServices from './components/home/CoreServices'
import AdditionalServices from './components/home/AdditionalServices'
import CaseStudies from './components/home/CaseStudies'
import ToolsResources from './components/home/ToolsResources'
import CTAstrip from './components/home/CTAstrip'
import Footer from './components/home/Footer'

function App() {
  return (
    <div className="App">
      <HeroSection />
      <CoreServices />
      <AdditionalServices />
      <CaseStudies />
      <ToolsResources />
      <CTAstrip />
      <Footer />
    </div>
  )
}

export default App
