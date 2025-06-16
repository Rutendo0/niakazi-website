export default function About() {
  return (
    <section id="about" className="py-16 bg-dande-light-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-dande-dark mb-8">
            Your reliable ICT solutions partner
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-poppins font-bold text-dande-primary mb-2">
                26+
              </div>
              <div className="text-dande-text font-poppins">
                Years of Experience
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-poppins font-bold text-dande-primary mb-2">
                500+
              </div>
              <div className="text-dande-text font-poppins">
                Happy Clients
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-poppins font-bold text-dande-primary mb-2">
                24/7
              </div>
              <div className="text-dande-text font-poppins">
                Support Available
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="text-lg text-dande-text font-poppins leading-relaxed max-w-3xl mx-auto">
              Count on us for Agile and responsive 24/7 customer support. Powerful and affordable ICT products and services. 
              Access to ICT specialists with deep expertise.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-poppins font-bold text-dande-dark mb-6">
              Why Choose Dandemutande?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-dande-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-dande-text font-poppins">Route Diversity for uninterrupted connectivity</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-dande-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-dande-text font-poppins">Quick Turnaround Time for rapid deployment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-dande-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-dande-text font-poppins">24hr Network Monitoring and support</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-dande-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-dande-text font-poppins">Proven track record with 26+ years experience</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-dande-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-dande-text font-poppins">Comprehensive ICT solutions under one roof</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-dande-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-dande-text font-poppins">Expert team of certified ICT specialists</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
