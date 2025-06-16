import { Target, Eye, Award } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To provide reliable, innovative ICT solutions that empower businesses to thrive in the digital economy",
      color: "text-brand-blue"
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To be the leading ICT solutions provider in Zimbabwe and across Africa, driving digital transformation",
      color: "text-tech-orange"
    },
    {
      icon: Award,
      title: "Values",
      description: "Excellence, reliability, innovation, and customer-centricity in everything we do",
      color: "text-success-green"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-5xl font-heading font-bold text-brand-dark-blue mb-8">About Dandemutande</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                With over 26 years of experience, Dandemutande is Zimbabwe's trusted ICT solutions provider, delivering reliable connectivity, cloud services, cybersecurity, and comprehensive IT infrastructure to businesses across Africa.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We understand that in today's digital landscape, robust ICT infrastructure is not just an advantage—it's essential for business survival and growth. Our team of certified specialists works tirelessly to ensure your technology foundation is secure, scalable, and always performing at its best.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-brand-light-blue px-4 py-2 rounded-lg">
                  <span className="font-semibold text-brand-dark-blue">26+ Years Experience</span>
                </div>
                <div className="bg-brand-light-blue px-4 py-2 rounded-lg">
                  <span className="font-semibold text-brand-dark-blue">500+ Clients</span>
                </div>
                <div className="bg-brand-light-blue px-4 py-2 rounded-lg">
                  <span className="font-semibold text-brand-dark-blue">99.9% Uptime</span>
                </div>
              </div>
            </div>
            <div className="bg-tech-gray rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold text-brand-dark-blue mb-6">Your Reliable ICT Solutions Partner</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-tech-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Agile and responsive 24/7 customer support</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-tech-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Powerful and affordable ICT products and services</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-tech-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Access to ICT specialists with deep expertise</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-tech-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Proven track record across multiple industries</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-tech-gray rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <IconComponent className={`text-5xl ${value.color} mb-6 mx-auto`} />
                  <h3 className="text-2xl font-heading font-bold text-brand-dark-blue mb-4">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
