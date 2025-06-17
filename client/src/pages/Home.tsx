import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <ScrollIndicator />
      <Header />
      <Hero />
      <Services />
      <Stats />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
