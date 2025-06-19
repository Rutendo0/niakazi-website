import { motion } from "framer-motion";
import { Target, Lightbulb, Heart, Users, Award, Clock, CheckCircle, ArrowRight, Star } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

// Define the features array locally



export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 font-semibold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              About NIAKAZI
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Zimbabwe's{" "}
              <span className="text-blue-600">Digital Future</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              For over 3 years, NIAKAZI has been at the forefront of Zimbabwe's digital transformation, 
              delivering innovative ICT solutions that drive business growth and operational excellence.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Enterprise-grade ICT infrastructure and solutions",
                "24/7 technical support and monitoring services", 
                "Custom software development and integration",
                "Comprehensive training and consultation programs"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>


          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/1272/cached.offlinehbpl.hbpl.co.uk/news/OMP/GettyImages-1010594174.jpg"
                alt="NIAKAZI Team - ICT Professionals"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Floating Stats Card */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
              >
              
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300 rounded-full opacity-15"></div>
          </motion.div>
        </div>

        

        {/* Mission & Vision - Moved up for prominence */}
        <motion.div
          className="bg-white rounded-3xl p-12 shadow-xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Purpose</span> & <span className="text-green-600">Vision</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Driven by purpose, guided by vision - discover what motivates us to deliver excellence
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses across Zimbabwe with innovative ICT solutions that drive growth, 
                efficiency, and competitive advantage in the digital economy.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be Zimbabwe's leading technology partner, transforming how businesses operate, 
                connect, and succeed in an increasingly digital world.
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}