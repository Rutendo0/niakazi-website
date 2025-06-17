import { Target, Lightbulb, Heart, Users, Award, Clock } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Our Story Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-dande-dark mb-8">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 font-poppins leading-relaxed mb-6">
                Founded with a vision to bridge the gap between cutting-edge technology and business success, Niakazi has been at the forefront of digital transformation for over a decade. We specialize in delivering comprehensive IT solutions that empower organizations to thrive in an increasingly connected world.
              </p>
              <p className="text-lg text-gray-700 font-poppins leading-relaxed">
                Our expertise spans across connectivity solutions, cloud services, cybersecurity, and enterprise software development. We pride ourselves on understanding each client's unique challenges and delivering tailored solutions that drive measurable results.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl md:text-5xl font-poppins font-bold text-dande-primary mb-2">
                  500+
                </div>
                <div className="text-gray-600 font-poppins">
                  Projects Completed
                </div>
              </div>
              
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl md:text-5xl font-poppins font-bold text-dande-primary mb-2">
                  10+
                </div>
                <div className="text-gray-600 font-poppins">
                  Years Experience
                </div>
              </div>
              
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl md:text-5xl font-poppins font-bold text-dande-primary mb-2">
                  200+
                </div>
                <div className="text-gray-600 font-poppins">
                  Happy Clients
                </div>
              </div>
              
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl md:text-5xl font-poppins font-bold text-dande-primary mb-2">
                  24/7
                </div>
                <div className="text-gray-600 font-poppins">
                  Support
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Foundation Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-poppins font-bold text-dande-dark mb-4">
              Our Foundation
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built on strong principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-white text-2xl" />
              </div>
              <h4 className="text-2xl font-poppins font-bold text-dande-dark mb-4">
                Our Mission
              </h4>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="text-white text-2xl" />
              </div>
              <h4 className="text-2xl font-poppins font-bold text-dande-dark mb-4">
                Our Vision
              </h4>
              <p className="text-gray-700 leading-relaxed">
                To be the leading technology partner that transforms how businesses operate, connect, and succeed in an interconnected world.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white text-2xl" />
              </div>
              <h4 className="text-2xl font-poppins font-bold text-dande-dark mb-4">
                Our Values
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Innovation, integrity, excellence, and client success drive every decision we make and every solution we deliver.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Niakazi Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-poppins font-bold text-dande-dark mb-4">
              Why Choose Niakazi
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that matter
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white text-2xl" />
              </div>
              <h4 className="text-2xl font-poppins font-bold text-dande-dark mb-4">
                Expert Team
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Certified professionals with deep expertise in the latest technologies and industry best practices.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white text-2xl" />
              </div>
              <h4 className="text-2xl font-poppins font-bold text-dande-dark mb-4">
                Proven Track Record
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Successfully delivered 500+ projects across various industries with exceptional results.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-white text-2xl" />
              </div>
              <h4 className="text-2xl font-poppins font-bold text-dande-dark mb-4">
                24/7 Support
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Round-the-clock support and maintenance to ensure your systems run smoothly at all times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}