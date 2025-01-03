import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from './animations/FadeIn';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <FadeIn direction="left">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Hi, I'm <span className="text-purple-500">Your Name</span>
              </h1>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <p className="text-xl text-gray-400">
                Full Stack Developer passionate about creating beautiful and functional web applications
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.4}>
              <div className="flex space-x-4">
                <motion.a
                  href="#projects"
                  className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Projects</span>
                  <ArrowRight size={20} />
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-6 py-3 border border-purple-500 text-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
              </div>
            </FadeIn>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <FadeIn direction="right" delay={0.2}>
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="absolute inset-0 bg-purple-500 rounded-full blur-2xl opacity-20"></div>
                <img
                  src="YOUR_IMAGE_URL_HERE"
                  alt="Profile"
                  className="rounded-full w-full h-full object-cover border-4 border-purple-500 relative z-10"
                />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;