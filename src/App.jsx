import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import TransformationSection from './components/TransformationSection'; // Import the new component

const App = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <TransformationSection /> {/* Add the new component here */}
      <FeaturesSection />
    </div>
  );
};

export default App;