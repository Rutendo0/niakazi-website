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
            Our Solutions
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
                      // SVG Icons for each service for professional presentation
                      const serviceIcons = {
                        "Dedicated Internet Access": (
                          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                            <defs>
                              <radialGradient id="internetGrad" cx="50%" cy="30%" r="60%">
                                <stop offset="0%" stopColor="hsl(var(--niakazi-primary))" stopOpacity="0.8"/>
                                <stop offset="100%" stopColor="hsl(var(--niakazi-secondary))" stopOpacity="0.3"/>
                              </radialGradient>
                            </defs>
                            <circle cx="50" cy="50" r="35" fill="url(#internetGrad)" stroke="hsl(var(--niakazi-primary))" strokeWidth="2"/>
                            <circle cx="50" cy="50" r="25" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6"/>
                            <circle cx="50" cy="50" r="15" fill="none" stroke="white" strokeWidth="1.5" opacity="0.8"/>
                            <circle cx="50" cy="50" r="3" fill="white"/>
                            <path d="M35 35 L65 65 M65 35 L35 65" stroke="white" strokeWidth="1" opacity="0.4"/>
                          </svg>
                        ),
                        "Fiber Connectivity": (
                          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                            <defs>
                              <linearGradient id="fiberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="hsl(var(--niakazi-primary))"/>
                                <stop offset="100%" stopColor="hsl(var(--niakazi-accent))"/>
                              </linearGradient>
                            </defs>
                            <path d="M10 80 Q30 40 50 50 Q70 60 90 20" stroke="url(#fiberGrad)" strokeWidth="4" fill="none"/>
                            <path d="M10 75 Q30 35 50 45 Q70 55 90 15" stroke="white" strokeWidth="2" fill="none" opacity="0.6"/>
                            <circle cx="10" cy="80" r="4" fill="url(#fiberGrad)"/>
                            <circle cx="90" cy="20" r="4" fill="url(#fiberGrad)"/>
                            <circle cx="50" cy="50" r="6" fill="white" opacity="0.8"/>
                          </svg>
                        ),
                        "SD-WAN Solutions": (
                          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                            <defs>
                              <radialGradient id="wanGrad">
                                <stop offset="0%" stopColor="hsl(var(--niakazi-secondary))"/>
                                <stop offset="100%" stopColor="hsl(var(--niakazi-primary))"/>
                              </radialGradient>
                            </defs>
                            <rect x="20" y="20" width="15" height="10" rx="2" fill="url(#wanGrad)"/>
                            <rect x="65" y="20" width="15" height="10" rx="2" fill="url(#wanGrad)"/>
                            <rect x="20" y="70" width="15" height="10" rx="2" fill="url(#wanGrad)"/>
                            <rect x="65" y="70" width="15" height="10" rx="2" fill="url(#wanGrad)"/>
                            <circle cx="50" cy="50" r="12" fill="url(#wanGrad)"/>
                            <path d="M35 25 L38 50 M62 25 L62 50 M35 75 L38 50 M62 75 L62 50" stroke="white" strokeWidth="2"/>
                          </svg>
                        ),
                        "VSAT Services": (
                          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                            <defs>
                              <linearGradient id="vsatGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="hsl(var(--niakazi-accent))"/>
                                <stop offset="100%" stopColor="hsl(var(--niakazi-secondary))"/>
                              </linearGradient>
                            </defs>
                            <ellipse cx="50" cy="75" rx="25" ry="8" fill="url(#vsatGrad)" opacity="0.6"/>
                            <path d="M25 75 Q50 25 75 75" stroke="url(#vsatGrad)" strokeWidth="3" fill="none"/>
                            <circle cx="50" cy="25" r="8" fill="white"/>
                            <path d="M45 20 L55 20 M45 30 L55 30 M50 15 L50 35" stroke="hsl(var(--niakazi-primary))" strokeWidth="2"/>
                          </svg>
                        ),
                        "Co-Location Services": (
                          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                            <defs>
                              <linearGradient id="coloGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="hsl(var(--niakazi-primary))"/>
                                <stop offset="100%" stopColor="hsl(var(--niakazi-dark))"/>
                              </linearGradient>
                            </defs>
                            <rect x="25" y="20" width="50" height="60" rx="4" fill="url(#coloGrad)"/>
                            <rect x="30" y="30" width="8" height="4" rx="1" fill="white" opacity="0.8"/>
                            <rect x="42" y="30" width="8" height="4" rx="1" fill="white" opacity="0.8"/>
                            <rect x="54" y="30" width="8" height="4" rx="1" fill="white" opacity="0.8"/>
                            <rect x="30" y="40" width="8" height="4" rx="1" fill="white" opacity="0.6"/>
                            <rect x="42" y="40" width="8" height="4" rx="1" fill="white" opacity="0.6"/>
                            <rect x="54" y="40" width="8" height="4" rx="1" fill="white" opacity="0.6"/>
                            <rect x="30" y="50" width="8" height="4" rx="1" fill="white" opacity="0.4"/>
                            <rect x="42" y="50" width="8" height="4" rx="1" fill="white" opacity="0.4"/>
                            <rect x="54" y="50" width="8" height="4" rx="1" fill="white" opacity="0.4"/>
                          </svg>
                        ),
                        "Microsoft Azure": (
                          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                            <defs>
                              <linearGradient id="azureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="hsl(var(--niakazi-primary))"/>
                                <stop offset="100%" stopColor="hsl(var(--niakazi-accent))"/>
                              </linearGradient>
                            </defs>
                            <path d="M20 60 Q30 30 50 35 Q70 40 80 20 Q85 50 75 70 Q50 75 25 65 Z" fill="url(#azureGrad)" opacity="0.8"/>
                            <circle cx="35" cy="45" r="8" fill="white" opacity="0.7"/>
                            <circle cx="55" cy="55" r="6" fill="white" opacity="0.5"/>
                            <circle cx="65" cy="35" r="4" fill="white" opacity="0.9"/>
                          </svg>
                        ),
                        "Microsoft 365": (
                          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                            <defs>
                              <linearGradient id="o365Grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="hsl(var(--niakazi-secondary))"/>
                                <stop offset="100%" stopColor="hsl(var(--niakazi-primary))"/>
                              </linearGradient>
                            </defs>
                            <rect x="20" y="20" width="20" height="20" rx="3" fill="url(#o365Grad)"/>
                            <rect x="45" y="20" width="20" height="20" rx="3" fill="url(#o365Grad)" opacity="0.8"/>
                            <rect x="70" y="20" width="20" height="20" rx="3" fill="url(#o365Grad)" opacity="0.6"/>
                            <rect x="20" y="45" width="20" height="20" rx="3" fill="url(#o365Grad)" opacity="0.8"/>
                            <rect x="45" y="45" width="20" height="20" rx="3" fill="url(#o365Grad)"/>
                            <rect x="70" y="45" width="20" height="20" rx="3" fill="url(#o365Grad)" opacity="0.8"/>
                            <rect x="20" y="70" width="20" height="20" rx="3" fill="url(#o365Grad)" opacity="0.6"/>
                            <rect x="45" y="70" width="20" height="20" rx="3" fill="url(#o365Grad)" opacity="0.8"/>
                            <rect x="70" y="70" width="20" height="20" rx="3" fill="url(#o365Grad)"/>
                          </svg>
                        ),
                        "Oracle Cloud Infrastructure": (
                          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                            <defs>
                              <radialGradient id="oracleGrad">
                                <stop offset="0%" stopColor="hsl(var(--niakazi-accent))"/>
                                <stop offset="100%" stopColor="hsl(var(--niakazi-primary))"/>
                              </radialGradient>
                            </defs>
                            <circle cx="50" cy="50" r="30" fill="none" stroke="url(#oracleGrad)" strokeWidth="6"/>
                            <circle cx="50" cy="50" r="20" fill="none" stroke="url(#oracleGrad)" strokeWidth="4" opacity="0.7"/>
                            <circle cx="50" cy="50" r="10" fill="url(#oracleGrad)" opacity="0.5"/>
                            <path d="M35 35 L65 35 L65 65 L35 65 Z" fill="none" stroke="white" strokeWidth="2" opacity="0.8"/>
                          </svg>
                        ),
                        "Virtual Private Server": (
                          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                            <defs>
                              <linearGradient id="vpsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="hsl(var(--niakazi-primary))"/>
                                <stop offset="100%" stopColor="hsl(var(--niakazi-secondary))"/>
                              </linearGradient>
                            </defs>
                            <rect x="20" y="30" width="60" height="40" rx="6" fill="url(#vpsGrad)"/>
                            <rect x="25" y="35" width="12" height="8" rx="2" fill="white" opacity="0.8"/>
                            <rect x="40" y="35" width="12" height="8" rx="2" fill="white" opacity="0.6"/>
                            <rect x="55" y="35" width="12" height="8" rx="2" fill="white" opacity="0.8"/>
                            <rect x="25" y="50" width="12" height="8" rx="2" fill="white" opacity="0.6"/>
                            <rect x="40" y="50" width="12" height="8" rx="2" fill="white" opacity="0.8"/>
                            <rect x="55" y="50" width="12" height="8" rx="2" fill="white" opacity="0.6"/>
                            <circle cx="50" cy="20" r="6" fill="white" opacity="0.9"/>
                            <path d="M50 14 L50 26" stroke="hsl(var(--niakazi-primary))" strokeWidth="2"/>
                          </svg>
                        ),
                        "Storage Area Network": (
                          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                            <defs>
                              <linearGradient id="sanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="hsl(var(--niakazi-secondary))"/>
                                <stop offset="100%" stopColor="hsl(var(--niakazi-accent))"/>
                              </linearGradient>
                            </defs>
                            <rect x="15" y="25" width="70" height="50" rx="5" fill="url(#sanGrad)"/>
                            <rect x="20" y="35" width="15" height="8" rx="2" fill="white" opacity="0.8"/>
                            <rect x="40" y="35" width="15" height="8" rx="2" fill="white" opacity="0.8"/>
                            <rect x="60" y="35" width="15" height="8" rx="2" fill="white" opacity="0.8"/>
                            <rect x="20" y="50" width="15" height="8" rx="2" fill="white" opacity="0.6"/>
                            <rect x="40" y="50" width="15" height="8" rx="2" fill="white" opacity="0.6"/>
                            <rect x="60" y="50" width="15" height="8" rx="2" fill="white" opacity="0.6"/>
                            <path d="M25 15 L50 25 L75 15" stroke="white" strokeWidth="3" fill="none"/>
                            <circle cx="25" cy="15" r="3" fill="white"/>
                            <circle cx="50" cy="25" r="3" fill="white"/>
                            <circle cx="75" cy="15" r="3" fill="white"/>
                          </svg>
                        )
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
                          {/* Service Visual */}
                          <div className="h-48 bg-gradient-to-br from-niakazi-primary/10 to-niakazi-secondary/10 relative overflow-hidden flex items-center justify-center">
                            <div className="w-32 h-32 opacity-80">
                              {serviceIcons[item.name as keyof typeof serviceIcons] || (
                                <div className="w-full h-full bg-gradient-to-br from-niakazi-primary to-niakazi-secondary rounded-2xl flex items-center justify-center">
                                  <ItemIcon className="text-white text-4xl" />
                                </div>
                              )}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
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