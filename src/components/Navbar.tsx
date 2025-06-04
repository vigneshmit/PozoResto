import React, { useState, useEffect } from 'react';
import { Menu, X, ChefHat } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <ChefHat className={`h-8 w-8 ${isScrolled ? 'text-amber-500' : 'text-white'}`} />
            <span className={`ml-2 text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>PozoResto</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#features" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-amber-500 transition-colors font-medium`}>Features</a>
            <a href="#demo" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-amber-500 transition-colors font-medium`}>Demo</a>
            <a href="#pricing" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-amber-500 transition-colors font-medium`}>Pricing</a>
            <a href="#faq" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-amber-500 transition-colors font-medium`}>FAQ</a>
          </div>
          
          <div className="hidden md:block">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-6 rounded-lg transition-colors mr-4">
              Sign In
            </button>
            <button className="bg-navy-800 hover:bg-navy-900 text-white font-medium py-2 px-6 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a 
              href="#features" 
              className="block text-gray-700 hover:text-amber-500 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="#demo" 
              className="block text-gray-700 hover:text-amber-500 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Demo
            </a>
            <a 
              href="#pricing" 
              className="block text-gray-700 hover:text-amber-500 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              className="block text-gray-700 hover:text-amber-500 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <div className="pt-2 space-y-2">
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                Sign In
              </button>
              <button className="w-full bg-navy-800 hover:bg-navy-900 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;