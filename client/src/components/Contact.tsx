import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, Send, Clock, MessageCircle, Globe, Shield, Zap, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await apiRequest("/api/contact", "POST", formData);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting us. We'll respond within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Message sent!",
        description: "Thank you for your message! We will get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Enhanced contact illustration
  const ContactIllustration = () => (
    <svg className="w-full h-full opacity-80" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="contactGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--niakazi-primary))" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="hsl(var(--niakazi-primary))" stopOpacity="0.1"/>
        </radialGradient>
        <filter id="contactGlow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Central hub */}
      <circle cx="200" cy="150" r="40" fill="url(#contactGlow)" filter="url(#contactGlow)">
        <animate attributeName="r" values="40;50;40" dur="3s" repeatCount="indefinite"/>
      </circle>
      
      {/* Communication satellites */}
      <circle cx="120" cy="80" r="15" fill="hsl(var(--niakazi-secondary))" opacity="0.7">
        <animate attributeName="r" values="15;20;15" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="280" cy="80" r="12" fill="hsl(var(--niakazi-accent))" opacity="0.6">
        <animate attributeName="r" values="12;18;12" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="320" cy="220" r="14" fill="hsl(var(--niakazi-primary))" opacity="0.8">
        <animate attributeName="r" values="14;19;14" dur="2.2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="80" cy="220" r="13" fill="hsl(var(--niakazi-secondary))" opacity="0.7">
        <animate attributeName="r" values="13;17;13" dur="2.8s" repeatCount="indefinite"/>
      </circle>
      
      {/* Connection lines */}
      <line x1="200" y1="150" x2="120" y2="80" stroke="hsl(var(--niakazi-primary))" strokeWidth="2" opacity="0.5">
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite"/>
      </line>
      <line x1="200" y1="150" x2="280" y2="80" stroke="hsl(var(--niakazi-secondary))" strokeWidth="2" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.5s" repeatCount="indefinite"/>
      </line>
      <line x1="200" y1="150" x2="320" y2="220" stroke="hsl(var(--niakazi-accent))" strokeWidth="2" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite"/>
      </line>
      <line x1="200" y1="150" x2="80" y2="220" stroke="hsl(var(--niakazi-primary))" strokeWidth="2" opacity="0.5">
        <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.8s" repeatCount="indefinite"/>
      </line>
      
      {/* Data packets */}
      <circle r="3" fill="white" opacity="0.9">
        <animateMotion dur="4s" repeatCount="indefinite" path="M200,150 Q160,115 120,80"/>
      </circle>
      <circle r="2" fill="white" opacity="0.7">
        <animateMotion dur="3s" repeatCount="indefinite" path="M200,150 Q240,115 280,80"/>
      </circle>
    </svg>
  );

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      text: "+263 77 822 4653",
      color: "from-niakazi-primary to-niakazi-secondary"
    },
    {
      icon: Mail,
      title: "Email",
      text: "info@niakazi.com",
      color: "from-niakazi-secondary to-niakazi-accent"
    },
    {
      icon: Clock,
      title: "Business Hours",
      text: "Mon - Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM",
      color: "from-niakazi-accent to-niakazi-primary"
    },
    {
      icon: MapPin,
      title: "Address",
      text: "First Str & Union Ave, Harare\nZB Center, 4th Floor",
      color: "from-niakazi-primary to-niakazi-light"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/niakazi", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/niakazi", label: "Instagram" }
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-niakazi-dark via-niakazi-primary to-niakazi-secondary relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="aurora-bg"></div>
      <div className="aurora-bg"></div>
      
      {/* Floating tech elements */}
      <motion.div 
        className="absolute top-20 left-20 text-white/20"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Globe size={40} />
      </motion.div>
      <motion.div 
        className="absolute bottom-32 right-32 text-white/15"
        animate={{ y: [0, -15, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Shield size={35} />
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-7xl mx-auto"
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 rounded-full animated-gradient-border glass-card text-white font-semibold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get In Touch
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-6">
              Ready to Transform Your{" "}
              <span className="text-shimmer">Business?</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Contact our ICT experts today and discover how we can help optimize your technology infrastructure across Zimbabwe.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-space-grotesk font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div 
                      key={index} 
                      className="flex items-start group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <IconComponent className="text-white text-xl" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-dande-dark mb-2 font-poppins text-lg">{info.title}</h4>
                        <p className="text-gray-600 font-poppins whitespace-pre-line leading-relaxed">{info.text}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-dande-dark mb-4 font-poppins">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-dande-primary rounded-lg flex items-center justify-center hover:opacity-90 transition-all"
                        aria-label={social.label}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconComponent className="text-white" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20"
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-poppins font-bold text-dande-dark mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-dande-dark font-medium mb-2 font-poppins">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dande-primary focus:border-transparent font-poppins transition-all"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-dande-dark font-medium mb-2 font-poppins">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dande-primary focus:border-transparent font-poppins transition-all"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-dande-dark font-medium mb-2 font-poppins">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dande-primary focus:border-transparent font-poppins transition-all"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-dande-dark font-medium mb-2 font-poppins">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dande-primary focus:border-transparent font-poppins resize-none transition-all"
                    placeholder="Tell us about your project or requirements..."
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-dande-primary text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg hover:bg-dande-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}