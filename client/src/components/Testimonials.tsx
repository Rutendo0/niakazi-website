import { motion } from "framer-motion";
import { Quote, Star, Building2, Globe, Shield } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  const testimonials = [
    {
      name: "James Mutindi",
      role: "IT Director",
      company: "Zimbabwe Banking Corporation",
      quote: "Dandemutande transformed our entire network infrastructure. Their 24/7 support and expertise in cloud migration saved us months of downtime. Outstanding service delivery.",
      rating: 5,
      avatar: "JM",
      industry: "Banking & Finance"
    },
    {
      name: "Sarah Ncube",
      role: "CTO",
      company: "Harare Medical Center",
      quote: "The security solutions implemented by Dandemutande protected us from multiple cyber threats. Their cybersecurity training program educated our entire staff effectively.",
      rating: 5,
      avatar: "SN",
      industry: "Healthcare"
    },
    {
      name: "Michael Chikwanha",
      role: "Operations Manager",
      company: "Zimbabwe Mining Group",
      quote: "From VSAT connectivity to our remote mining sites to complete data center setup - Dandemutande delivered beyond expectations. Truly reliable ICT partners.",
      rating: 5,
      avatar: "MC",
      industry: "Mining & Resources"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-dande-dark to-dande-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="testimonial-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testimonial-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Quote className="w-5 h-5 mr-2" />
            Client Success Stories
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6">
            Trusted by Leading{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              Organizations
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover how we've helped businesses across Zimbabwe achieve their technology goals with reliable ICT solutions.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="group"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote className="w-12 h-12 text-white" />
                </div>

                {/* Rating stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 1 + index * 0.2 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial content */}
                <blockquote className="text-white/95 leading-relaxed mb-6 text-lg">
                  "{testimonial.quote}"
                </blockquote>

                {/* Client info */}
                <div className="flex items-center">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-white/20 to-white/30 rounded-full flex items-center justify-center mr-4 font-bold text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-white/70 text-sm">{testimonial.role}</p>
                    <div className="flex items-center mt-1">
                      <Building2 className="w-3 h-3 text-white/60 mr-1" />
                      <span className="text-white/80 text-xs">{testimonial.company}</span>
                    </div>
                  </div>
                </div>

                {/* Industry badge */}
                <div className="absolute bottom-4 right-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-white/20 text-white/80 text-xs font-medium">
                    <Globe className="w-3 h-3 mr-1" />
                    {testimonial.industry}
                  </span>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <Shield className="w-5 h-5 mr-2" />
            Join Our Success Stories
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
