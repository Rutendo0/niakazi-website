import { useState, useEffect } from "react";
import { Send, Facebook, Instagram, Linkedin, MapPin, ArrowUp, Mail, Phone, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
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
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-dande-primary hover:bg-dande-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await apiRequest("/api/newsletter", "POST", { email: newsletterEmail });
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter!",
      });
      setNewsletterEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Solutions" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" }
  ];

  const solutions = [
    "Connectivity",
    "Cloud Services", 
    "Security",
    "Hardware & Software",
    "Training & managed services",
    "Value Added Services"
  ];

  return (
    <>
      <ScrollToTop />
      <footer className="bg-gradient-to-br from-dande-dark to-slate-800 text-white py-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-dande-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            ref={ref}
            className="grid md:grid-cols-4 gap-8"
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
              <div className="mb-6">
                <motion.div 
                  className="text-2xl font-bold text-white mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  NIAKAZI
                </motion.div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-poppins">
                Your reliable ICT solutions partner with 26+ years of experience delivering cutting-edge technology infrastructure across Zimbabwe and Africa.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <motion.div 
                  className="flex items-center text-gray-300 text-sm"
                  whileHover={{ x: 5, color: "#2563eb" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MapPin className="h-4 w-4 mr-3 text-dande-primary" />
                  <a 
                    href="https://maps.app.goo.gl/ZHqM1DbLxHzq6EV29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-dande-primary transition-colors"
                  >
                    First Str & Union Ave, Harare
                  </a>
                </motion.div>
                
                <motion.div 
                  className="flex items-center text-gray-300 text-sm"
                  whileHover={{ x: 5, color: "#2563eb" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Phone className="h-4 w-4 mr-3 text-dande-primary" />
                  <span>+263 77 822 4653</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center text-gray-300 text-sm"
                  whileHover={{ x: 5, color: "#2563eb" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail className="h-4 w-4 mr-3 text-dande-primary" />
                  <span>info@niakazi.com</span>
                </motion.div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <motion.a 
                  href="https://www.facebook.com/dandemutande" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook className="h-4 w-4" />
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/dandemutande" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-600 transition-all duration-300"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="h-4 w-4" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-700 transition-all duration-300"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="h-4 w-4" />
                </motion.a>
              </div>
            </motion.div>
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6 font-poppins text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-dande-primary transition-colors font-poppins flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-2 h-2 bg-dande-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.label}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-6 font-poppins text-white">Our Solutions</h4>
              <ul className="space-y-3">
                {solutions.map((solution, index) => (
                  <motion.li 
                    key={solution}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    <motion.a 
                      href="#services" 
                      className="text-gray-300 hover:text-dande-primary transition-colors font-poppins flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-2 h-2 bg-dande-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {solution}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold mb-6 font-poppins text-white">Stay Connected</h4>
              <p className="text-gray-300 text-sm mb-6 font-poppins">Subscribe to receive updates about our latest ICT solutions and services.</p>
              <motion.form 
                onSubmit={handleNewsletterSubmit} 
                className="mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-dande-primary font-poppins"
                    required
                    disabled={isSubmitting}
                  />
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-dande-primary hover:bg-dande-dark text-white px-6 py-3 rounded-r-lg transition-all duration-300 disabled:opacity-50 flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </motion.button>
                </div>
              </motion.form>
              
              <div className="space-y-2">
                <motion.div 
                  className="flex items-center text-gray-300 text-sm"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="h-4 w-4 mr-3 text-dande-primary" />
                  <span>info@dandemutande.africa</span>
                </motion.div>
                <motion.div 
                  className="flex items-center text-gray-300 text-sm"
                  whileHover={{ x: 5 }}
                >
                  <Globe className="h-4 w-4 mr-3 text-dande-primary" />
                  <span>www.dandemutande.africa</span>
                </motion.div>
              </div>
            </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-300 text-sm font-poppins">© 2024 Dandemutande. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.a 
              href="#" 
              className="text-gray-300 hover:text-dande-primary text-sm transition-colors font-poppins"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-300 hover:text-dande-primary text-sm transition-colors font-poppins"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-300 hover:text-dande-primary text-sm transition-colors font-poppins"
              whileHover={{ y: -2 }}
            >
              Support
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
    </>
  );
}
