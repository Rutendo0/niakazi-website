import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <About />
      <Solutions />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}
