import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const IntegrationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const integrations = [
    {
      name: 'Stripe',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1280px-Stripe_Logo%2C_revised_2016.svg.png',
      category: 'Payments'
    },
    {
      name: 'DoorDash',
      logo: 'https://www.pngall.com/wp-content/uploads/15/Door-Dash-Logo-PNG-Cutout.png',
      category: 'Delivery'
    },
    {
      name: 'QuickBooks',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Intuit_QuickBooks_logo.png',
      category: 'Accounting'
    },
    {
      name: 'Uber Eats',
      logo: 'https://www.pngall.com/wp-content/uploads/4/Uber-Eats-PNG.png',
      category: 'Delivery'
    }
  ];

  return (
    <section className="py-24 bg-black/90">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Connect with your favorite tools and services to create a complete restaurant management ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center border border-white/10 hover:border-amber-400/50 transition-all"
            >
              <img 
                src={integration.logo} 
                alt={integration.name} 
                className="h-12 object-contain mb-4 filter brightness-0 invert"
              />
              <h3 className="text-white font-medium">{integration.name}</h3>
              <span className="text-sm text-gray-400">{integration.category}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <button className="group inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors">
            View all integrations
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationSection;