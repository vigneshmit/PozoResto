import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowRight, Utensils, Clock, CreditCard, Users, Star, ChefHat, BarChart4, Smartphone } from 'lucide-react';
import demoVideo from '../demo-video1.mp4';

const HeroSection = () => {
  // Refs for scroll animations
  const scrollContainerRef = useRef(null);
  const isInView = useInView(scrollContainerRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  // Auto-scroll effect
  useEffect(() => {
    let interval;
    let currentPosition = 0;
    const scrollContainer = scrollContainerRef.current;
    
    if (scrollContainer) {
      const totalHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      
      interval = setInterval(() => {
        // Increment position
        currentPosition += 1;
        
        // Reset when reaching bottom
        if (currentPosition > totalHeight) {
          // Quickly reset to top with smooth transition
          scrollContainer.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          currentPosition = 0;
        } else {
          // Smooth scroll down
          scrollContainer.scrollTo({
            top: currentPosition,
            behavior: 'auto'
          });
        }
      }, 30); // Adjust speed as needed
    }
    
    return () => clearInterval(interval);
  }, []);

  // Animation for elements
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Feature cards data
  const featureCards = [
    { icon: Utensils, title: "Smart Ordering", color: "from-amber-400 to-amber-600" },
    { icon: Clock, title: "Table Management", color: "from-amber-500 to-amber-700" },
    { icon: CreditCard, title: "Instant Payments", color: "from-amber-600 to-amber-800" },
    { icon: Users, title: "Customer Profiles", color: "from-amber-500 to-amber-700" },
    { icon: Star, title: "Loyalty Program", color: "from-amber-400 to-amber-600" },
    { icon: ChefHat, title: "Kitchen Display", color: "from-amber-500 to-amber-700" },
    { icon: BarChart4, title: "Sales Analytics", color: "from-amber-600 to-amber-800" },
    { icon: Smartphone, title: "Mobile Ordering", color: "from-amber-500 to-amber-700" }
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={demoVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl md:w-1/2"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Your Restaurant with{' '}
              <span className="text-amber-500">PozoResto</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Streamline operations, delight customers, and boost your bottom line with our all-in-one restaurant management platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center gap-2"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-lg transition-colors backdrop-blur-sm"
              >
                Watch Demo
              </motion.button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500 mb-2">10k+</div>
                <div className="text-gray-300">Restaurants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500 mb-2">98%</div>
                <div className="text-gray-300">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500 mb-2">30%</div>
                <div className="text-gray-300">More Revenue</div>
              </div>
            </div>
          </motion.div>

          {/* Right side for Modern Vertical Scrolling Infographics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-1/2 flex justify-center items-center"
          >
            {/* Modern glass-morphism card with auto-scrolling content */}
            <div className="relative w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-xl">
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 z-0"
                animate={{
                  background: [
                    "linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(180, 83, 9, 0.2) 100%)",
                    "linear-gradient(225deg, rgba(245, 158, 11, 0.2) 0%, rgba(180, 83, 9, 0.2) 100%)",
                    "linear-gradient(315deg, rgba(245, 158, 11, 0.2) 0%, rgba(180, 83, 9, 0.2) 100%)",
                    "linear-gradient(45deg, rgba(245, 158, 11, 0.2) 0%, rgba(180, 83, 9, 0.2) 100%)"
                  ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Floating particles */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-amber-500/30"
                    initial={{
                      x: Math.random() * 100 + "%",
                      y: Math.random() * 100 + "%",
                      scale: Math.random() * 0.5 + 0.5
                    }}
                    animate={{
                      y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                      x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                      opacity: [0.2, 0.8, 0.2]
                    }}
                    transition={{
                      duration: Math.random() * 10 + 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}
              </div>
              
              {/* Header */}
              <div className="relative z-10 p-4 border-b border-white/20 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">PozoResto Dashboard</h3>
                <div className="flex space-x-2">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 rounded-full bg-green-500"
                  />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                </div>
              </div>
              
              {/* Scrolling content container */}
              <div 
                ref={scrollContainerRef}
                className="relative z-10 h-[400px] overflow-hidden"
              >
                <div className="p-4 space-y-6">
                  {/* Feature section */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="space-y-4"
                  >
                    <h4 className="text-white font-semibold text-lg border-l-4 border-amber-500 pl-2">
                      Restaurant Management Features
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {featureCards.map((feature, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="relative overflow-hidden rounded-xl bg-gradient-to-br border border-white/10"
                          style={{ backdropFilter: "blur(5px)" }}
                          whileHover={{ scale: 1.03, y: -5 }}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20`} />
                          <div className="relative p-3 flex flex-col items-center">
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                              className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center mb-2"
                            >
                              <feature.icon className="w-5 h-5 text-white" />
                            </motion.div>
                            <p className="text-white text-sm font-medium text-center">{feature.title}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Analytics section */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="space-y-4"
                  >
                    <h4 className="text-white font-semibold text-lg border-l-4 border-amber-500 pl-2">
                      Real-time Analytics
                    </h4>
                    
                    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                      <h5 className="text-white text-sm mb-2">Today's Revenue</h5>
                      <div className="flex items-end h-32 space-x-2 mb-2">
                        {[40, 65, 35, 85, 55, 70, 90].map((height, index) => (
                          <motion.div
                            key={index}
                            className="flex-1 bg-gradient-to-t from-amber-600 to-amber-400 rounded-t-sm"
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ 
                              duration: 1,
                              delay: 0.1 * index,
                              repeat: Infinity,
                              repeatType: "reverse",
                              repeatDelay: 5
                            }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between text-xs text-gray-300">
                        <span>8AM</span>
                        <span>12PM</span>
                        <span>4PM</span>
                        <span>8PM</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Orders section */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="space-y-4"
                  >
                    <h4 className="text-white font-semibold text-lg border-l-4 border-amber-500 pl-2">
                      Live Orders
                    </h4>
                    
                    <div className="space-y-3">
                      {[
                        { table: "Table 5", items: 3, time: "2 min ago", status: "Preparing" },
                        { table: "Table 12", items: 5, time: "Just now", status: "New" },
                        { table: "Takeout #45", items: 2, time: "7 min ago", status: "Ready" }
                      ].map((order, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="bg-white/10 rounded-xl p-3 border border-white/10 flex justify-between items-center"
                          whileHover={{ x: 5 }}
                        >
                          <div>
                            <p className="text-white font-medium">{order.table}</p>
                            <p className="text-xs text-gray-300">{order.items} items · {order.time}</p>
                          </div>
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                            order.status === "New" ? "bg-blue-500/20 text-blue-300" :
                            order.status === "Preparing" ? "bg-amber-500/20 text-amber-300" :
                            "bg-green-500/20 text-green-300"
                          }`}>
                            {order.status}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Customer section */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="space-y-4"
                  >
                    <h4 className="text-white font-semibold text-lg border-l-4 border-amber-500 pl-2">
                      Customer Insights
                    </h4>
                    
                    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                      <div className="flex justify-between mb-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-amber-500">87%</p>
                          <p className="text-xs text-gray-300">Return Rate</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-amber-500">4.8</p>
                          <p className="text-xs text-gray-300">Avg. Rating</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-amber-500">$42</p>
                          <p className="text-xs text-gray-300">Avg. Order</p>
                        </div>
                      </div>
                      
                      <h5 className="text-white text-sm mb-2">Popular Items</h5>
                      <div className="space-y-2">
                        {[
                          { name: "Signature Burger", percent: 85 },
                          { name: "Truffle Fries", percent: 70 },
                          { name: "Craft Cocktails", percent: 65 }
                        ].map((item, index) => (
                          <div key={index} className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span className="text-white">{item.name}</span>
                              <span className="text-amber-400">{item.percent}%</span>
                            </div>
                            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-amber-500 to-amber-300"
                                initial={{ width: 0 }}
                                animate={{ width: `${item.percent}%` }}
                                transition={{ 
                                  duration: 1.5,
                                  delay: 0.2 * index,
                                  repeat: Infinity,
                                  repeatType: "reverse",
                                  repeatDelay: 4
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Spacer to ensure smooth scrolling loop */}
                  <div className="h-20"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 h-2 bg-white rounded-full mt-2"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
