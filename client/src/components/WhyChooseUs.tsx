import { motion } from "framer-motion";
import { Clock, Users, Award, HeartHandshake } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: Clock,
      title: "26+ Years of Experience",
      description: "Over two decades of delivering reliable ICT solutions across Zimbabwe and Africa.",
      stat: "26+"
    },
    {
      icon: Users,
      title: "24/7 Customer Support",
      description: "Round-the-clock technical support and monitoring to ensure business continuity.",
      stat: "24/7"
    },
    {
      icon: Award,
      title: "99.9% Uptime Guarantee",
      description: "Industry-leading network reliability with comprehensive SLA commitments.",
      stat: "99.9%"
    },
    {
      icon: HeartHandshake,
      title: "200+ Satisfied Clients",
      description: "Trusted by businesses across multiple industries for critical ICT infrastructure.",
      stat: "200+"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full opacity-10 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-300 rounded-full opacity-10 blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 font-semibold mb-6">
            Why Choose NIAKAZI
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Trusted ICT Partner</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Your trusted ICT solutions partner with a proven track record of delivering excellence and reliability.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div 
                key={index} 
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <IconComponent className="text-white w-8 h-8" />
                </div>
                <div className="text-4xl font-bold text-orange-400 mb-2">{feature.stat}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-blue-100 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div 
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-2xl font-bold text-orange-400 mb-2">Route Diversity</h4>
              <p className="text-blue-100">Multiple network paths ensure uninterrupted connectivity</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-orange-400 mb-2">Quick Turnaround</h4>
              <p className="text-blue-100">Rapid deployment and implementation of solutions</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-orange-400 mb-2">Expert Team</h4>
              <p className="text-blue-100">Certified ICT specialists with deep technical expertise</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}