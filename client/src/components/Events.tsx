import { Calendar, Paintbrush, Users } from "lucide-react";

export default function Events() {
  const events = [
    {
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      date: "March 15, 2024",
      title: "Heritage Festival",
      description: "Celebrate African culture with traditional music, dance, food, and crafts. A family-friendly event for all ages.",
      icon: Calendar,
      link: "Learn More →"
    },
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      date: "March 22, 2024",
      title: "Art Workshop",
      description: "Learn traditional African art techniques from master craftspeople. Materials provided for all participants.",
      icon: Paintbrush,
      link: "Register Now →"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      date: "March 29, 2024",
      title: "Storytelling Circle",
      description: "Experience the rich oral tradition of African storytelling with elders sharing ancient tales and wisdom.",
      icon: Users,
      link: "Join Us →"
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold text-deep-brown mb-6">Community Events</h2>
          <p className="text-xl text-earth-brown max-w-3xl mx-auto">
            Join us in celebrating African culture through festivals, workshops, and community gatherings.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <div key={index} className="bg-warm-beige rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-african-gold text-deep-brown px-3 py-1 rounded-full text-sm font-medium">
                    {event.date}
                  </span>
                  <IconComponent className="text-sunset-orange text-lg" />
                </div>
                <h3 className="text-2xl font-display font-bold text-deep-brown mb-3">{event.title}</h3>
                <p className="text-earth-brown mb-4">{event.description}</p>
                <button className="text-sunset-orange font-semibold hover:underline">
                  {event.link}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
