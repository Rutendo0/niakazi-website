import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Heritage from "@/components/Heritage";
import Art from "@/components/Art";
import Events from "@/components/Events";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-warm-beige text-deep-brown">
      <Header />
      <Hero />
      <Heritage />
      <Art />
      <Events />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
