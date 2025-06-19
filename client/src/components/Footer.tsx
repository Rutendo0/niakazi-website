import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, ArrowUp, Mail, Phone, Globe } from "lucide-react";
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


  return (
    <>
      <ScrollToTop />
      


      {/* Main Footer */}
      <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-12 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-300/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10" ref={ref}>
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.div 
                className="flex items-center space-x-3 mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">N</span>
                </div>
                <div className="text-2xl font-bold font-space-grotesk text-white">
                  NIAKAZI
                </div>
              </motion.div>
              
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                Empowering Zimbabwe's digital transformation with innovative ICT solutions since 1998.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                <motion.a 
                  href="https://www.facebook.com/niakazi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook className="h-4 w-4" />
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/niakazi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="h-4 w-4" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/company/niakazi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="h-4 w-4" />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  >
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      className="text-blue-200 hover:text-white transition-colors text-sm"
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
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <motion.div 
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="h-4 w-4 text-blue-300 flex-shrink-0" />
                  <a 
                    href="tel:+263778224653"
                    className="text-blue-100 text-sm hover:text-white transition-colors"
                  >
                    +263 77 822 4653
                  </a>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="h-4 w-4 text-blue-300 flex-shrink-0" />
                  <a 
                    href="mailto:info@niakazi.com"
                    className="text-blue-100 text-sm hover:text-white transition-colors"
                  >
                    info@niakazi.com
                  </a>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                >
                  <Globe className="h-4 w-4 text-blue-300 flex-shrink-0" />
                  <span className="text-blue-100 text-sm">
                    Zimbabwe & Beyond
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div 
            className="pt-6 border-t border-blue-600/30"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
              <div className="text-blue-200 text-sm">
                © {new Date().getFullYear()} NIAKAZI. All rights reserved.
              </div>
              <div className="flex space-x-4 text-sm">
                <motion.button
                  className="text-blue-200 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => scrollToSection('#about')}
                >
                  Privacy Policy
                </motion.button>
                <motion.button
                  className="text-blue-200 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => scrollToSection('#about')}
                >
                  Terms of Service
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}