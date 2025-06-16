export default function Services() {
  const services = [
    {
      title: "Connectivity",
      link: "/connectivity"
    },
    {
      title: "Cloud",
      link: "/cloud"
    },
    {
      title: "Security", 
      link: "/security"
    },
    {
      title: "Hardware & Software",
      link: "/hardware"
    },
    {
      title: "Training & managed services",
      link: "/training"
    },
    {
      title: "Value Added Services",
      link: "/value-added"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-dande-dark mb-6">Our Solutions</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-cover bg-center h-40 md:h-48 rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
              style={{
                backgroundImage: `linear-gradient(45deg, ${index % 2 === 0 ? '#1291C3' : '#1f2b56'}, ${index % 2 === 0 ? '#1f2b56' : '#1291C3'})`
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
              <div className="relative h-full flex items-center justify-center p-4">
                <h3 className="text-white text-center font-poppins font-semibold text-sm md:text-base leading-tight">
                  <a href={service.link} className="hover:underline">
                    {service.title}
                  </a>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}