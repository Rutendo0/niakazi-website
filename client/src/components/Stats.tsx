import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useState, useEffect } from "react";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

// Custom hook for counting animation
function useCountUp(end: number, isVisible: boolean, duration: number = 2000) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, isVisible, duration]);
  
  return count;
}

// Animated counter component
function AnimatedCounter({ end, suffix, isVisible, delay = 0 }: {
  end: number;
  suffix: string;
  isVisible: boolean;
  delay?: number;
}) {
  const [shouldStart, setShouldStart] = useState(false);
  const count = useCountUp(end, shouldStart);
  
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShouldStart(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);
  
  return (
    <motion.div
      className="text-4xl md:text-6xl font-poppins font-bold text-dande-primary mb-2"
      initial={{ scale: 0 }}
      animate={isVisible ? { scale: 1 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000, type: "spring", stiffness: 200 }}
    >
      {count}{suffix}
    </motion.div>
  );
}

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation(0.3);
  
  const stats = [
    {
      end: 26,
      suffix: "+",
      label: "Years of Experience",
      icon: Clock,
      color: "from-blue-500 to-blue-600",
      delay: 0
    },
    {
      end: 500,
      suffix: "+", 
      label: "Happy Clients",
      icon: Users,
      color: "from-green-500 to-green-600",
      delay: 200
    },
    {
      end: 1000,
      suffix: "+",
      label: "Projects Completed", 
      icon: Award,
      color: "from-purple-500 to-purple-600",
      delay: 400
    },
    {
      end: 99,
      suffix: "%",
      label: "Client Satisfaction",
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600",
      delay: 600
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-dande-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-dande-dark/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
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
            <TrendingUp className="w-5 h-5 mr-2" />
            Our Achievements
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-dande-dark mb-6">
            Proven Track Record of{" "}
            <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Over two decades of delivering exceptional ICT solutions across Zimbabwe and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Icon */}
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <IconComponent className="text-white text-2xl" />
                  </motion.div>
                  
                  {/* Animated Counter */}
                  <AnimatedCounter 
                    end={stat.end} 
                    suffix={stat.suffix} 
                    isVisible={isVisible}
                    delay={stat.delay}
                  />
                  
                  {/* Label */}
                  <motion.div 
                    className="text-gray-600 font-poppins text-sm md:text-base font-medium"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    {stat.label}
                  </motion.div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-dande-primary/5 to-dande-dark/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional testimonial section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <blockquote className="text-xl md:text-2xl italic text-gray-700 max-w-4xl mx-auto mb-6">
            "Dandemutande has been instrumental in our digital transformation journey. Their expertise and dedication to excellence is unmatched."
          </blockquote>
          <div className="text-dande-primary font-semibold">
            — Leading Enterprise Client, Zimbabwe
          </div>
        </motion.div>
      </div>
    </section>
  );
}