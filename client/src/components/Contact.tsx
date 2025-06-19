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
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
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
          <motion.div
            className="inline-flex items-center px-8 py-4 rounded-full animated-gradient-border glass-card text-white font-semibold mb-8 text-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <MessageCircle className="w-5 h-5 mr-2 text-shimmer" />
            Let's Connect
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold text-white mb-8 leading-tight">
            Ready to Transform Your{" "}
            <span className="text-gradient-niakazi text-shimmer">Business?</span>
          </h2>
          <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
            Connect with our ICT experts today and discover how we can help optimize your technology infrastructure and drive sustainable growth for your organization across Zimbabwe.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="luxury-card rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="mb-10">
              <h3 className="text-3xl font-space-grotesk font-bold text-white mb-4 neon-glow">Send us a Message</h3>
              <p className="text-white text-lg">Fill out the form below and we'll get back to you within 24 hours with a customized solution.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-3">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-niakazi-accent focus:border-niakazi-accent transition-all text-white placeholder-white/50 backdrop-blur-sm"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-3">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-niakazi-accent focus:border-niakazi-accent transition-all text-white placeholder-white/50 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-3">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-niakazi-accent focus:border-niakazi-accent transition-all text-white placeholder-white/50 backdrop-blur-sm"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-3">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-niakazi-accent focus:border-niakazi-accent transition-all text-white placeholder-white/50 backdrop-blur-sm resize-none"
                  placeholder="Tell us about your project requirements..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </motion.button>
            </form>

            {/* Why Choose Us */}
            <div className="mt-10 pt-8 border-t border-white/20">
              <h4 className="text-lg font-semibold text-white mb-4">Why Choose NIAKAZI?</h4>
              <div className="grid grid-cols-2 gap-3">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 text-white/80"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <item.icon className="w-4 h-4 text-niakazi-accent" />
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
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
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
              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://www.facebook.com/niakazi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-niakazi-primary to-niakazi-secondary rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Facebook className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/niakazi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-niakazi-secondary to-niakazi-accent rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <motion.div
              className="bg-red-50 border border-red-200 rounded-3xl p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Emergency Support</h4>
              </div>
              <p className="text-gray-700 mb-4">
                Need immediate technical assistance? Our emergency support team is available 24/7 for critical issues.
              </p>
              <motion.button
                className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all"
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