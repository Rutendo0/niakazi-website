import { Wifi, Cloud, Shield, HardDrive, GraduationCap, Settings } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Wifi,
      title: "Connectivity",
      description: "Reliable internet connectivity solutions including dedicated internet access, fibre, SDWAN, and VSAT services for businesses of all sizes.",
      features: ["Dedicated Internet Access", "Fibre Connectivity", "SDWAN Solutions", "VSAT Services"]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Comprehensive cloud infrastructure and services to modernize your business operations and enhance scalability.",
      features: ["Co-Location Services", "Microsoft Azure", "Microsoft 365", "Oracle Cloud Infrastructure"]
    },
    {
      icon: Shield,
      title: "Security",
      description: "Advanced cybersecurity solutions to protect your business from evolving digital threats and ensure data integrity.",
      features: ["Cyber Security Assessment", "Threat Protection", "Security Monitoring", "Compliance Solutions"]
    },
    {
      icon: HardDrive,
      title: "Hardware & Software",
      description: "Complete ICT hardware and software solutions tailored to meet your business requirements and technical specifications.",
      features: ["Enterprise Hardware", "Software Licensing", "System Integration", "Technical Support"]
    },
    {
      icon: GraduationCap,
      title: "Training & Managed Services",
      description: "Professional training programs and managed services to enhance your team's capabilities and operational efficiency.",
      features: ["Cyber Security Training", "Managed IT Services", "Technical Training", "Consultation Services"]
    },
    {
      icon: Settings,
      title: "Value Added Services",
      description: "Additional ICT services and solutions designed to optimize your technology infrastructure and business processes.",
      features: ["System Optimization", "Network Monitoring", "Maintenance Services", "Strategic Planning"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-tech-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-heading font-bold text-brand-dark-blue mb-6">Our Solutions</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive ICT solutions designed to empower your business with reliable connectivity, advanced security, and cutting-edge technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-brand-blue rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-brand-dark-blue">{service.title}</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-tech-orange rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}