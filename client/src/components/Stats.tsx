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
    <div className="text-4xl md:text-5xl font-space-grotesk font-bold text-niakazi-primary mb-2">
      {count}{suffix}
    </div>
  );
}

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation(0.3);
  
  const stats = [
    {
      end: 6,
      suffix: "+",
      label: "Years of Experience",
      icon: Clock,
      color: "bg-gradient-to-r from-niakazi-primary to-niakazi-secondary",
      delay: 0
    },
    {
      end: 50,
      suffix: "+", 
      label: "Happy Clients",
      icon: Users,
      color: "bg-gradient-to-r from-niakazi-secondary to-niakazi-accent",
      delay: 200
    },
    {
      end: 100,
      suffix: "+",
      label: "Projects Completed", 
      icon: Award,
      color: "bg-gradient-to-r from-niakazi-accent to-niakazi-primary",
      delay: 400
    },
    {
      end: 90,
      suffix: "%",
      label: "Client Satisfaction",
      icon: TrendingUp,
      color: "bg-gradient-to-r from-niakazi-primary to-niakazi-light",
      delay: 600
    }
  ];

  return (
    <section id="stats" className="py-16 sm:py-20 md:py-24 bg-white relative">
      {/* Subtle background elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-50 rounded-full blur-xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-indigo-50 rounded-full blur-lg opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-space-grotesk font-bold text-gray-900 mb-6">
            Our Track Record of <span className="text-niakazi-primary">Excellence</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Years of delivering exceptional ICT solutions across Zimbabwe and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div 
                key={index} 
                className="text-center group relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-niakazi-primary">
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-niakazi-primary transition-all duration-300">
                    <IconComponent className="text-gray-600 group-hover:text-white text-xl sm:text-2xl transition-colors duration-300" />
                  </div>
                  
                  {/* Animated Counter */}
                  <AnimatedCounter 
                    end={stat.end} 
                    suffix={stat.suffix} 
                    isVisible={isVisible}
                    delay={stat.delay}
                  />
                  
                  {/* Label */}
                  <div className="text-gray-600 font-space-grotesk text-sm sm:text-base font-medium group-hover:text-gray-900 transition-colors duration-300">
                    {stat.label}
                  </div>
                  
                  {/* Additional Information - Always Visible */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="text-xs sm:text-sm text-gray-500 font-medium">
                      {index === 0 && "Established expertise serving clients since 2018"}
                      {index === 1 && "Trusted by businesses across Zimbabwe"}
                      {index === 2 && "Successful implementations and deployments"}
                      {index === 3 && "Customer satisfaction and retention rate"}
                    </div>
                  </div>
                </div>
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
          <blockquote className="text-xl md:text-2xl italic text-gray-400 max-w-4xl mx-auto mb-6">
            "NIAKAZI has been instrumental in our digital transformation journey. Their expertise and dedication to excellence is unmatched."
          </blockquote>
          <div className="text-dande-primary font-semibold">
            — Leading Enterprise Client, Zimbabwe
          </div>
        </motion.div>
      </div>
    </section>
  );
}