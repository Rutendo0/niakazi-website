import { useState } from "react";
import { Globe, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await apiRequest("POST", "/api/newsletter", { email: newsletterEmail });
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter!",
      });
      setNewsletterEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    }
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#heritage", label: "Heritage" },
    { href: "#art", label: "Art" },
    { href: "#events", label: "Events" }
  ];

  const programs = [
    "Cultural Workshops",
    "Art Exhibitions",
    "Heritage Tours",
    "Educational Programs"
  ];

  return (
    <footer className="bg-deep-brown text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-african-gold rounded-full flex items-center justify-center">
                <Globe className="text-deep-brown text-lg" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold">Dandemutande</h3>
                <p className="text-sm text-gray-300">Africa</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Preserving and celebrating the rich cultural heritage of Africa for future generations.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-african-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              {programs.map((program) => (
                <li key={program}>
                  <a href="#" className="text-gray-300 hover:text-african-gold transition-colors">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-4">Subscribe to receive updates about our events and programs.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-white bg-opacity-20 rounded-l-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-african-gold"
                required
              />
              <button
                type="submit"
                className="bg-african-gold hover:bg-yellow-600 text-deep-brown px-4 py-2 rounded-r-lg transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">© 2024 Dandemutande Africa. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-african-gold text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-african-gold text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
