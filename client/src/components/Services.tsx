import { motion } from "framer-motion";
import { Network, Cloud, Shield, Server, Wrench, Star, Globe, Wifi, Zap, Database, Users, Phone, CheckCircle, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      title: "  Software Development Solutions",
      icon: Network,
      color: "from-niakazi-primary to-niakazi-secondary",
      description: "Custom software solutions to streamline your business processes and enhance productivity.",
      items: [
        {
          name: "Web Development",
          icon: Globe,
          desc: "Full-stack web development services to create responsive, high-performance websites and applications.",
          features: ["Responsive design", "E-commerce solutions", "Content management systems", "API integration"]
        },
        {
          name: "Mobile App Development", 
          icon: Wifi,
          desc: "Mobile application development for iOS and Android platforms with a focus on user experience.",
          features: ["Native & hybrid apps", "UI/UX design", "App store deploymentt", "Maintenance & support"]
        },
        {
          name: "Artificial Intelligence ",
          icon: Zap,
          desc: "AI-driven solutions to automate processes, enhance decision-making, and improve customer experiences.",
          features: ["Machine learning", "Natural language processing", "Predictive analytics", "Chatbot development"]
        },
        {
          name: "Custom Software Development",
          icon: Database,
          desc: "Tailored software solutions to meet specific business needs and integrate with existing systems.",
          features: ["Business process automation", "Legacy system integration", "Custom application development", "Scalable architecture"]
        }
      ]
    },
    {
      title: "Cloud Services",
      icon: Cloud,
      color: "from-niakazi-secondary to-niakazi-accent",
      description: "Comprehensive cloud solutions to modernize your infrastructure and enhance business agility.",
      items: [
        {
          name: "System Integration",
          icon: Server,
          desc: "Seamless integration of disparate systems to ensure smooth data flow and operational efficiency.",
          features: ["API integration", "Data synchronization", "Legacy system integration", "Real-time data processing"]
        },
        {
          name: "Microsoft Azure",
          icon: Cloud,
          desc: "Enterprise-grade cloud services on Microsoft Azure for scalable and secure applications including administration and deployment.",
          features: ["Virtual machines", "App services", "Database solutions", "Scalable storage"]
        },
        {
          name: "Microsoft 365",
          icon: Users,
          desc: "Full Microsoft 365 deployment and management for enhanced productivity and collaboration.",
          features: ["Email & calendar", "Office applications", "Teams collaboration", "SharePoint & OneDrive"]
        },
        {
          name: "Licensing Support",
          icon: Database,
          desc: "Comprehensive licensing support for Microsoft products and services to ensure compliance and optimization.",
          features: ["License management", "Compliance audits", "Cost optimization", "Support & training"]
        },
        
       
      ]
    },
    {
      title: "Security Solutions",
      icon: Shield,
      color: "bg-gradient-to-r from-niakazi-accent to-niakazi-primary",
      description: "Comprehensive cybersecurity solutions to protect your business from evolving threats.",
      items: [
        
        {
          name: "Cyber Security Solutions",
          icon: Users,
          desc: "Empower your team with essential cybersecurity knowledge to prevent threats and enhance security posture.Being in partnership with Asian distributors for postquantum (PQTunnel) .",
          features: ["Phishing simulations", "Security best practices", "Incident response training", "Ongoing education"]
        },
        {
          name: "Endpoint Security",
          icon: Shield,
          desc: "Advanced endpoint protection to secure all devices connected to your network.",
          features: ["Antivirus & anti-malware", "Device encryption", "Access control", "Real-time monitoring"]
        },
       
      ]
    },
    {
      title: "Hardware Solutions",
      icon: Server,
      color: "bg-gradient-to-r from-niakazi-primary to-niakazi-light",
      description: "Enterprise-grade hardware and software solutions to power your business operations.",
      items: [
        {
          name: "High Quality Hikvision Systems",
          icon: Server,
          desc: "Advanced surveillance systems for enhanced security and monitoring of your premises.",
          features: ["CCTV cameras", "Access control systems", "Video management software", "Remote monitoring"]
        },
        {
          name: "ICT Hardware",
          icon: Database,
          desc: "Comprehensive ICT hardware solutions.",
          features: ["professional systems", "Reliable"]
        },
        
      ]
    },
   
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="aurora-bg"></div>
      <div className="aurora-bg"></div>
      
      {/* Floating geometric shapes */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-niakazi-primary/10 rounded-2xl rotate-12"
        animate={{ 
          y: [0, -20, 0],
          rotate: [12, 22, 12]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-32 right-20 w-16 h-16 bg-niakazi-secondary/10 rounded-full"
        animate={{ 
          y: [0, -15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Enhanced header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-8 py-4 rounded-full bg-blue-100 text-blue-800 font-semibold mb-8 text-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-5 h-5 mr-2" />
            Our Solutions
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Business with{" "}
            <span className="text-blue-600">Premium ICT Solutions</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            Discover our comprehensive range of solutions designed to enhance your business operations, boost productivity, and ensure security in the digital age.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden tilt-card magnetic-area glass-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -10 }}
              >
                <div className="p-8 md:p-12">
                  {/* Service Header */}
                  <div className="flex items-center mb-8">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mr-6`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ServiceIcon className="text-white text-2xl breathe" />
                    </motion.div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-space-grotesk font-bold text-niakazi-dark mb-2 neon-glow">
                        {service.title}
                      </h3>
                      <p className="text-lg text-gray-600 max-w-3xl">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Service Items Grid with Images */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {service.items.map((item, itemIndex) => {
                      const ItemIcon = item.icon;
                      // Professional service images using high-quality stock photos
                      const serviceImages = {
                        "Web Development": "https://wallpaperaccess.com/full/2109962.jpg",
                        "Mobile App Development": "https://canadian.agency/wp-content/uploads/2023/11/Image.jpg",
                        "Artificial Intelligence ": "https://wallpapercave.com/wp/wp4532952.jpg",
                        "Custom Software Development": "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop&q=80",
                        "System Integration": "https://swi-solutions.com/wp-content/uploads/2022/01/AdobeStock_335667473-1536x874.jpg",
                        "Microsoft Azure": "https://wallpapercave.com/wp/wp3734338.jpg",
                        "Microsoft 365": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop&q=80",
                        "Licensing Support": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&q=80",
                        "Cyber Security Solutions": "https://www.electric.coop/wp-content/uploads/2020/09/getty-doe-cyber-1024x683.jpg",
                        "Endpoint Security": "https://phoenixnap.com/blog/wp-content/uploads/2023/01/endpoint-security-fb.jpg",
                        "High Quality Hikvision Systems": "https://media.takealot.com/covers_tsins/57522682/57522682-1-zoom.jpeg",
                        "ICT Hardware": "https://appath.com/wp-content/uploads/2015/02/Ecommerce-blog-18.jpg"
                      };
                      
                      return (
                        <motion.div
                          key={itemIndex}
                          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all tilt-card modern-card border border-gray-100"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -8 }}
                        >
                          {/* Service Image */}
                          <div className="h-48 relative overflow-hidden">
                            <img 
                              src={serviceImages[item.name as keyof typeof serviceImages] || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&q=80"}
                              alt={item.name}
                              className="w-full h-full object-contain bg-gray-50 transition-transform duration-300 hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          </div>
                          
                          <div className="p-6">
                            <h4 className="text-xl font-space-grotesk font-semibold text-niakazi-dark mb-3">{item.name}</h4>
                            <p className="text-gray-600 mb-4 leading-relaxed">{item.desc}</p>
                            
                            <div className="space-y-2">
                              {item.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                                  <CheckCircle className="w-4 h-4 text-niakazi-primary mr-2 flex-shrink-0" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                            
                             </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
}