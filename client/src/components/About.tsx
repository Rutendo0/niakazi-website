import { Heart, Users, GraduationCap } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Preserve",
      description: "Safeguarding cultural traditions for future generations",
      color: "text-sunset-orange"
    },
    {
      icon: Users,
      title: "Connect",
      description: "Building bridges between communities and cultures",
      color: "text-african-gold"
    },
    {
      icon: GraduationCap,
      title: "Educate",
      description: "Sharing knowledge and wisdom through learning",
      color: "text-earth-brown"
    }
  ];

  return (
    <section id="about" className="py-20 bg-warm-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-display font-bold text-deep-brown mb-8">About Dandemutande</h2>
          <p className="text-xl text-earth-brown leading-relaxed mb-8">
            Dandemutande Africa is dedicated to preserving, celebrating, and sharing the rich cultural heritage of Africa. Our mission is to create bridges between generations, connect communities, and ensure that the wisdom and beauty of African traditions continue to thrive in the modern world.
          </p>
          <p className="text-lg text-earth-brown leading-relaxed mb-12">
            Through educational programs, cultural events, and community initiatives, we work to foster understanding, appreciation, and pride in African heritage. We believe that by honoring our past, we can build a stronger, more connected future.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <IconComponent className={`text-4xl ${value.color} mb-4 mx-auto`} />
                  <h3 className="text-2xl font-display font-bold text-deep-brown mb-2">{value.title}</h3>
                  <p className="text-earth-brown">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
