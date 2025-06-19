import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Solutions" },
    { href: "#products", label: "Products" },
    { href: "#stats", label: "Statistics" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href);
      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm' 
          : 'bg-white/10 backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div 
              className="w-10 h-10 bg-gradient-niakazi rounded-xl flex items-center justify-center shadow-lg cursor-pointer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={() => {
                if (window.location.pathname === '/quote') {
                  window.location.href = '/';
                } else {
                  scrollToSection('#home');
                }
              }}
            >
              <span className="text-white font-bold text-lg">N</span>
            </motion.div>
            <div className={`text-2xl font-bold font-space-grotesk transition-colors duration-300 ${
              scrolled ? 'text-blue-600' : 'text-white'
            }`}>
              NIAKAZI
            </div>
          </motion.div>
          
          <motion.div 
            className="hidden lg:flex space-x-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`
                  px-4 py-2 rounded-full font-medium font-space-grotesk relative group transition-all duration-300
                  ${activeSection === item.href 
                    ? 'text-white bg-blue-600' 
                    : scrolled 
                      ? 'text-gray-800 hover:text-blue-600 hover:bg-blue-50'
                      : 'text-white hover:text-blue-200 hover:bg-white/10'
                  }
                `}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection !== item.href && (
                  <span className="absolute inset-0 rounded-full bg-niakazi-primary/20 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                )}
              </motion.button>
            ))}
          </motion.div>
          
          {/* Get Quote Button - Desktop */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link to="/quote">
              <motion.button
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium font-space-grotesk hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Quote
              </motion.button>
            </Link>
          </motion.div>
          
          <motion.button
            className="lg:hidden p-2 rounded-xl bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </motion.button>
        </div>
        
        {isMobileMenuOpen && (
          <motion.div 
            className="lg:hidden mt-6 pb-6"
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex flex-col space-y-2 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`
                    px-4 py-3 rounded-xl font-medium font-space-grotesk text-left transition-all duration-300
                    ${activeSection === item.href 
                      ? 'text-white bg-blue-600' 
                      : 'text-gray-800 hover:text-blue-600 hover:bg-blue-50'
                    }
                  `}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <Link to="/quote">
                <motion.button
                  className="w-full px-4 py-3 bg-blue-600 text-white rounded-xl font-medium font-space-grotesk hover:bg-blue-700 transition-all duration-300 mt-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Quote
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}