export default function Heritage() {
  const heritageItems = [
    {
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Sacred Traditions",
      description: "Ancient rituals and ceremonies that connect us to our ancestors and spiritual beliefs."
    },
    {
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Textile Heritage",
      description: "Vibrant fabrics and patterns that tell stories of culture, status, and identity."
    },
    {
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Musical Legacy",
      description: "Rhythms and melodies that have influenced music across the globe for centuries."
    },
    {
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Architectural Wonders",
      description: "Magnificent structures that showcase the engineering prowess of ancient civilizations."
    }
  ];

  return (
    <section id="heritage" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold text-deep-brown mb-6">Our Heritage</h2>
          <p className="text-xl text-earth-brown max-w-3xl mx-auto">
            Africa's cultural heritage spans millennia, encompassing diverse traditions, languages, and customs that continue to thrive today.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {heritageItems.map((item, index) => (
            <div key={index} className="bg-warm-beige rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-deep-brown mb-3">{item.title}</h3>
                <p className="text-earth-brown">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
