import { motion } from "framer-motion";
import { Target, Lightbulb, Heart, Users, Award, Clock, MapPin, Building, Zap } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  // Company illustration SVG
  const CompanyIllustration = () => (
    <svg className="w-full h-full opacity-80" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
      {/* Zimbabwe map outline (simplified) */}
      <path 
        d="M100 150 L180 140 L240 160 L280 180 L290 220 L270 260 L220 280 L150 270 L110 240 Z" 
        fill="hsl(var(--niakazi-primary))" 
        opacity="0.2"
        stroke="hsl(var(--niakazi-primary))" 
        strokeWidth="2"
      >
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="4s" repeatCount="indefinite"/>
      </path>
      
      {/* Network connections across Zimbabwe */}
      <circle cx="150" cy="200" r="4" fill="hsl(var(--niakazi-primary))">
        <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="220" cy="180" r="3" fill="hsl(var(--niakazi-secondary))">
        <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="260" cy="220" r="4" fill="hsl(var(--niakazi-accent))">
        <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite"/>
      </circle>
      
      {/* Connecting lines */}
      <line x1="150" y1="200" x2="220" y2="180" stroke="hsl(var(--niakazi-primary))" strokeWidth="2" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
      </line>
      <line x1="220" y1="180" x2="260" y2="220" stroke="hsl(var(--niakazi-secondary))" strokeWidth="2" opacity="0.5">
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite"/>
      </line>
      
      {/* Tech icons floating */}
      <g transform="translate(400, 100)">
        <circle r="30" fill="white" stroke="hsl(var(--niakazi-primary))" strokeWidth="2" opacity="0.9"/>
        <text x="0" y="5" textAnchor="middle" fill="hsl(var(--niakazi-primary))" fontSize="20">⚡</text>
        <animateTransform attributeName="transform" type="translate" values="400,100; 410,90; 400,100" dur="3s" repeatCount="indefinite"/>
      </g>
      
      <g transform="translate(480, 200)">
        <circle r="25" fill="white" stroke="hsl(var(--niakazi-dark))" strokeWidth="2" opacity="0.8"/>
        <text x="0" y="5" textAnchor="middle" fill="hsl(var(--niakazi-dark))" fontSize="16">🛡️</text>
        <animateTransform attributeName="transform" type="translate" values="480,200; 470,210; 480,200" dur="4s" repeatCount="indefinite"/>
      </g>
    </svg>
  );

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Aurora Background Effects */}
      <div className="aurora-bg"></div>
      <div className="aurora-bg"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-niakazi-primary/10 to-transparent rounded-full blur-3xl particle-animation"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-niakazi-dark/5 to-transparent rounded-full blur-3xl blob-animation"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-niakazi-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Our Story Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center px-6 py-3 rounded-full animated-gradient-border glass-card text-niakazi-primary font-semibold mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
              >
                <Building className="w-5 h-5 mr-2 text-shimmer" />
                About NIAKAZI
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-niakazi-dark mb-8">
                Our Story of{" "}
                <span className="text-gradient-niakazi">Innovation</span>
              </h2>
              <p className="text-lg text-gray-700 font-poppins leading-relaxed mb-6">
                Founded with a vision to bridge the gap between cutting-edge technology and business success in Zimbabwe, NIAKAZI has been at the forefront of digital transformation for over 26 years. We specialize in delivering comprehensive ICT solutions that empower organizations to thrive in an increasingly connected world.
              </p>
              <p className="text-lg text-gray-700 font-poppins leading-relaxed mb-8">
                Our expertise spans across connectivity solutions, cloud services, cybersecurity, and enterprise infrastructure. We pride ourselves on understanding each client's unique challenges and delivering tailored solutions that drive measurable results across Zimbabwe and the region.
              </p>
              
              <motion.div 
                className="flex items-center space-x-4 text-dande-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Proudly serving Zimbabwe since 1998</span>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Company illustration */}
              <div className="mb-8 h-64 relative">
                <CompanyIllustration />
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "1000+", label: "Projects Completed", delay: 0.6 },
                  { value: "26+", label: "Years Experience", delay: 0.7 },
                  { value: "500+", label: "Happy Clients", delay: 0.8 },
                  { value: "24/7", label: "Support", delay: 0.9 }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: stat.delay }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.div 
                      className="text-3xl md:text-4xl font-poppins font-bold text-dande-primary mb-2"
                      initial={{ scale: 0 }}
                      animate={isVisible ? { scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: stat.delay + 0.2, type: "spring", stiffness: 200 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-gray-600 font-poppins text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Our Foundation Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-poppins font-bold text-dande-dark mb-4">
              Our Foundation
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built on strong principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-white text-2xl" />
              </div>
              <h4 className="text-2xl font-poppins font-bold text-dande-dark mb-4">
                Our Mission
              </h4>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="text-white text-2xl" />
              </div>
              <h4 className="text-2xl font-poppins font-bold text-dande-dark mb-4">
                Our Vision
              </h4>
              <p className="text-gray-700 leading-relaxed">
                To be the leading technology partner that transforms how businesses operate, connect, and succeed in an interconnected world.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white text-2xl" />
              </div>
              <h4 className="text-2xl font-poppins font-bold text-dande-dark mb-4">
                Our Values
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Innovation, integrity, excellence, and client success drive every decision we make and every solution we deliver.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Niakazi Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-poppins font-bold text-dande-dark mb-4">
              Why Choose NIAKAZI
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that matter
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white text-2xl" />
              </div>
              <h4 className="text-2xl font-poppins font-bold text-dande-dark mb-4">
                Expert Team
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Certified professionals with deep expertise in the latest technologies and industry best practices.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white text-2xl" />
              </div>
              <h4 className="text-2xl font-poppins font-bold text-dande-dark mb-4">
                Proven Track Record
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Successfully delivered 500+ projects across various industries with exceptional results.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-white text-2xl" />
              </div>
              <h4 className="text-2xl font-poppins font-bold text-dande-dark mb-4">
                24/7 Support
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Round-the-clock support and maintenance to ensure your systems run smoothly at all times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}