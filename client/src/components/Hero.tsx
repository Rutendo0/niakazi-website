import { motion } from "framer-motion";
import { useParallax } from "../hooks/useScrollAnimation";

export default function Hero() {
  const offsetY = useParallax();
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dande-dark to-dande-primary overflow-hidden">
      {/* Animated background elements with parallax */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-20"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      />
      
      {/* Floating geometric shapes for visual interest */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border-2 border-white/20 rounded-full"
        animate={{ 
          rotate: 360,
          y: [0, -20, 0]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <motion.div
        className="absolute bottom-40 right-20 w-16 h-16 bg-white/10 rotate-45"
        animate={{ 
          rotate: [45, 405],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto py-20"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Unlock reliable and secure connectivity for your business
        </motion.h1>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            "Route Diversity",
            "Quick Turnaround Time", 
            "24hr Network Monitoring",
            "26+ Years of Experience"
          ].map((feature, index) => (
            <motion.div 
              key={feature}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
            >
              <motion.div 
                className="w-3 h-3 bg-white rounded-full mx-auto mb-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              />
              <span className="text-sm md:text-base font-poppins">{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.button
            onClick={() => scrollToSection('#services')}
            className="bg-dande-dark text-white px-12 py-4 rounded-full font-poppins font-semibold text-lg hover:bg-opacity-90 transition-all inline-block"
            style={{ backgroundColor: '#1f2b56' }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Discover More
          </motion.button>
        </motion.div>

        <motion.p 
          className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-poppins"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Count on us for Agile and responsive 24/7 customer support. Powerful and affordable ICT products and services. Access to ICT specialists with deep expertise.
        </motion.p>
      </motion.div>
    </section>
  );
}