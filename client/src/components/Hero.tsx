import { motion } from "framer-motion";
import { useParallax } from "../hooks/useScrollAnimation";
import { Monitor, Wifi, Shield, Clock, Globe, Zap } from "lucide-react";

export default function Hero() {
  const offsetY = useParallax();
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // SVG Background Pattern
  const BackgroundPattern = () => (
    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );

  // Tech illustration SVG
  const TechIllustration = () => (
    <svg className="w-full h-full opacity-20" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      {/* Network nodes */}
      <circle cx="150" cy="150" r="8" fill="white" opacity="0.8">
        <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="350" cy="200" r="6" fill="white" opacity="0.6">
        <animate attributeName="r" values="6;10;6" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="550" cy="180" r="10" fill="white" opacity="0.7">
        <animate attributeName="r" values="10;14;10" dur="4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="400" cy="350" r="7" fill="white" opacity="0.5">
        <animate attributeName="r" values="7;11;7" dur="3.5s" repeatCount="indefinite"/>
      </circle>
      
      {/* Connecting lines */}
      <line x1="150" y1="150" x2="350" y2="200" stroke="white" strokeWidth="2" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite"/>
      </line>
      <line x1="350" y1="200" x2="550" y2="180" stroke="white" strokeWidth="2" opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite"/>
      </line>
      <line x1="350" y1="200" x2="400" y2="350" stroke="white" strokeWidth="2" opacity="0.5">
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite"/>
      </line>
      
      {/* Data flow particles */}
      <circle r="3" fill="white" opacity="0.8">
        <animateMotion dur="4s" repeatCount="indefinite" path="M150,150 Q250,100 350,200"/>
      </circle>
      <circle r="2" fill="white" opacity="0.6">
        <animateMotion dur="3s" repeatCount="indefinite" path="M350,200 Q450,150 550,180"/>
      </circle>
    </svg>
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dande-dark to-dande-primary overflow-hidden parallax-container">
      {/* Background Pattern */}
      <BackgroundPattern />
      
      {/* Tech Illustration Background */}
      <div className="absolute inset-0" style={{ transform: `translateY(${offsetY * 0.2}px)` }}>
        <TechIllustration />
      </div>
      
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent"
        animate={{ x: [-100, 100, -100] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Floating tech icons */}
      <motion.div
        className="absolute top-20 left-10 text-white/20"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <Monitor size={40} />
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-20 text-white/15"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Wifi size={35} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-20 text-white/10"
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, 15, 0]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Shield size={45} />
      </motion.div>

      <motion.div
        className="absolute bottom-60 right-40 text-white/25"
        animate={{ 
          y: [0, -18, 0],
          rotate: [0, -8, 0]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <Globe size={30} />
      </motion.div>
      
      <motion.div 
        className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto py-20"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      >
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
            <Zap className="w-4 h-4 mr-2" />
            Leading ICT Solutions in Zimbabwe
          </span>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Unlock reliable and secure 
          <span className="block gradient-text bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            connectivity
          </span> 
          for your business
        </motion.h1>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { text: "Route Diversity", icon: Globe },
            { text: "Quick Turnaround", icon: Clock }, 
            { text: "24hr Monitoring", icon: Monitor },
            { text: "26+ Years Experience", icon: Shield }
          ].map((feature, index) => (
            <motion.div 
              key={feature.text}
              className="text-center glass rounded-xl p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className="flex justify-center mb-3"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-sm md:text-base font-poppins">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.button
            onClick={() => scrollToSection('#services')}
            className="btn-modern bg-white text-dande-dark px-12 py-4 rounded-full font-poppins font-semibold text-lg hover:shadow-2xl transition-all inline-block"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Discover Our Solutions
          </motion.button>
        </motion.div>

        <motion.p 
          className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-poppins opacity-90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Count on us for agile and responsive 24/7 customer support. Powerful and affordable ICT products and services. Access to ICT specialists with deep expertise across Zimbabwe and beyond.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}