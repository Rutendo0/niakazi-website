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
        image: "data:image/svg+xml,%3Csvg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='erpGrad' x1='0%' y1='0%' x2='100%' y2='100%'%3E%3Cstop offset='0%' stop-color='%230066FF'/%3E%3Cstop offset='100%' stop-color='%230040CC'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23erpGrad)'/%3E%3Crect x='50' y='50' width='300' height='200' rx='10' fill='white' opacity='0.9'/%3E%3Crect x='70' y='80' width='60' height='40' rx='5' fill='%230066FF' opacity='0.8'/%3E%3Crect x='150' y='80' width='60' height='40' rx='5' fill='%230066FF' opacity='0.6'/%3E%3Crect x='230' y='80' width='60' height='40' rx='5' fill='%230066FF' opacity='0.8'/%3E%3Crect x='70' y='140' width='120' height='80' rx='5' fill='%230066FF' opacity='0.3'/%3E%3Crect x='210' y='140' width='80' height='80' rx='5' fill='%230066FF' opacity='0.4'/%3E%3C/svg%3E",
        description: "Complete ERP system implementation with full customization and training"
      },
      {
        title: "MS Dynamics/Odoo Enterprise",
        price: "US$1,000.00",
        image: "data:image/svg+xml,%3Csvg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='dynamicsGrad' x1='0%' y1='0%' x2='100%' y2='100%'%3E%3Cstop offset='0%' stop-color='%23FF6B35'/%3E%3Cstop offset='100%' stop-color='%23F7931E'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23dynamicsGrad)'/%3E%3Ccircle cx='200' cy='150' r='80' fill='white' opacity='0.9'/%3E%3Ccircle cx='200' cy='150' r='50' fill='%23FF6B35' opacity='0.8'/%3E%3Crect x='170' y='120' width='60' height='60' rx='5' fill='white' opacity='0.7'/%3E%3C/svg%3E",
        description: "Advanced enterprise resource planning with Microsoft integration"
      },
      {
        title: "Dedicated SLA Monthly",
        price: "US$100.00",
        image: "data:image/svg+xml,%3Csvg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='slaGrad' x1='0%' y1='0%' x2='100%' y2='100%'%3E%3Cstop offset='0%' stop-color='%2300D084'/%3E%3Cstop offset='100%' stop-color='%2300A86B'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23slaGrad)'/%3E%3Cpath d='M100 150 L150 100 L250 100 L300 150 L250 200 L150 200 Z' fill='white' opacity='0.9'/%3E%3Ccircle cx='200' cy='150' r='30' fill='%2300D084'/%3E%3C/svg%3E",
        description: "Monthly service level agreement with guaranteed response times"
      },
      {
        title: "Shared Monthly IT Support",
        price: "US$30.00",
        image: "data:image/svg+xml,%3Csvg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='supportGrad' x1='0%' y1='0%' x2='100%' y2='100%'%3E%3Cstop offset='0%' stop-color='%236366F1'/%3E%3Cstop offset='100%' stop-color='%234F46E5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23supportGrad)'/%3E%3Ccircle cx='150' cy='100' r='30' fill='white' opacity='0.8'/%3E%3Ccircle cx='250' cy='100' r='30' fill='white' opacity='0.8'/%3E%3Ccircle cx='200' cy='200' r='40' fill='white' opacity='0.9'/%3E%3Cline x1='150' y1='130' x2='200' y2='160' stroke='white' stroke-width='3'/%3E%3Cline x1='250' y1='130' x2='200' y2='160' stroke='white' stroke-width='3'/%3E%3C/svg%3E",
        description: "Shared IT support services with expert technical assistance"
      }
    ],
    "AI Chatbots": [
      {
        title: "Chatbot Setup",
        price: "US$150.00",
        image: "data:image/svg+xml,%3Csvg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='aiGrad' x1='0%' y1='0%' x2='100%' y2='100%'%3E%3Cstop offset='0%' stop-color='%23A855F7'/%3E%3Cstop offset='100%' stop-color='%238B5CF6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23aiGrad)'/%3E%3Ccircle cx='200' cy='120' r='50' fill='white' opacity='0.9'/%3E%3Ccircle cx='185' cy='105' r='8' fill='%23A855F7'/%3E%3Ccircle cx='215' cy='105' r='8' fill='%23A855F7'/%3E%3Cpath d='M180 135 Q200 150 220 135' stroke='%23A855F7' stroke-width='3' fill='none'/%3E%3Crect x='80' y='200' width='80' height='40' rx='20' fill='white' opacity='0.8'/%3E%3Crect x='240' y='200' width='80' height='40' rx='20' fill='white' opacity='0.8'/%3E%3C/svg%3E",
        description: "AI chatbot implementation with natural language processing"
      },
      {
        title: "Chatbot Integration",
        price: "US$100.00",
        image: "data:image/svg+xml,%3Csvg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='integrationGrad' x1='0%' y1='0%' x2='100%' y2='100%'%3E%3Cstop offset='0%' stop-color='%2306B6D4'/%3E%3Cstop offset='100%' stop-color='%230891B2'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23integrationGrad)'/%3E%3Crect x='50' y='80' width='80' height='60' rx='10' fill='white' opacity='0.9'/%3E%3Crect x='270' y='80' width='80' height='60' rx='10' fill='white' opacity='0.9'/%3E%3Ccircle cx='200' cy='150' r='25' fill='white' opacity='0.9'/%3E%3Cline x1='130' y1='110' x2='175' y2='140' stroke='white' stroke-width='4'/%3E%3Cline x1='225' y1='140' x2='270' y2='110' stroke='white' stroke-width='4'/%3E%3C/svg%3E",
        description: "Seamless integration with existing systems and workflows"
      },
      {
        title: "Chatbot Monthly Maintenance",
        price: "US$30.00",
        image: "data:image/svg+xml,%3Csvg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='maintenanceGrad' x1='0%' y1='0%' x2='100%' y2='100%'%3E%3Cstop offset='0%' stop-color='%2310B981'/%3E%3Cstop offset='100%' stop-color='%23059669'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23maintenanceGrad)'/%3E%3Ccircle cx='200' cy='150' r='60' fill='white' opacity='0.9'/%3E%3Cpath d='M200 120 L220 140 L200 160 L180 140 Z' fill='%2310B981'/%3E%3Cpath d='M170 150 L190 130 L210 150 L230 130' stroke='%2310B981' stroke-width='3' fill='none'/%3E%3C/svg%3E",
        description: "Ongoing maintenance, updates and performance optimization"
      }
    ],
    "CCTV Security": [
      {
        title: "4 Channel DVR System",
        price: "US$290.00",
        image: "data:image/svg+xml,%3Csvg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='cctvGrad' x1='0%' y1='0%' x2='100%' y2='100%'%3E%3Cstop offset='0%' stop-color='%23DC2626'/%3E%3Cstop offset='100%' stop-color='%23B91C1C'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23cctvGrad)'/%3E%3Crect x='150' y='100' width='100' height='60' rx='10' fill='white' opacity='0.9'/%3E%3Ccircle cx='200' cy='130' r='20' fill='%23DC2626'/%3E%3Ccircle cx='200' cy='130' r='10' fill='white'/%3E%3Crect x='80' y='200' width='60' height='40' rx='5' fill='white' opacity='0.8'/%3E%3Crect x='260' y='200' width='60' height='40' rx='5' fill='white' opacity='0.8'/%3E%3C/svg%3E",
        description: "4 Channel DVR with 2 high-definition CCTV cameras and remote monitoring"
      },
      {
        title: "4 Channel DVR Kit",
        price: "US$410.00",
        image: "data:image/svg+xml,%3Csvg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='dvrGrad' x1='0%' y1='0%' x2='100%' y2='100%'%3E%3Cstop offset='0%' stop-color='%23F59E0B'/%3E%3Cstop offset='100%' stop-color='%23D97706'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23dvrGrad)'/%3E%3Crect x='100' y='80' width='200' height='80' rx='10' fill='white' opacity='0.9'/%3E%3Ccircle cx='140' cy='120' r='15' fill='%23F59E0B'/%3E%3Ccircle cx='200' cy='120' r='15' fill='%23F59E0B'/%3E%3Ccircle cx='260' cy='120' r='15' fill='%23F59E0B'/%3E%3Crect x='120' y='200' width='160' height='40' rx='5' fill='white' opacity='0.8'/%3E%3C/svg%3E",
        description: "Complete 4 CCTV camera kit with 500GB storage and mobile app access"
      },
      {
        title: "8 Channel DVR System",
        price: "US$630.00",
        image: "data:image/svg+xml,%3Csvg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='dvr8Grad' x1='0%' y1='0%' x2='100%' y2='100%'%3E%3Cstop offset='0%' stop-color='%237C3AED'/%3E%3Cstop offset='100%' stop-color='%235B21B6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23dvr8Grad)'/%3E%3Crect x='50' y='60' width='300' height='120' rx='15' fill='white' opacity='0.9'/%3E%3Ccircle cx='100' cy='100' r='12' fill='%237C3AED'/%3E%3Ccircle cx='150' cy='100' r='12' fill='%237C3AED'/%3E%3Ccircle cx='200' cy='100' r='12' fill='%237C3AED'/%3E%3Ccircle cx='250' cy='100' r='12' fill='%237C3AED'/%3E%3Ccircle cx='300' cy='100' r='12' fill='%237C3AED'/%3E%3Ccircle cx='125' cy='140' r='12' fill='%237C3AED'/%3E%3Ccircle cx='175' cy='140' r='12' fill='%237C3AED'/%3E%3Ccircle cx='225' cy='140' r='12' fill='%237C3AED'/%3E%3Crect x='100' y='200' width='200' height='50' rx='5' fill='white' opacity='0.8'/%3E%3C/svg%3E",
        description: "8 CCTV cameras with 1TB HD storage and advanced analytics"
      },
      {
        title: "16 Channel DVR System",
        price: "US$1,260.00",
        image: "data:image/svg+xml,%3Csvg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='dvr16Grad' x1='0%' y1='0%' x2='100%' y2='100%'%3E%3Cstop offset='0%' stop-color='%23059669'/%3E%3Cstop offset='100%' stop-color='%23047857'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23dvr16Grad)'/%3E%3Crect x='30' y='40' width='340' height='160' rx='20' fill='white' opacity='0.9'/%3E%3Cg%3E%3Ccircle cx='80' cy='80' r='10' fill='%23059669'/%3E%3Ccircle cx='120' cy='80' r='10' fill='%23059669'/%3E%3Ccircle cx='160' cy='80' r='10' fill='%23059669'/%3E%3Ccircle cx='200' cy='80' r='10' fill='%23059669'/%3E%3Ccircle cx='240' cy='80' r='10' fill='%23059669'/%3E%3Ccircle cx='280' cy='80' r='10' fill='%23059669'/%3E%3Ccircle cx='320' cy='80' r='10' fill='%23059669'/%3E%3Ccircle cx='360' cy='80' r='10' fill='%23059669'/%3E%3C/g%3E%3Cg%3E%3Ccircle cx='80' cy='120' r='10' fill='%23059669'/%3E%3Ccircle cx='120' cy='120' r='10' fill='%23059669'/%3E%3Ccircle cx='160' cy='120' r='10' fill='%23059669'/%3E%3Ccircle cx='200' cy='120' r='10' fill='%23059669'/%3E%3Ccircle cx='240' cy='120' r='10' fill='%23059669'/%3E%3Ccircle cx='280' cy='120' r='10' fill='%23059669'/%3E%3Ccircle cx='320' cy='120' r='10' fill='%23059669'/%3E%3Ccircle cx='360' cy='120' r='10' fill='%23059669'/%3E%3C/g%3E%3Crect x='80' y='220' width='240' height='50' rx='5' fill='white' opacity='0.8'/%3E%3C/svg%3E",
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
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
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
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
        description: "Biometric integration for attendance"
      },
      {
        title: "Review Tools add-ons",
        price: "US$150.00",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
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
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
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