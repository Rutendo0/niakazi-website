import { motion } from "framer-motion";
import { Network, Database, Lock, Smartphone } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Solutions() {
  const { ref, isVisible } = useScrollAnimation();

  const solutions = [
    {
      icon: Network,
      title: "Enterprise Connectivity",
      description: "High-performance network solutions with redundancy and 99.9% uptime guarantee",
      stats: "500+ Mbps",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Database,
      title: "Cloud Infrastructure",
      description: "Scalable cloud platforms with enterprise-grade security and compliance",
      stats: "99.99% Uptime",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Lock,
      title: "Cybersecurity Suite",
      description: "Advanced threat protection with 24/7 monitoring and incident response",
      stats: "24/7 Protection",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Smartphone,
      title: "Managed IT Services",
      description: "Complete IT management with proactive monitoring and expert support",
      stats: "Expert Support",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Information Section Before Solutions */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-semibold mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Comprehensive ICT Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powering Your Digital Future
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From enterprise connectivity to advanced cybersecurity, we provide comprehensive ICT solutions 
            that enable businesses to thrive in the digital age. Our expertise spans across multiple domains, 
            ensuring your technology infrastructure is robust, secure, and scalable.
          </p>
          
          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 mb-20">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Grade</h3>
              <p className="text-gray-600">Built for large-scale operations with enterprise-level reliability and performance</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First</h3>
              <p className="text-gray-600">Advanced security measures protecting your data and infrastructure 24/7</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">Flexible infrastructure that grows with your business needs</p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Solutions Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Solutions</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of connectivity and IT solutions designed to transform your business operations.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group h-full"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <IconComponent className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{solution.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-center">{solution.description}</p>
                <div className="text-blue-600 font-bold text-lg text-center">{solution.stats}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}