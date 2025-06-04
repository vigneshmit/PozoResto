import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-500 to-amber-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Restaurant Operations?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Join thousands of restaurants that use PozoResto to streamline operations, increase revenue, and delight customers.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-4xl font-bold mb-2">30%</h3>
                <p className="text-amber-100">Faster Service Time</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">25%</h3>
                <p className="text-amber-100">Increase in Revenue</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">98%</h3>
                <p className="text-amber-100">Customer Satisfaction</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-amber-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-medium py-3 px-8 rounded-lg transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;