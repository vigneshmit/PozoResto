import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 49,
    description: 'Perfect for small cafés and food trucks',
    features: [
      'Single register terminal',
      'Basic menu management',
      'Daily sales reports',
      'Email support',
      'Cloud backups',
      'Basic analytics',
    ],
    notIncluded: [
      'Staff management',
      'Inventory tracking',
      'Customer loyalty program',
      'Table management',
    ],
    buttonText: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    price: 99,
    description: 'Ideal for growing restaurants',
    features: [
      'Up to 3 register terminals',
      'Advanced menu management',
      'Real-time inventory tracking',
      'Staff scheduling & management',
      'Table management',
      'Priority email & chat support',
      'Advanced analytics & reports',
      'Customer database',
    ],
    notIncluded: [
      'Customer loyalty program',
      'API access',
    ],
    buttonText: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'For restaurants with multiple locations',
    features: [
      'Unlimited register terminals',
      'Multi-location management',
      'Custom reporting',
      'API access',
      'Customer loyalty program',
      'Inventory forecasting',
      'Dedicated account manager',
      'Phone, email & chat support',
      'White-label mobile app',
    ],
    notIncluded: [],
    buttonText: 'Contact Sales',
    popular: false,
  }
];

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Choose the plan that's right for your restaurant. All plans include a 14-day free trial.
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-lg inline-flex">
              <button
                className={`px-4 py-2 rounded-md ${
                  billingPeriod === 'monthly'
                    ? 'bg-white text-gray-900 shadow'
                    : 'text-gray-600'
                }`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-md flex items-center ${
                  billingPeriod === 'annual'
                    ? 'bg-white text-gray-900 shadow'
                    : 'text-gray-600'
                }`}
                onClick={() => setBillingPeriod('annual')}
              >
                Annual
                <span className="ml-2 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl overflow-hidden ${
                plan.popular 
                  ? 'border-2 border-amber-500 relative transform md:scale-105 shadow-xl' 
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-amber-500 text-white font-medium py-1 px-4 rounded-bl-lg text-sm">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">${billingPeriod === 'annual' ? (plan.price * 0.8).toFixed(0) : plan.price}</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                
                <button
                  className={`w-full py-3 rounded-lg font-medium ${
                    plan.popular
                      ? 'bg-amber-500 hover:bg-amber-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  } transition-colors mb-6`}
                >
                  {plan.buttonText}
                </button>
                
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-400">
                      <X className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Need a custom solution for your restaurant chain?</p>
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg transition-colors">
            Contact Our Sales Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;