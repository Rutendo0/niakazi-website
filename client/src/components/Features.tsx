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
    <section className="py-32 bg-gradient-to-br from-niakazi-dark via-gray-400 to-niakazi-secondary relative overflow-hidden" ref={ref}>
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="aurora-bg"></div>
        <div className="aurora-bg"></div>
      </div>

      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-niakazi-accent/20 rounded-full blur-xl float-slow"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-niakazi-primary/20 rounded-full blur-xl float-medium"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-niakazi-light/30 rounded-full blur-lg float-fast"></div>

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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space-grotesk">
            Why Choose
            <span className="block text-gradient-niakazi text-shimmer">NIAKAZI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We deliver enterprise-grade ICT solutions with unmatched reliability, security, and support
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              <div className="glass-card bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 h-full card-hover-lift group-hover:bg-white/15 transition-all duration-300">
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-niakazi-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-niakazi-primary/10 to-niakazi-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-niakazi-primary via-niakazi-secondary to-niakazi-accent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl"></div>
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
          <div className="glass-card bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Join hundreds of satisfied clients who trust NIAKAZI for their ICT solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3 bg-gradient-to-r from-niakazi-primary to-niakazi-secondary text-white font-semibold rounded-xl hover:from-niakazi-secondary hover:to-niakazi-accent transition-all duration-300 glow-on-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
              <motion.button
                onClick={() => {
                  const element = document.querySelector('#products');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3 border-2 border-niakazi-accent text-niakazi-accent font-semibold rounded-xl hover:bg-niakazi-accent hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Solutions
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}