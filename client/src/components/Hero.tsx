export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dande-dark to-dande-primary">
      <div className="absolute inset-0 bg-black bg-opacity-20" />
      
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto py-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-8 leading-tight">
          Unlock reliable and secure connectivity for your business
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-3 h-3 bg-white rounded-full mx-auto mb-2"></div>
            <span className="text-sm md:text-base font-poppins">Route Diversity</span>
          </div>
          <div className="text-center">
            <div className="w-3 h-3 bg-white rounded-full mx-auto mb-2"></div>
            <span className="text-sm md:text-base font-poppins">Quick Turnaround Time</span>
          </div>
          <div className="text-center">
            <div className="w-3 h-3 bg-white rounded-full mx-auto mb-2"></div>
            <span className="text-sm md:text-base font-poppins">24hr Network Monitoring</span>
          </div>
          <div className="text-center">
            <div className="w-3 h-3 bg-white rounded-full mx-auto mb-2"></div>
            <span className="text-sm md:text-base font-poppins">26+ Years of Experience</span>
          </div>
        </div>

        <div className="text-center mb-12">
          <button
            onClick={() => scrollToSection('#services')}
            className="bg-dande-dark text-white px-12 py-4 rounded-full font-poppins font-semibold text-lg hover:bg-opacity-90 transition-all inline-block"
            style={{ backgroundColor: '#1f2b56' }}
          >
            Discover More
          </button>
        </div>

        <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-poppins">
          Count on us for Agile and responsive 24/7 customer support. Powerful and affordable ICT products and services. Access to ICT specialists with deep expertise.
        </p>
      </div>
    </section>
  );
}
