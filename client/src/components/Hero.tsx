export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
          Dandemutande
        </h1>
        <p className="text-2xl md:text-3xl font-script mb-8">
          Celebrating the Rich Heritage of Africa
        </p>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          Discover the vibrant cultures, ancient traditions, and artistic treasures that define the essence of African heritage. Join us in preserving and celebrating our shared legacy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('#heritage')}
            className="bg-african-gold hover:bg-yellow-600 text-deep-brown px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Explore Heritage
          </button>
          <button
            onClick={() => scrollToSection('#events')}
            className="border-2 border-white hover:bg-white hover:text-deep-brown text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Upcoming Events
          </button>
        </div>
      </div>
    </section>
  );
}
