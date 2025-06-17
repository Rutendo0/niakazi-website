import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useState } from "react";
import { ChevronRight, Star, ShoppingCart } from "lucide-react";

export default function Products() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [activeCategory, setActiveCategory] = useState("ERP Systems");

  const productCategories: Record<string, Array<{
    title: string;
    price: string;
    image: string;
    description: string;
  }>> = {
    "ERP Systems": [
      {
        title: "ERPNext/Odoo Setup",
        price: "US$400.00",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        description: "Complete ERP system implementation with full customization and training"
      },
      {
        title: "MS Dynamics/Odoo Enterprise",
        price: "US$1,000.00",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
        description: "Advanced enterprise resource planning with Microsoft integration"
      },
      {
        title: "Dedicated SLA Monthly",
        price: "US$100.00",
        image: "https://static1.bigstockphoto.com/8/0/4/large1500/408051863.jpg",
        description: "Monthly service level agreement with guaranteed response times"
      },
      {
        title: "Shared Monthly IT Support",
        price: "US$30.00",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
        description: "Shared IT support services with expert technical assistance"
      }
    ],
    "AI Chatbots": [
      {
        title: "Chatbot Setup",
        price: "US$150.00",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop",
        description: "AI chatbot implementation with natural language processing"
      },
      {
        title: "Chatbot Integration",
        price: "US$100.00",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
        description: "Seamless integration with existing systems and workflows"
      },
      {
        title: "Chatbot Monthly Maintenance",
        price: "US$30.00",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop",
        description: "Ongoing maintenance, updates and performance optimization"
      }
    ],
    "CCTV Security": [
      {
        title: "4 Channel DVR System",
        price: "US$290.00",
        image: "https://technest.ae/wp-content/uploads/2022/12/Hikvision-4-Channel-Full-HD-CCTV-Cameras-DVR-Kit.jpeg",
        description: "4 Channel DVR with 2 high-definition CCTV cameras and remote monitoring"
      },
      {
        title: "4 Channel DVR Kit",
        price: "US$410.00",
        image: "https://www.areaspy.co.ke/wp-content/uploads/2020/06/CCTV-4-CHANNEL-COMPLETE-KIT-1024x792.jpg",
        description: "Complete 4 CCTV camera kit with 500GB storage and mobile app access"
      },
      {
        title: "8 Channel DVR System",
        price: "US$630.00",
        image:"https://diyprotect.co.za/wp-content/uploads/2023/01/8CH-Camera-Kit.jpg",
        description: "8 CCTV cameras with 1TB HD storage and advanced analytics"
      },
      {
        title: "16 Channel DVR System",
        price: "US$1,260.00",
        image: "https://www.kiosbarcode.com/wp-content/uploads/2022/12/hikvision-16-channel-1009x1024.png",
        description: "Enterprise 16 CCTV cameras with 2TB HD storage and AI detection"
      }
    ],
    "Custom Software": [
      {
        title: "MVP Build",
        price: "US$500.00",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
        description: "Minimum viable product development"
      },
      {
        title: "Full Solution",
        price: "US$1,500.00",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
        description: "Complete custom software solution"
      },
      {
        title: "USSD Add-ons",
        price: "US$150.00",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
        description: "USSD integration and add-ons"
      },
      {
        title: "Support and Hosting",
        price: "US$40.00",
        image: "https://www.hashcashconsultants.com/img/bigdata/infrastructure-setup.jpg",
        description: "Monthly support and hosting services"
      }
    ],
    "Payroll & HR": [
      {
        title: "Payroll Setup",
        price: "US$150.00",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
        description: "Complete payroll system setup"
      },
      {
        title: "30 or less staff",
        price: "US$30.00",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
        description: "Payroll management for small teams"
      },
      {
        title: "31 to 100 staff",
        price: "US$60.00",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
        description: "Payroll management for medium teams"
      },
      {
        title: "Biometric add-ons",
        price: "US$250.00",
        image: "https://www.aspiresys.com/education-software-development-services/img/su-2.jpg",
        description: "Biometric integration for attendance"
      },
      {
        title: "Review Tools add-ons",
        price: "US$150.00",
        image: "https://www.marketing91.com/wp-content/uploads/2020/02/Performance-Management-System.jpg",
        description: "Performance review and assessment tools"
      }
    ],
    "Process Automation": [
      {
        title: "Complex Process",
        price: "US$150.00",
        image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=300&fit=crop",
        description: "Advanced robotic process automation"
      },
      {
        title: "Simple Bot",
        price: "US$50.00",
        image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=400&h=300&fit=crop",
        description: "Basic automation bot setup"
      },
      {
        title: "Optional Support and Maintenance",
        price: "US$25.00",
        image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop",
        description: "Monthly support for automation systems"
      }
    ],
    "Websites": [
      {
        title: "Website Starter Site",
        price: "US$150.00",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
        description: "Basic business website development"
      },
      {
        title: "Website Business Pro",
        price: "US$500.00",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
        description: "Professional business website with advanced features"
      },
      {
        title: "eCommerce add-on",
        price: "US$150.00",
        image: "https://instaco.ae/wp-content/uploads/2023/09/E-commerce-Business-in-Dubai-1024x683.jpeg",
        description: "Online store functionality integration"
      },
      {
        title: "Hosting +SSL",
        price: "US$15.00",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
        description: "Monthly hosting with SSL certificate"
      }
    ]
  };

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
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="products" className="py-32 bg-gradient-to-br from-gray-50 via-white to-niakazi-light/20 relative overflow-hidden" ref={ref}>
      {/* Enhanced background effects */}
      <div className="aurora-bg"></div>
      <div className="aurora-bg"></div>
      
      {/* Floating geometric shapes */}
      <motion.div 
        className="absolute top-20 right-20 w-20 h-20 bg-niakazi-primary/10 rounded-2xl rotate-12"
        animate={{ 
          y: [0, -20, 0],
          rotate: [12, 22, 12]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-32 left-20 w-16 h-16 bg-niakazi-secondary/10 rounded-full"
        animate={{ 
          y: [0, -15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full animated-gradient-border glass-card text-niakazi-primary font-semibold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Star className="w-5 h-5 mr-2" />
            Our Products
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-space-grotesk font-bold text-niakazi-dark mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Premium ICT{" "}
            <span className="text-gradient-niakazi">Products & Solutions</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our comprehensive range of technology products designed to enhance your business operations and drive digital transformation.
          </motion.p>

        </motion.div>

        {/* Category Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {Object.keys(productCategories).map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-space-grotesk font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-niakazi-primary text-white'
                  : 'bg-white text-niakazi-dark hover:bg-niakazi-primary hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          key={activeCategory}
        >
          {productCategories[activeCategory as keyof typeof productCategories]?.map((product, index) => (
            <motion.div
              key={`${activeCategory}-${index}`}
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -10, rotateY: 5 }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <motion.div 
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Star className="w-4 h-4 text-yellow-500" />
                </motion.div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-dande-dark mb-2 font-poppins group-hover:text-dande-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 font-poppins">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-dande-primary font-poppins">
                    {product.price}
                  </span>
                  <motion.button
                    className="bg-dande-primary text-white p-2 rounded-full hover:bg-dande-dark transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.button
            className="bg-gradient-to-r from-dande-primary to-dande-dark text-white px-8 py-4 rounded-full font-poppins font-semibold text-lg hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            View All Products
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}