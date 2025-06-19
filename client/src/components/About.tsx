import { motion } from "framer-motion";
import { 
  Target, 
  Lightbulb, 
  Network, 
  Database, 
  Lock, 
  Smartphone 
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function AboutSolutionsPage() {
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();
  const { ref: solutionsRef, isVisible: solutionsVisible } = useScrollAnimation();

  const solutions = [
    {
      icon: Network,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs, enhancing efficiency and innovation",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Database,
      title: "Cloud Solutions",
      description: "Cloud solutions which provide administrative support and deployment for your applications",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Lock,
      title: "Cybersecurity Suite",
      description: "Comprehensive cybersecurity services to protect your data and systems from threats",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Smartphone,
      title: "ICT Hardware",
      description: "High-quality ICT hardware solutions.",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* About Section - Starting with Solutions */}
      <section id="about" className="py-20" ref={solutionsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Information Section Before Solutions */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={solutionsVisible ? { opacity: 1, y: 0 } : {}}
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
              Our ICT solutions are designed to transform your business operations, enhance productivity, and drive innovation.
            </p>
            
            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mt-16 mb-20">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={solutionsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensing Support</h3>
                <p className="text-gray-600">We offer you the support you need</p>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={solutionsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First</h3>
                <p className="text-gray-600">Advanced security measures protecting your data 24/7</p>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={solutionsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Software Solutions</h3>
                <p className="text-gray-600">Flexible solutions that grows with your business needs</p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Solutions Title */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={solutionsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Solutions</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive suite of ICT solutions designed to empower your business with the latest technology and expertise.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={solutionsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <motion.div 
                  key={index} 
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group h-full"
                  initial={{ opacity: 0, y: 30 }}
                  animate={solutionsVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <IconComponent className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{solution.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-center">{solution.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      {/* Mission & Vision Section */}
<section className="py-16 relative overflow-hidden border-t-0" ref={aboutRef}>
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-lg mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={aboutVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={aboutVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Our <span className="text-blue-600">Purpose</span> & <span className="text-green-600">Vision</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-sm">
          Driven by purpose, guided by vision - discover what motivates us to deliver excellence
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={aboutVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            To empower businesses across Zimbabwe with innovative ICT solutions that drive growth, 
            efficiency, and competitive advantage in the digital economy.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={aboutVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            To be Zimbabwe's leading technology partner, transforming how businesses operate, 
            connect, and succeed in an increasingly digital world.
          </p>
        </motion.div>
      </div>
    </motion.div>
  </div>
</section>
    </div>
  );
}