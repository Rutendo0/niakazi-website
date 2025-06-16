export default function Art() {
  const artItems = [
    {
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Wood Sculptures",
      description: "Intricate carvings that embody spiritual beliefs and cultural stories passed down through generations.",
      tag: "Traditional Craft",
      tagColor: "bg-african-gold text-deep-brown"
    },
    {
      image: "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Ceramic Art",
      description: "Beautiful pottery pieces that combine functionality with artistic expression, showcasing ancient techniques.",
      tag: "Ancient Craft",
      tagColor: "bg-sunset-orange text-white"
    },
    {
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Beadwork & Jewelry",
      description: "Colorful beads and intricate jewelry designs that signify cultural identity and social status.",
      tag: "Cultural Symbol",
      tagColor: "bg-earth-brown text-white"
    }
  ];

  return (
    <section id="art" className="py-20 bg-warm-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold text-deep-brown mb-6">Traditional Art</h2>
          <p className="text-xl text-earth-brown max-w-3xl mx-auto">
            Explore the masterpieces of African artistry, from ancient sculptures to contemporary expressions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-deep-brown mb-3">{item.title}</h3>
                <p className="text-earth-brown mb-4">{item.description}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${item.tagColor}`}>
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
