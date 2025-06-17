import { Clock, Users, Award, HeartHandshake } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Clock,
      title: "5+ Years of Experience",
      description: "Over two decades of delivering reliable ICT solutions across Zimbabwe and Africa.",
      stat: "5+"
    },
    {
      icon: Users,
      title: "24/7 Customer Support",
      description: "Round-the-clock technical support and monitoring to ensure business continuity.",
      stat: "24/7"
    },
    {
      icon: Award,
      title: "90.9% Uptime Guarantee",
      description: "Industry-leading network reliability with comprehensive SLA commitments.",
      stat: "90.9%"
    },
    {
      icon: HeartHandshake,
      title: "50+ Satisfied Clients",
      description: "Trusted by businesses across multiple industries for critical ICT infrastructure.",
      stat: "50+"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-brand-dark-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-heading font-bold mb-6">Why Choose NIAKAZI?</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Your trusted ICT solutions partner with a proven track record of delivering excellence and reliability.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-tech-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-white text-2xl" />
                </div>
                <div className="text-4xl font-heading font-bold text-tech-orange mb-2">{feature.stat}</div>
                <h3 className="text-xl font-heading font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-2xl font-heading font-bold text-tech-orange mb-2">Route Diversity</h4>
              <p className="text-gray-200">Multiple network paths ensure uninterrupted connectivity</p>
            </div>
            <div>
              <h4 className="text-2xl font-heading font-bold text-tech-orange mb-2">Quick Turnaround</h4>
              <p className="text-gray-200">Rapid deployment and implementation of solutions</p>
            </div>
            <div>
              <h4 className="text-2xl font-heading font-bold text-tech-orange mb-2">Expert Team</h4>
              <p className="text-gray-200">Certified ICT specialists with deep technical expertise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}