import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Services() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const services = [
    {
      title: "Connectivity",
      link: "/connectivity",
      icon: "🌐"
    },
    {
      title: "Cloud",
      link: "/cloud",
      icon: "☁️"
    },
    {
      title: "Security", 
      link: "/security",
      icon: "🔒"
    },
    {
      title: "Hardware & Software",
      link: "/hardware",
      icon: "💻"
    },
    {
      title: "Training & managed services",
      link: "/training",
      icon: "📚"
    },
    {
      title: "Value Added Services",
      link: "/value-added",
      icon: "⭐"
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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
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
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-dande-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-dande-dark/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-poppins font-bold text-dande-dark mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Solutions
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-dande-primary to-dande-dark mx-auto"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative bg-cover bg-center h-48 md:h-56 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
              style={{
                backgroundImage: `linear-gradient(135deg, ${index % 2 === 0 ? '#1291C3' : '#1f2b56'}, ${index % 2 === 0 ? '#1f2b56' : '#1291C3'})`
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-white font-poppins font-semibold text-sm md:text-base leading-tight group-hover:text-opacity-90 transition-all duration-300">
                  <a href={service.link} className="hover:underline block">
                    {service.title}
                  </a>
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}