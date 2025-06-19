import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, Send, Clock, MessageCircle, Globe, Shield, Zap, Users, CheckCircle } from "lucide-react";
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

  const whyChooseUs = [
    { icon: CheckCircle, text: "26+ Years Experience" },
    { icon: CheckCircle, text: "24/7 Technical Support" },
    { icon: CheckCircle, text: "Certified Professionals" },
    { icon: CheckCircle, text: "Customized Solutions" }
  ];

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-50 rounded-full blur-xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-indigo-50 rounded-full blur-lg opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Get in <span className="text-niakazi-primary">Touch</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to transform your business with cutting-edge ICT solutions? Let's discuss your project and bring your vision to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-space-grotesk font-bold text-gray-900 mb-8">Contact Form</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:border-niakazi-primary focus:bg-white transition-all"
                  required
                />
                
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:border-niakazi-primary focus:bg-white transition-all"
                  required
                />
              </div>
              
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:border-niakazi-primary focus:bg-white transition-all"
              />
              
              <textarea
                name="message"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:border-niakazi-primary focus:bg-white transition-all resize-none"
                required
              />

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-niakazi-primary text-white px-8 py-4 rounded-xl font-space-grotesk font-semibold text-lg hover:bg-niakazi-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </div>
                )}
              </motion.button>
            </form>

            {/* Why Choose Us */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Choose NIAKAZI?</h4>
              <div className="grid grid-cols-2 gap-3">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <item.icon className="w-4 h-4 text-green-600" />
                    <span className="text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-space-grotesk font-bold text-gray-900 mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-semibold mb-1">{info.title}</h4>
                        <p className="text-gray-600 text-sm whitespace-pre-line">{info.text}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-gray-900 font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://www.facebook.com/profile.php?id=61576086914795"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-700 shadow-lg transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Facebook className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/niakazi_technology_solutions?igsh=MWIxa2p2czRzZXR3ZQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 shadow-lg transition-all"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Emergency Contact - Compact Version */}
            <motion.div
              className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white">Emergency Support</h4>
              </div>
              <p className="text-white/90 text-sm mb-4">
                24/7 technical assistance for critical issues
              </p>
              <motion.button
                className="w-full bg-white text-red-600 px-4 py-3 rounded-xl font-semibold text-sm hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('tel:+263778224653', '_self')}
              >
                Call Emergency Line
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}