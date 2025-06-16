import { useState } from "react";
import { Menu, X, Wifi } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Solutions" },
    { href: "#about", label: "About" },
    { href: "#why-choose-us", label: "Why Choose Us" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center">
              <Wifi className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-2xl font-heading font-bold text-brand-dark-blue">Dandemutande</h1>
              <p className="text-sm text-brand-blue font-medium">ICT Solutions</p>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-brand-dark-blue hover:text-brand-blue transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <button
            className="md:hidden text-brand-dark-blue"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-brand-dark-blue hover:text-brand-blue transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
