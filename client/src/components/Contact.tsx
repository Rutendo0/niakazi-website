import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, Send, Clock, MessageCircle, Zap } from "lucide-react";
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
    setIsSubmitting(true);
    
    try {
      await apiRequest("/api/contact", "POST", formData);
      toast({
        title: "Message sent!",
        description: "Thank you for your message! We will get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      text: "+263 77 822 4653",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      text: "info@dandemutande.africa",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      text: "Mon - Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MapPin,
      title: "Address",
      text: "First Str & Union Ave, Harare\nZB Center, 4th Floor",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/dandemutande", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/dandemutande", label: "Instagram" }
  ];

  // Contact illustration SVG
  const ContactIllustration = () => (
    <svg className="w-full h-full opacity-80" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      {/* Communication waves */}
      <circle cx="200" cy="150" r="60" fill="none" stroke="hsl(var(--dande-primary))" strokeWidth="2" opacity="0.3">
        <animate attributeName="r" values="60;80;60" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="200" cy="150" r="40" fill="none" stroke="hsl(var(--dande-primary))" strokeWidth="2" opacity="0.5">
        <animate attributeName="r" values="40;60;40" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2s" repeatCount="indefinite"/>
      </circle>
      
      {/* Central device/phone */}
      <rect x="185" y="135" width="30" height="30" rx="5" fill="hsl(var(--dande-primary))" opacity="0.8"/>
      <circle cx="200" cy="150" r="8" fill="white"/>
      
      {/* Message bubbles */}
      <ellipse cx="120" cy="100" rx="25" ry="15" fill="hsl(var(--dande-dark))" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.9;0.6" dur="4s" repeatCount="indefinite"/>
      </ellipse>
      <ellipse cx="280" cy="200" rx="30" ry="18" fill="hsl(var(--dande-primary))" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.5s" repeatCount="indefinite"/>
      </ellipse>
      
      {/* Connection lines */}
      <line x1="200" y1="150" x2="120" y2="100" stroke="hsl(var(--dande-primary))" strokeWidth="2" opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite"/>
      </line>
      <line x1="200" y1="150" x2="280" y2="200" stroke="hsl(var(--dande-dark))" strokeWidth="2" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.5s" repeatCount="indefinite"/>
      </line>
    </svg>
  );

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-dande-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-dande-dark/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto"
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
              className="inline-flex items-center px-4 py-2 rounded-full bg-dande-primary/10 text-dande-primary font-semibold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get In Touch
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-dande-dark mb-6">
              Ready to Transform Your{" "}
              <span className="gradient-text">Business?</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
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
              <div className="mb-8 h-48 relative">
                <ContactIllustration />
              </div>

              <h3 className="text-2xl font-poppins font-bold text-dande-dark mb-8">Contact Information</h3>
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
                        className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg`}
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
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-dande-primary rounded-lg flex items-center justify-center hover:opacity-90 transition-all"
                        aria-label={social.label}
                      >
                        <IconComponent className="text-white" />
                      </a>
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
                <div>
                  <label htmlFor="name" className="block text-dande-dark font-medium mb-2 font-poppins">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dande-primary focus:border-transparent font-poppins"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dande-primary focus:border-transparent font-poppins"
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-dande-dark font-medium mb-2 font-poppins">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dande-primary focus:border-transparent font-poppins"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-dande-dark font-medium mb-2 font-poppins">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dande-primary focus:border-transparent font-poppins"
                    placeholder="Tell us about your ICT requirements..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-dande-dark text-white font-semibold py-3 px-6 rounded-full transition-all disabled:opacity-50 flex items-center justify-center font-poppins hover:bg-opacity-90"
                  style={{ backgroundColor: '#1f2b56' }}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
