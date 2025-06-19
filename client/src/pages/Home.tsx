import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Products from "@/components/Products";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
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
      <Products />
      <Solutions />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
