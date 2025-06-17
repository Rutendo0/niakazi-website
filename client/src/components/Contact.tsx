import { useState } from "react";
import { MapPin, Phone, Mail, Facebook, Instagram, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", formData);
      toast({
        title: "Message sent!",
        description: "Thank you for your message! We will get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      text: "+1263 77 822 4653"
    },
    {
      icon: Mail,
      title: "Email",
      text: "info@niakazi.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      text: "Mon - Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM"
    },
    {
      icon: MapPin,
      title: "Address",
      text: "First Str & Union Ave, Harare\nZB Center, 4th Floor"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61576086914795", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/niakazi_technology_solutions?igsh=MWIxa2p2czRzZXR3ZQ==", label: "Instagram" }
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-dande-dark mb-6">Get In Touch</h2>
            <p className="text-lg text-dande-text font-poppins">
              Ready to transform your business with reliable ICT solutions? Contact our experts today.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-poppins font-bold text-dande-dark mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-dande-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <IconComponent className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-dande-dark mb-1 font-poppins">{info.title}</h4>
                        <p className="text-dande-text font-poppins whitespace-pre-line">{info.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-dande-dark mb-4 font-poppins">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-dande-primary rounded-lg flex items-center justify-center hover:opacity-90 transition-all"
                        aria-label={social.label}
                      >
                        <IconComponent className="text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <div className="bg-dande-light-gray rounded-lg p-8">
              <h3 className="text-2xl font-poppins font-bold text-dande-dark mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-dande-dark font-medium mb-2 font-poppins">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dande-primary focus:border-transparent font-poppins"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-dande-dark font-medium mb-2 font-poppins">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dande-primary focus:border-transparent font-poppins"
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-dande-dark font-medium mb-2 font-poppins">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dande-primary focus:border-transparent font-poppins"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-dande-dark font-medium mb-2 font-poppins">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dande-primary focus:border-transparent font-poppins"
                    placeholder="Tell us about your ICT requirements..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-dande-dark text-white font-semibold py-3 px-6 rounded-full transition-all disabled:opacity-50 flex items-center justify-center font-poppins hover:bg-opacity-90"
                  style={{ backgroundColor: '#1f2b56' }}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
