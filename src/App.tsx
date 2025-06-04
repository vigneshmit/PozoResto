import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import TestimonialSection from './components/TestimonialSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import IntegrationSection from './components/IntegrationSection';
import SecuritySection from './components/SecuritySection';
import Footer from './components/Footer';
 
function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection /> 
      <FeaturesSection />
      <IntegrationSection />
      <SecuritySection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;