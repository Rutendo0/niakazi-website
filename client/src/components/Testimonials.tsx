import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Amara Okafor",
      role: "Cultural Educator",
      quote: "Dandemutande has been instrumental in helping me reconnect with my roots and understand the depth of African heritage. The workshops are transformative."
    },
    {
      name: "Kwame Asante",
      role: "Artist",
      quote: "The art exhibitions showcase the incredible diversity and richness of African creativity. I'm proud to be part of this community."
    },
    {
      name: "Fatima Diallo",
      role: "Community Leader",
      quote: "The festivals bring our community together and create lasting memories for our children. It's beautiful to see traditions being preserved."
    }
  ];

  return (
    <section className="py-20 bg-deep-brown text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold mb-6">Community Voices</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from community members about their experiences with African heritage and culture.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-african-gold rounded-full flex items-center justify-center mr-4">
                  <Quote className="text-deep-brown" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-200 leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
