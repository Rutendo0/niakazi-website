import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, MapPin, ArrowUp, Mail, Phone, Globe, Clock, Award, Users, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Scroll to top component
function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-niakazi-primary hover:bg-niakazi-secondary text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center neon-glow"
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Solutions" },
    { href: "#products", label: "Products" },
    { href: "#stats", label: "Statistics" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" }
  ];

  
  const achievements = [
    { icon: Award, text: "6+ Years Experience", number: "6+" },
    { icon: Users, text: "Happy Clients", number: "200+" },
    { icon: Star, text: "Projects Completed", number: "100+" }
  ];

  return (
    <>
      <ScrollToTop />
      


      {/* Main Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-niakazi-dark to-slate-800 text-white py-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-niakazi-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-niakazi-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10" ref={ref}>
          <motion.div 
            className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <motion.div 
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-gradient-niakazi rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <div className="text-3xl font-bold font-space-grotesk text-white">
                  NIAKAZI
                </div>
              </motion.div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-2 rounded-lg bg-white border border-gray-200 hover:border-niakazi-primary transition-all"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <achievement.icon className="w-4 h-4 text-niakazi-primary mx-auto mb-1" />
                    <div className="text-sm font-bold text-gray-900">{achievement.number}</div>
                    <div className="text-xs text-gray-500">{achievement.text}</div>
                  </motion.div>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <motion.a 
                  href="https://www.facebook.com/niakazi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook className="h-5 w-5" />
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/niakazi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-600 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="h-5 w-5" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/company/niakazi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-700 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-xl font-space-grotesk font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-niakazi-accent transition-colors cursor-pointer text-left"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {link.label}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
 
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-xl font-space-grotesk font-bold text-white mb-6">Contact Info</h4>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <MapPin className="h-5 w-5 text-niakazi-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Address</div>
                    <a 
                      href="https://maps.app.goo.gl/ZHqM1DbLxHzq6EV29"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 text-sm hover:text-niakazi-accent transition-colors"
                    >
                      First Str & Union Ave, Harare<br />
                      ZB Center, 4th Floor
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <Phone className="h-5 w-5 text-niakazi-secondary flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <a 
                      href="tel:+263778224653"
                      className="text-gray-300 text-sm hover:text-niakazi-accent transition-colors"
                    >
                      +263 77 822 4653
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <Mail className="h-5 w-5 text-niakazi-accent flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <a 
                      href="mailto:info@niakazi.com"
                      className="text-gray-300 text-sm hover:text-niakazi-accent transition-colors"
                    >
                      info@niakazi.com
                    </a>
                  </div>
                </motion.div> 
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div 
            className="pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} NIAKAZI. All rights reserved. Powering Zimbabwe's digital transformation.
              </div>
              <div className="flex space-x-6 text-sm">
                <motion.button
                  className="text-gray-400 hover:text-niakazi-accent transition-colors"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => scrollToSection('#about')}
                >
                  Privacy Policy
                </motion.button>
                <motion.button
                  className="text-gray-400 hover:text-niakazi-accent transition-colors"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => scrollToSection('#about')}
                >
                  Terms of Service
                </motion.button>
                <motion.button
                  className="text-gray-400 hover:text-niakazi-accent transition-colors"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => scrollToSection('#contact')}
                >
                  Support
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}