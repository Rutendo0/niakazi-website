import { useState } from "react";
import { Send, Facebook, Instagram, Linkedin, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { motion } from "framer-motion";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await apiRequest("POST", "/api/newsletter", { email: newsletterEmail });
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
    <footer className="bg-dande-dark text-white py-12" style={{ backgroundColor: '#1f2b56' }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img 
                src="https://dandemutande.africa/wp-content/uploads/2022/08/Dandemutande_Logo.png" 
                alt="Dandemutande"
                className="h-10 w-auto mb-4 filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4 font-poppins">
              Your reliable ICT solutions partner with 26+ years of experience delivering cutting-edge technology infrastructure across Zimbabwe and Africa.
            </p>
            <div className="text-gray-300 text-sm font-poppins mb-4">
              <motion.div 
                className="flex items-center mb-2"
                whileHover={{ x: 5 }}
              >
                <MapPin className="h-4 w-4 mr-2" />
                <a 
                  href="https://maps.app.goo.gl/ZHqM1DbLxHzq6EV29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-dande-primary transition-colors"
                >
                  View Our Location
                </a>
              </motion.div>
              <p>📞 +263 (0) 4 123 456</p>
            </div>
            
            <div className="flex space-x-4">
              <motion.a 
                href="https://www.facebook.com/profile.php?id=61576086914795" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/niakazi_technology_solutions?igsh=MWIxa2p2czRzZXR3ZQ==" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-dande-primary transition-colors font-poppins"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">Our Solutions</h4>
            <ul className="space-y-2 text-sm">
              {solutions.map((solution) => (
                <li key={solution}>
                  <a href="#" className="text-gray-300 hover:text-dande-primary transition-colors font-poppins">
                    {solution}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">Stay Connected</h4>
            <p className="text-gray-300 text-sm mb-4 font-poppins">Subscribe to receive updates about our latest ICT solutions and services.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex mb-4">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-white bg-opacity-20 rounded-l-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-dande-primary font-poppins"
                required
              />
              <button
                type="submit"
                className="bg-dande-primary hover:opacity-90 text-white px-4 py-2 rounded-r-lg transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="text-gray-300 text-sm font-poppins">
              <p className="mb-1">📧 info@dandemutande.africa</p>
              <p>🌐 www.dandemutande.africa</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm font-poppins">© 2024 Dandemutande. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-dande-primary text-sm transition-colors font-poppins">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-dande-primary text-sm transition-colors font-poppins">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-dande-primary text-sm transition-colors font-poppins">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
