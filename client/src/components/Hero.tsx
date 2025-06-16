export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-dark-blue to-brand-blue">
      <div className="absolute inset-0 bg-black bg-opacity-20" />
      
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
          Unlock reliable and secure connectivity for your business
        </h1>
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-lg">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-tech-orange rounded-full mr-2"></div>
            Route Diversity
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-tech-orange rounded-full mr-2"></div>
            Quick Turnaround Time
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-tech-orange rounded-full mr-2"></div>
            24hr Network Monitoring
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-tech-orange rounded-full mr-2"></div>
            26+ Years of Experience
          </div>
        </div>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed">
          Count on us for Agile and responsive 24/7 customer support. Powerful and affordable ICT products and services. Access to ICT specialists with deep expertise.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('#services')}
            className="bg-tech-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Discover More
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="border-2 border-white hover:bg-white hover:text-brand-blue text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
}
