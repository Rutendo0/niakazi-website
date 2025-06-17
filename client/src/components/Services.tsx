import { motion } from "framer-motion";
import { Network, Cloud, Shield, Server, Wrench, Star, Globe, Wifi, Zap, Database, Users, Phone, CheckCircle, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      title: "Connectivity Solutions",
      icon: Network,
      color: "from-niakazi-primary to-niakazi-secondary",
      description: "Robust and reliable connectivity solutions to keep your business connected and productive.",
      items: [
        {
          name: "Dedicated Internet Access",
          icon: Globe,
          desc: "High-speed, reliable internet connectivity with guaranteed bandwidth and uptime SLAs.",
          features: ["Scalable bandwidth", "99.9% uptime guarantee", "24/7 technical support", "Symmetric speeds"]
        },
        {
          name: "Fiber Connectivity", 
          icon: Wifi,
          desc: "Ultra-fast fiber optic connections for businesses requiring high-performance networking.",
          features: ["Low latency", "High bandwidth capacity", "Redundant connections", "Future-proof technology"]
        },
        {
          name: "SD-WAN Solutions",
          icon: Zap,
          desc: "Software-defined wide area network solutions for optimized network performance.",
          features: ["Centralized management", "Cost optimization", "Enhanced security", "Application prioritization"]
        },
        {
          name: "VSAT Services",
          icon: Database,
          desc: "Satellite communication solutions for remote locations and backup connectivity.",
          features: ["Global coverage", "Reliable backup", "Remote site connectivity", "Disaster recovery"]
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
          name: "Co-Location Services",
          icon: Server,
          desc: "Secure data center facilities with enterprise-grade infrastructure and 24/7 monitoring.",
          features: ["Tier 3 data centers", "Physical security", "Power redundancy", "Climate control"]
        },
        {
          name: "Microsoft Azure",
          icon: Cloud,
          desc: "Complete Azure cloud solutions including migration, deployment, and ongoing management.",
          features: ["Cloud migration", "Virtual machines", "Storage solutions", "Backup & recovery"]
        },
        {
          name: "Microsoft 365",
          icon: Users,
          desc: "Full Microsoft 365 deployment and management for enhanced productivity and collaboration.",
          features: ["Email & calendar", "Office applications", "Teams collaboration", "SharePoint & OneDrive"]
        },
        {
          name: "Oracle Cloud Infrastructure",
          icon: Database,
          desc: "Enterprise-grade Oracle cloud services for mission-critical applications and databases.",
          features: ["Database services", "Compute instances", "Enterprise applications", "High availability"]
        },
        {
          name: "Virtual Private Server",
          icon: Server,
          desc: "Scalable VPS solutions with dedicated resources and full administrative control.",
          features: ["Dedicated resources", "Root access", "Custom configurations", "Scalable performance"]
        },
        {
          name: "Storage Area Network",
          icon: Database,
          desc: "High-performance SAN solutions for centralized storage and data management.",
          features: ["Centralized storage", "High IOPS", "Data redundancy", "Backup integration"]
        }
      ]
    },
    {
      title: "Security Solutions",
      icon: Shield,
      color: "bg-gradient-to-r from-niakazi-accent to-niakazi-primary",
      description: "Comprehensive cybersecurity solutions to protect your business from evolving threats.",
      items: [
        {
          name: "Vulnerability Assessment & Penetration Testing",
          icon: Shield,
          desc: "Comprehensive security assessments to identify and address potential vulnerabilities in your systems.",
          features: ["Network security testing", "Application security", "Infrastructure assessment", "Compliance reporting"]
        },
        {
          name: "Cyber Security Awareness Training",
          icon: Users,
          desc: "Employee training programs to build a strong security culture within your organization.",
          features: ["Phishing simulation", "Security best practices", "Incident response training", "Regular updates"]
        },
        {
          name: "Endpoint Security",
          icon: Shield,
          desc: "Advanced endpoint protection to secure all devices connected to your network.",
          features: ["Antivirus & anti-malware", "Device encryption", "Access control", "Real-time monitoring"]
        },
        {
          name: "Security Operations Center",
          icon: Database,
          desc: "24/7 security monitoring and incident response services to protect your business.",
          features: ["Threat detection", "Incident response", "Security analytics", "Compliance monitoring"]
        }
      ]
    },
    {
      title: "Hardware & Software",
      icon: Server,
      color: "bg-gradient-to-r from-niakazi-primary to-niakazi-light",
      description: "Enterprise-grade hardware and software solutions to power your business operations.",
      items: [
        {
          name: "ICT Hardware",
          icon: Server,
          desc: "Complete range of enterprise-grade hardware solutions including servers, workstations, and networking equipment.",
          features: ["Servers & workstations", "Networking equipment", "Storage systems", "Enterprise laptops"]
        },
        {
          name: "Software Solutions",
          icon: Database,
          desc: "Licensed software packages and custom application development for business optimization.",
          features: ["Enterprise software licensing", "Custom application development", "System integration", "Software maintenance"]
        },
        {
          name: "Data Center Equipment",
          icon: Server,
          desc: "Professional data center hardware including racks, UPS systems, and cooling solutions.",
          features: ["Server racks & cabinets", "UPS & power systems", "Cooling solutions", "Cable management"]
        },
        {
          name: "Mobile Device Management",
          icon: Phone,
          desc: "Complete mobile device lifecycle management including procurement, deployment, and support.",
          features: ["Device procurement", "Mobile security", "App management", "Device lifecycle"]
        }
      ]
    },
    {
      title: "Training & Managed Services",
      icon: Wrench,
      color: "from-niakazi-secondary to-niakazi-primary",
      description: "Professional IT training, certification programs, and comprehensive managed service solutions.",
      items: [
        {
          name: "Managed Services",
          icon: Wrench,
          desc: "Complete IT infrastructure management allowing you to focus on core business activities.",
          features: ["24/7 monitoring & support", "Proactive maintenance", "Performance optimization", "Service level agreements"]
        }
      ]
    },
    {
      title: "Value Added Services",
      icon: Star,
      color: "from-niakazi-accent to-niakazi-secondary",
      description: "Additional services that enhance your IT capabilities and maximize your technology investments.",
      items: [
        {
          name: "Technical Support",
          icon: Phone,
          desc: "Expert technical assistance and troubleshooting services for all your IT systems.",
          features: ["Remote diagnostics", "On-site support", "Emergency response", "Knowledge base access"]
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-br from-gray-50 via-white to-niakazi-light/20 relative overflow-hidden">
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
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-8 py-4 rounded-full animated-gradient-border glass-card text-niakazi-primary font-semibold mb-8 text-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-5 h-5 mr-2 text-shimmer" />
            Our Services
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-niakazi-dark mb-6">
            Transform Your Business with{" "}
            <span className="text-gradient-niakazi">Premium ICT Solutions</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            Discover comprehensive technology services designed to optimize operations, enhance security, and drive sustainable growth for your organization across Zimbabwe and beyond.
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
                      const serviceImages = {
                        "Dedicated Internet Access": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
                        "Fiber Connectivity": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop",
                        "SD-WAN Solutions": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
                        "VSAT Services": "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=250&fit=crop",
                        "Co-Location Services": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
                        "Cloud Migration": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
                        "Backup & Recovery": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop",
                        "Microsoft 365": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
                        "Cybersecurity Assessment": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
                        "Firewall Management": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
                        "Endpoint Protection": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
                        "Compliance Solutions": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
                        "Networking Equipment": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
                        "Compute Hardware": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
                        "Software Solutions": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
                        "Data Center Equipment": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
                        "Mobile Device Management": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
                        "Managed Services": "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop",
                        "Technical Support": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop"
                      };
                      
                      return (
                        <motion.div
                          key={itemIndex}
                          className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all tilt-card modern-card"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -8 }}
                        >
                          {/* Service Image */}
                          <div className="h-48 bg-gradient-to-br from-niakazi-primary/10 to-niakazi-secondary/10 relative overflow-hidden">
                            <img 
                              src={serviceImages[item.name as keyof typeof serviceImages] || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop"}
                              alt={item.name}
                              className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            <div className="absolute top-4 left-4">
                              <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                <ItemIcon className="w-6 h-6 text-niakazi-primary" />
                              </div>
                            </div>
                          </div>
                          
                          <div className="p-6">
                            <h4 className="text-xl font-space-grotesk font-semibold text-niakazi-dark mb-3">{item.name}</h4>
                            <p className="text-gray-600 mb-4 leading-relaxed">{item.desc}</p>
                            
                            <div className="space-y-2">
                              {item.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                                  <CheckCircle className="w-4 h-4 text-niakazi-primary mr-2 flex-shrink-0" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                            
                            <motion.button 
                              className="mt-4 text-niakazi-primary font-medium flex items-center hover:text-niakazi-secondary transition-colors"
                              whileHover={{ x: 4 }}
                            >
                              Learn More <ArrowRight className="w-4 h-4 ml-1" />
                            </motion.button>
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

        {/* Call to Action */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-niakazi-primary to-niakazi-secondary rounded-3xl p-12 text-center text-white relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-niakazi-dark/20 to-transparent"></div>
          <div className="relative z-10">
            <Zap className="w-16 h-16 mx-auto mb-6 text-white neon-glow" />
            <h3 className="text-3xl font-space-grotesk font-bold mb-4">Ready to transform your business?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss your technology needs today
            </p>
            <motion.button
              className="bg-white text-niakazi-primary px-8 py-4 rounded-full font-space-grotesk font-semibold text-lg hover:shadow-xl transition-all duration-300 btn-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}