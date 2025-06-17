import { motion } from "framer-motion";
import { useParallax } from "../hooks/useScrollAnimation";
import { Monitor, Wifi, Shield, Clock, Globe, Zap, Server, Database, Cpu, Network } from "lucide-react";

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
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-niakazi overflow-hidden parallax-container">
      {/* Aurora Background Effects */}
      <div className="aurora-bg"></div>
      <div className="aurora-bg"></div>
      
      {/* Background Pattern */}
      <BackgroundPattern />
      
      {/* Tech Illustration Background */}
      <div className="absolute inset-0" style={{ transform: `translateY(${offsetY * 0.2}px)` }}>
        <TechIllustration />
      </div>
      
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent"
        animate={{ x: [-100, 100, -100] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Enhanced Floating tech icons */}
      <motion.div
        className="absolute top-20 left-10 text-white/30 particle-animation"
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
        <Monitor size={40} className="neon-glow" />
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-20 text-white/25 blob-animation"
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
        <Server size={35} className="breathe" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-20 text-white/20 float-slow"
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
        <Shield size={45} className="pulse-glow" />
      </motion.div>

      <motion.div
        className="absolute bottom-60 right-40 text-white/35 float-medium"
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
        <Database size={30} className="rotate-hover" />
      </motion.div>
      
      <motion.div
        className="absolute top-1/3 left-1/4 text-white/15 float-fast"
        animate={{ 
          y: [0, -12, 0],
          rotate: [0, 20, 0]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 3
        }}
      >
        <Network size={28} />
      </motion.div>
      
      <motion.div
        className="absolute top-2/3 right-1/3 text-white/20 particle-animation"
        animate={{ 
          y: [0, -22, 0],
          rotate: [0, -12, 0]
        }}
        transition={{ 
          duration: 4.5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1.5
        }}
      >
        <Cpu size={32} />
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
          <span className="inline-flex items-center px-6 py-3 rounded-full animated-gradient-border glass-card text-sm font-medium font-space-grotesk">
            <Zap className="w-4 h-4 mr-2 text-shimmer" />
            Leading ICT Solutions in Zimbabwe
          </span>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-space-grotesk font-bold mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="typewriter inline-block">
            Unlock reliable and secure 
          </span>
          <span className="block text-gradient-niakazi text-shimmer mt-2">
            connectivity
          </span> 
          <span className="block text-3xl md:text-5xl lg:text-6xl mt-2 neon-glow">
            for your business
          </span>
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
              className={`text-center glass-card rounded-xl p-6 tilt-card magnetic-area stagger-${index + 1}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <motion.div 
                className="flex justify-center mb-3"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              >
                <feature.icon className="w-8 h-8 text-white neon-glow" />
              </motion.div>
              <span className="text-sm md:text-base font-space-grotesk font-medium">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mb-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.button
            onClick={() => scrollToSection('#services')}
            className="btn-glow bg-white text-niakazi-dark px-12 py-4 rounded-full font-space-grotesk font-semibold text-lg hover:shadow-2xl transition-all inline-block ripple-btn"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Discover Our Solutions
          </motion.button>
          
          <motion.button
            onClick={() => window.location.href = '/quote'}
            className="bg-transparent border-2 border-white text-white px-12 py-4 rounded-full font-space-grotesk font-semibold text-lg hover:bg-white hover:text-niakazi-dark transition-all inline-block"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Free Quote
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