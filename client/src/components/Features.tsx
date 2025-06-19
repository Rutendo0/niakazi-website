import { motion } from "framer-motion";
import { Shield, Clock, Users, Award, Zap, Globe, HeadphonesIcon, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Features() {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security protocols with end-to-end encryption and compliance standards",
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support with guaranteed response times for critical issues",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with extensive experience in enterprise ICT solutions",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "ISO-certified processes ensuring highest quality standards in every project",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Fast implementation with minimal downtime using proven methodologies",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      icon: Globe,
      title: "Scalable Solutions",
      description: "Future-proof systems that grow with your business requirements",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: HeadphonesIcon,
      title: "Training Included",
      description: "Comprehensive staff training and documentation for seamless adoption",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: TrendingUp,
      title: "ROI Focused",
      description: "Solutions designed to deliver measurable returns on your technology investment",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Subtle background elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-100 rounded-full blur-xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-indigo-100 rounded-full blur-lg opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={ { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center p-3 bg-niakazi-primary/20 backdrop-blur-sm rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-6 h-6 text-niakazi-accent" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space-grotesk">
            Why Choose
            <span className="block text-niakazi-primary">NIAKAZI</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver enterprise-grade ICT solutions with unmatched reliability, security, and support
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Icon with gradient background */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mb-6 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-niakazi-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-niakazi-primary/10 to-niakazi-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>


            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 } }
          transition={{ duration: 1}}
        >
          <div className="bg-white border border-gray-200 rounded-xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of satisfied clients who trust NIAKAZI for their ICT solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => {
                  window.location.href = '/quote';
                }}
                className="px-8 py-4 bg-niakazi-primary hover:bg-niakazi-secondary text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
              <motion.button
                onClick={() => {
                  window.open('https://wa.me/263778224653', '_blank');
                }}
                className="px-8 py-4 border-2 border-green-500 text-green-600 font-semibold rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}