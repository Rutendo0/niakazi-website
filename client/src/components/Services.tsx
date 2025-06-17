import { motion } from "framer-motion";
import { Network, Cloud, Shield, Server, Wrench, Star, Globe, Wifi, Zap, Database, Users, Phone, CheckCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Connectivity Solutions",
      icon: Network,
      color: "from-blue-500 to-blue-600",
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
      color: "from-indigo-500 to-indigo-600",
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
      color: "from-red-500 to-red-600",
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
      color: "from-green-500 to-green-600",
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
      color: "from-purple-500 to-purple-600",
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
      color: "from-orange-500 to-orange-600",
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
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-dande-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-dande-dark/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-dande-primary/10 text-dande-primary font-semibold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Star className="w-5 h-5 mr-2" />
            Our Services
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-dande-dark mb-6">
            Transform Your Business with{" "}
            <span className="gradient-text">Premium ICT Solutions</span>
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
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-8 md:p-12">
                  {/* Service Header */}
                  <div className="flex items-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mr-6`}>
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

                  {/* Service Items */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {service.items.map((item, itemIndex) => {
                      const ItemIcon = item.icon;
                      return (
                        <motion.div
                          key={itemIndex}
                          className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 shadow-md">
                              <ItemIcon className="text-dande-primary text-xl" />
                            </div>
                            <h4 className="text-lg font-poppins font-semibold text-dande-dark">
                              {item.name}
                            </h4>
                          </div>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {item.desc}
                          </p>
                          <ul className="space-y-2">
                            {item.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                                <CheckCircle className="w-4 h-4 text-dande-primary mr-2 flex-shrink-0" />
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

        {/* Call to Action */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-dande-primary to-dande-dark rounded-3xl p-12 text-center text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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