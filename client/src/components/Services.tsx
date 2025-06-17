import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Network, Cloud, Shield, Server, Wrench, Star, Globe, Wifi, Zap, Database, Users, Phone } from "lucide-react";

export default function Services() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const mainServices = [
    {
      title: "Connectivity Solutions",
      icon: Network,
      color: "bg-blue-500",
      description: "Robust and reliable connectivity solutions to keep your business connected and productive.",
      subServices: [
        {
          title: "Dedicated Internet Access",
          icon: Globe,
          description: "High-speed, reliable internet connectivity with guaranteed bandwidth and uptime SLAs.",
          features: ["Scalable bandwidth", "99.9% uptime guarantee", "24/7 technical support", "Symmetric speeds"]
        },
        {
          title: "Fiber Connectivity",
          icon: Wifi,
          description: "Ultra-fast fiber optic connections for businesses requiring high-performance networking.",
          features: ["Low latency", "High bandwidth capacity", "Redundant connections", "Future-proof technology"]
        },
        {
          title: "SD-WAN Solutions",
          icon: Zap,
          description: "Software-defined wide area network solutions for optimized network performance.",
          features: ["Centralized management", "Cost optimization", "Enhanced security", "Application prioritization"]
        },
        {
          title: "VSAT Services",
          icon: Database,
          description: "Satellite communication solutions for remote locations and backup connectivity.",
          features: ["Global coverage", "Reliable backup", "Remote site connectivity", "Disaster recovery"]
        }
      ]
    },
    {
      title: "Cloud Services",
      icon: Cloud,
      color: "bg-indigo-500",
      description: "Comprehensive cloud solutions to modernize your infrastructure and enhance business agility.",
      subServices: [
        {
          title: "Co-Location Services",
          icon: Server,
          description: "Secure data center facilities with enterprise-grade infrastructure and 24/7 monitoring.",
          features: ["Tier 3 data centers", "Physical security", "Power redundancy", "Climate control"]
        },
        {
          title: "Microsoft Azure",
          icon: Cloud,
          description: "Complete Azure cloud solutions including migration, deployment, and ongoing management.",
          features: ["Cloud migration", "Virtual machines", "Storage solutions", "Backup & recovery"]
        },
        {
          title: "Microsoft 365",
          icon: Users,
          description: "Full Microsoft 365 deployment and management for enhanced productivity and collaboration.",
          features: ["Email & calendar", "Office applications", "Teams collaboration", "SharePoint & OneDrive"]
        },
        {
          title: "Oracle Cloud Infrastructure",
          icon: Database,
          description: "Enterprise-grade Oracle cloud services for mission-critical applications and databases.",
          features: ["Database services", "Compute instances", "Enterprise applications", "High availability"]
        },
        {
          title: "Virtual Private Server",
          icon: Server,
          description: "Scalable VPS solutions with dedicated resources and full administrative control.",
          features: ["Dedicated resources", "Root access", "Custom configurations", "Scalable performance"]
        },
        {
          title: "Storage Area Network",
          icon: Database,
          description: "High-performance SAN solutions for centralized storage and data management.",
          features: ["Centralized storage", "High IOPS", "Data redundancy", "Backup integration"]
        }
      ]
    },
    {
      title: "Security Solutions",
      icon: Shield,
      color: "bg-red-500",
      description: "Comprehensive cybersecurity solutions to protect your business from evolving threats.",
      subServices: [
        {
          title: "Vulnerability Assessment & Penetration Testing",
          icon: Shield,
          description: "Comprehensive security assessments to identify and address potential vulnerabilities in your systems.",
          features: ["Network security testing", "Application security", "Infrastructure assessment", "Compliance reporting"]
        },
        {
          title: "Cyber Security Awareness Training",
          icon: Users,
          description: "Employee training programs to build a strong security culture within your organization.",
          features: ["Phishing simulation", "Security best practices", "Incident response training", "Regular updates"]
        },
        {
          title: "Endpoint Security",
          icon: Shield,
          description: "Advanced endpoint protection to secure all devices connected to your network.",
          features: ["Antivirus & anti-malware", "Device encryption", "Access control", "Real-time monitoring"]
        },
        {
          title: "Security Operations Center",
          icon: Database,
          description: "24/7 security monitoring and incident response services to protect your business.",
          features: ["Threat detection", "Incident response", "Security analytics", "Compliance monitoring"]
        }
      ]
    },
    {
      title: "Hardware & Software",
      icon: Server,
      color: "bg-green-500",
      description: "Enterprise-grade hardware and software solutions to power your business operations.",
      subServices: [
        {
          title: "ICT Hardware",
          icon: Server,
          description: "Complete range of enterprise-grade hardware solutions including servers, workstations, and networking equipment.",
          features: ["Servers & workstations", "Networking equipment", "Storage systems", "Enterprise laptops"]
        },
        {
          title: "Software Solutions",
          icon: Database,
          description: "Licensed software packages and custom application development for business optimization.",
          features: ["Enterprise software licensing", "Custom application development", "System integration", "Software maintenance"]
        },
        {
          title: "Data Center Equipment",
          icon: Server,
          description: "Professional data center hardware including racks, UPS systems, and cooling solutions.",
          features: ["Server racks & cabinets", "UPS & power systems", "Cooling solutions", "Cable management"]
        },
        {
          title: "Mobile Device Management",
          icon: Phone,
          description: "Complete mobile device lifecycle management including procurement, deployment, and support.",
          features: ["Device procurement", "Mobile security", "App management", "Device lifecycle"]
        }
      ]
    },
    {
      title: "Training & Managed Services",
      icon: Wrench,
      color: "bg-purple-500",
      description: "Professional IT training, certification programs, and comprehensive managed service solutions.",
      subServices: [
        {
          title: "Managed Services",
          icon: Wrench,
          description: "Complete IT infrastructure management allowing you to focus on core business activities.",
          features: ["24/7 monitoring & support", "Proactive maintenance", "Performance optimization", "Service level agreements"]
        }
      ]
    },
    {
      title: "Value Added Services",
      icon: Star,
      color: "bg-orange-500",
      description: "Additional services that enhance your IT capabilities and maximize your technology investments.",
      subServices: [
        {
          title: "Technical Support",
          icon: Phone,
          description: "Expert technical assistance and troubleshooting services for all your IT systems.",
          features: ["Remote diagnostics", "On-site support", "Emergency response", "Knowledge base access"]
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-dande-dark mb-6">
            Transform Your Business with
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            Discover comprehensive technology services designed to optimize operations, enhance security, and drive sustainable growth for your organization.
          </p>
        </motion.div>

        <div className="space-y-20">
          {mainServices.map((service, serviceIndex) => {
            const ServiceIcon = service.icon;
            return (
              <motion.div 
                key={serviceIndex}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
              >
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mr-6`}>
                      <ServiceIcon className="text-white text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-poppins font-bold text-dande-dark mb-2">
                        {service.title}
                      </h3>
                      <p className="text-lg text-gray-600 max-w-3xl">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {service.subServices.map((subService, subIndex) => {
                      const SubServiceIcon = subService.icon;
                      return (
                        <motion.div 
                          key={subIndex}
                          className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 shadow-md">
                              <SubServiceIcon className="text-dande-primary text-xl" />
                            </div>
                            <h4 className="text-lg font-poppins font-semibold text-dande-dark">
                              {subService.title}
                            </h4>
                          </div>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {subService.description}
                          </p>
                          <ul className="space-y-2">
                            {subService.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                                <div className="w-2 h-2 bg-dande-primary rounded-full mr-3 flex-shrink-0"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="mt-16 bg-dande-primary rounded-3xl p-12 text-center text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Zap className="w-16 h-16 mx-auto mb-6 text-white" />
          <h3 className="text-3xl font-poppins font-bold mb-4">Ready to transform your business?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your technology needs today
          </p>
          <motion.button 
            className="bg-white text-dande-primary px-8 py-4 rounded-full font-poppins font-semibold text-lg hover:shadow-xl transition-all duration-300"
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
        </motion.div>
      </div>
    </section>
  );
}