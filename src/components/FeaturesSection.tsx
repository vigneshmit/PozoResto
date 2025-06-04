import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Smartphone, 
  BarChart3, 
  Users, 
  Clock,
  CreditCard,
  Settings
} from 'lucide-react';
import demoVideo from '../demo-video.mp4';
const features = [
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile-First Design',
    description: 'Intuitive interface optimized for tablets and mobile devices.',
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Real-Time Analytics',
    description: 'Live insights into sales, inventory, and customer behavior.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Team Management',
    description: 'Effortlessly manage staff schedules and permissions.',
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Quick Service',
    description: 'Streamlined ordering process for faster table turnover.',
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: 'Smart Payments',
    description: 'Accept all payment methods with instant processing.',
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'Custom Setup',
    description: 'Tailored configuration for your restaurant needs.',
  },
];

const FeatureCard = ({ feature, index }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-amber-400/50 transition-all duration-300"
    >
      <div className="text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-300">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
      <p className="text-gray-400">{feature.description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features for Modern Restaurants
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to streamline operations and delight your customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Demo Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-24 relative rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10"
        >
          <div className="aspect-video relative">
            <video
              className="w-full h-full object-cover rounded-2xl"
              controls
              autoPlay
              loop
              muted
              playsInline
              poster="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            >
              <source src={demoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-3xl">
              <h3 className="text-3xl font-bold text-white mb-4">Experience the Future of Restaurant Management</h3>
              <p className="text-lg text-gray-300 mb-6">
                Watch how PozoResto streamlines your operations, enhances customer experience, and boosts your bottom line.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="w-5 h-5" />
                  <span>2:30 min</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Users className="w-5 h-5" />
                  <span>Perfect for restaurant owners</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <BarChart3 className="w-5 h-5" />
                  <span>See real results</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video Features Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <h4 className="text-xl font-semibold text-white mb-3">Easy Setup</h4>
            <p className="text-gray-400">Get started in minutes with our intuitive setup process.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <h4 className="text-xl font-semibold text-white mb-3">24/7 Support</h4>
            <p className="text-gray-400">Our dedicated team is always here to help you succeed.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <h4 className="text-xl font-semibold text-white mb-3">Regular Updates</h4>
            <p className="text-gray-400">Stay ahead with our continuous feature improvements.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;