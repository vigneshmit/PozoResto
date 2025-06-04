import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How long does it take to set up PozoResto?',
    answer: 'Setting up PozoResto is quick and easy. Most restaurants are up and running within a day. Our team provides comprehensive onboarding support to ensure a smooth transition.'
  },
  {
    question: 'Can I use my existing hardware with PozoResto?',
    answer: 'Yes, PozoResto is compatible with most standard POS hardware including tablets, printers, and card readers. We can provide a list of recommended hardware or work with your existing setup.'
  },
  {
    question: 'Is PozoResto suitable for all types of restaurants?',
    answer: 'Yes! PozoResto is designed to be flexible and scalable. Whether you run a small café, a food truck, or a full-service restaurant with multiple locations, our system can be customized to meet your specific needs.'
  },
  {
    question: 'Do you offer training for my staff?',
    answer: 'Absolutely. We provide comprehensive training sessions for your staff. Additionally, our platform is designed to be intuitive with a minimal learning curve, and we offer 24/7 support.'
  },
  {
    question: 'What payment processors do you integrate with?',
    answer: 'PozoResto integrates with all major payment processors including Stripe, Square, PayPal, and more. This gives you the flexibility to choose the payment solution that works best for your business.'
  },
  {
    question: 'Can PozoResto handle online ordering and delivery?',
    answer: 'Yes, PozoResto offers seamless integration with popular online ordering platforms and delivery services. You can manage all orders in one place, whether they come from in-person diners, your website, or third-party delivery apps.'
  },
  {
    question: 'Is my data secure with PozoResto?',
    answer: 'Security is our top priority. PozoResto uses bank-level encryption to protect your data and is fully PCI compliant. We implement rigorous security measures to safeguard both your business information and your customers\' payment details.'
  },
  {
    question: 'What happens if I lose internet connection?',
    answer: 'PozoResto has an offline mode that allows you to continue taking orders and processing payments even if your internet connection is temporarily down. Once connectivity is restored, all data will automatically sync.'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Have questions about PozoResto? We've got answers.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Our support team is ready to help you with any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Contact Support
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-6 rounded-lg border border-gray-300 transition-colors">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;