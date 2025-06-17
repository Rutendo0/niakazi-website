import { Network, Database, Lock, Smartphone } from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      icon: Network,
      title: "Enterprise Connectivity",
      description: "High-performance network solutions with redundancy and 99.9% uptime guarantee",
      stats: "500+ Mbps",
      color: "bg-brand-blue"
    },
    {
      icon: Database,
      title: "Cloud Infrastructure",
      description: "Scalable cloud platforms with enterprise-grade security and compliance",
      stats: "99.99% Uptime",
      color: "bg-success-green"
    },
    {
      icon: Lock,
      title: "Cybersecurity Suite",
      description: "Advanced threat protection with 24/7 monitoring and incident response",
      stats: "24/7 Protection",
      color: "bg-tech-orange"
    },
    {
      icon: Smartphone,
      title: "Managed IT Services",
      description: "Complete IT management with proactive monitoring and expert support",
      stats: "Expert Support",
      color: "bg-brand-dark-blue"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-heading font-bold text-brand-dark-blue mb-6">Transforming Industries</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We deliver cutting-edge ICT solutions that drive digital transformation across various industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className={`w-20 h-20 ${solution.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow`}>
                  <IconComponent className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-brand-dark-blue mb-4">{solution.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{solution.description}</p>
                <div className="text-brand-blue font-bold text-lg">{solution.stats}</div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 bg-brand-light-blue rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-heading font-bold text-brand-dark-blue mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that trust NIAKAZI for their ICT infrastructure needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-blue hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Get Free Consultation
            </button>
            <button className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}