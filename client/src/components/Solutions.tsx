import { Network, Database, Lock, Smartphone } from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      icon: Network,
      title: "Enterprise Connectivity",
      description: "High-performance network solutions with redundancy and 99.9% uptime guarantee",
      stats: "500+ Mbps",
      color: "bg-blue-600"
    },
    {
      icon: Database,
      title: "Cloud Infrastructure",
      description: "Scalable cloud platforms with enterprise-grade security and compliance",
      stats: "99.99% Uptime",
      color: "bg-green-600"
    },
    {
      icon: Lock,
      title: "Cybersecurity Suite",
      description: "Advanced threat protection with 24/7 monitoring and incident response",
      stats: "24/7 Protection",
      color: "bg-orange-600"
    },
    {
      icon: Smartphone,
      title: "Managed IT Services",
      description: "Complete IT management with proactive monitoring and expert support",
      stats: "Expert Support",
      color: "bg-indigo-600"
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Information Section Before Solutions */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Comprehensive ICT Solutions
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Powering Your Digital Future
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From enterprise connectivity to advanced cybersecurity, we provide comprehensive ICT solutions 
            that enable businesses to thrive in the digital age. Our expertise spans across multiple domains, 
            ensuring your technology infrastructure is robust, secure, and scalable.
          </p>
          
          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 mb-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Grade</h3>
              <p className="text-gray-600">Built for large-scale operations with enterprise-level reliability and performance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First</h3>
              <p className="text-gray-600">Advanced security measures protecting your data and infrastructure 24/7</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">Flexible infrastructure that grows with your business needs</p>
            </div>
          </div>
        </div>
        
        {/* Solutions Title */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Connectivity Solutions</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of connectivity and IT solutions designed to transform your business operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:scale-105">
                <div className={`w-16 h-16 ${solution.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow`}>
                  <IconComponent className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{solution.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-center">{solution.description}</p>
                <div className="text-blue-600 font-bold text-lg text-center">{solution.stats}</div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of businesses that trust NIAKAZI for their ICT infrastructure needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}