import { motion } from "framer-motion";
import { useParallax } from "../hooks/useScrollAnimation";
import { Monitor, Wifi, Shield, Clock, Globe, Zap, Server, Database, Cpu, Network } from "lucide-react";

export default function Hero() {
  const offsetY = useParallax(0.3);
  const backgroundOffset = useParallax(0.1);
  const floatingOffset = useParallax(0.6);
  
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

  // Enhanced Tech illustration SVG
  const TechIllustration = () => (
    <svg className="w-full h-full opacity-20" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="white" stopOpacity="0.3"/>
        </radialGradient>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0.2"/>
          <stop offset="50%" stopColor="white" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="white" stopOpacity="0.2"/>
        </linearGradient>
      </defs>
      
      {/* Network nodes with enhanced effects */}
      <circle cx="150" cy="150" r="12" fill="url(#nodeGradient)">
        <animate attributeName="r" values="12;18;12" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="350" cy="200" r="10" fill="url(#nodeGradient)">
        <animate attributeName="r" values="10;16;10" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="550" cy="180" r="14" fill="url(#nodeGradient)">
        <animate attributeName="r" values="14;20;14" dur="4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="400" cy="350" r="11" fill="url(#nodeGradient)">
        <animate attributeName="r" values="11;17;11" dur="3.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="650" cy="300" r="9" fill="url(#nodeGradient)">
        <animate attributeName="r" values="9;15;9" dur="2.8s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.8s" repeatCount="indefinite"/>
      </circle>
      
      {/* Enhanced connecting lines */}
      <line x1="150" y1="150" x2="350" y2="200" stroke="url(#lineGradient)" strokeWidth="3">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite"/>
      </line>
      <line x1="350" y1="200" x2="550" y2="180" stroke="url(#lineGradient)" strokeWidth="3">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.5s" repeatCount="indefinite"/>
      </line>
      <line x1="350" y1="200" x2="400" y2="350" stroke="url(#lineGradient)" strokeWidth="3">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite"/>
      </line>
      <line x1="550" y1="180" x2="650" y2="300" stroke="url(#lineGradient)" strokeWidth="3">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.2s" repeatCount="indefinite"/>
      </line>
      <line x1="400" y1="350" x2="650" y2="300" stroke="url(#lineGradient)" strokeWidth="3">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.8s" repeatCount="indefinite"/>
      </line>
      
      {/* Enhanced data flow particles */}
      <circle r="4" fill="white" opacity="0.9">
        <animateMotion dur="5s" repeatCount="indefinite" path="M150,150 Q250,100 350,200 Q450,150 550,180"/>
      </circle>
      <circle r="3" fill="white" opacity="0.7">
        <animateMotion dur="4s" repeatCount="indefinite" path="M350,200 Q500,250 650,300"/>
      </circle>
      <circle r="5" fill="white" opacity="0.8">
        <animateMotion dur="6s" repeatCount="indefinite" path="M550,180 Q575,240 650,300 Q525,375 400,350"/>
      </circle>
      
      {/* Floating geometric shapes */}
      <polygon points="100,400 120,370 140,400 120,430" fill="white" opacity="0.3">
        <animateTransform attributeName="transform" type="rotate" values="0 120 400;360 120 400" dur="8s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite"/>
      </polygon>
      <rect x="680" y="100" width="20" height="20" fill="white" opacity="0.4">
        <animateTransform attributeName="transform" type="rotate" values="0 690 110;360 690 110" dur="6s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
      </rect>
    </svg>
  );

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Aurora Background Effects */}
      <div className="aurora-bg"></div>
      <div className="aurora-bg"></div>
      
      {/* Background Pattern */}
      <BackgroundPattern />
      
      {/* Tech Illustration Background */}
      <div className="absolute inset-0" style={{ transform: `translateY(${backgroundOffset}px)` }}>
        <TechIllustration />
      </div>
      
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-black/80 to-transparent"
        animate={{ x: [-100, 100, -100] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Simplified floating tech icons - minimal animations */}
      <motion.div
        className="absolute top-20 left-4 md:left-10 text-white hidden sm:block"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Monitor size={32} className="opacity-60" />
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-4 md:right-20 text-white hidden md:block"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Shield size={28} className="opacity-50" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-8 md:left-16 text-white hidden lg:block"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Zap size={24} className="opacity-40" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-8 md:right-32 text-white hidden lg:block"
        animate={{ rotate: [0, 180, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Network size={30} className="opacity-30" />
      </motion.div>
      
      <motion.div
        className="absolute top-60 left-1/3 text-white hidden md:block"
        animate={{ y: [0, -5, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <Globe size={22} className="opacity-40" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-1/2 text-white hidden lg:block"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Server size={26} className="opacity-35" />
      </motion.div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-6xl mx-auto" style={{ transform: `translateY(${offsetY}px)` }}>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full glass-card text-xs sm:text-sm font-medium font-space-grotesk">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Leading ICT Solutions in Zimbabwe
          </span>
        </motion.div>

        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-bold mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="block">
            Unlock reliable and secure 
          </span>
          <span className="block text-gradient-niakazi mt-2">
            connectivity
          </span> 
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">
            for your business
          </span>
        </motion.h1>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 max-w-4xl mx-auto"
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
              className="text-center glass-card rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto mb-2 sm:mb-3" />
              <p className="text-xs sm:text-sm font-semibold">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p 
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed opacity-90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          Experience enterprise-grade connectivity solutions with 26+ years of proven expertise. 
          From high-speed internet to comprehensive managed services, we deliver the infrastructure your business needs to thrive.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            onClick={() => scrollToSection('#contact')}
            className="w-full sm:w-auto btn-glow px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-niakazi-dark rounded-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started Today
          </motion.button>
          
          <motion.button
            onClick={() => scrollToSection('#services')}
            className="w-full sm:w-auto glass-card px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Our Services
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
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