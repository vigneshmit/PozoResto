import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Key, AlertCircle } from 'lucide-react';

const SecuritySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'PCI Compliant',
      description: 'Secure payment processing that meets all industry standards.'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'End-to-End Encryption',
      description: 'Your data is encrypted at rest and in transit.'
    },
    {
      icon: <Key className="w-8 h-8" />,
      title: 'Role-Based Access',
      description: 'Granular control over user permissions and access.'
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: '24/7 Monitoring',
      description: 'Continuous security monitoring and threat detection.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Enterprise-Grade Security
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your data security is our top priority. We implement the highest standards of protection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
            >
              <div className="text-amber-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">SOC 2 Type II Certified</h3>
              <p className="text-gray-400 mb-6">
                Our platform undergoes regular security audits and maintains compliance with industry standards to ensure your data is always protected.
              </p>
              <button className="bg-amber-400 hover:bg-amber-500 text-black px-6 py-3 rounded-lg transition-colors">
                View Security Details
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg"
                alt="Security Operations Center"
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecuritySection;