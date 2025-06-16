import { useState } from "react";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Send } from "lucide-react";
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
      icon: MapPin,
      title: "Head Office",
      text: "Harare, Zimbabwe"
    },
    {
      icon: Phone,
      title: "Phone",
      text: "+263 (0) 4 123 456"
    },
    {
      icon: Mail,
      title: "Email",
      text: "info@dandemutande.africa"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/DandemutandeZW", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/DandemutandeZW", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/13181424", label: "LinkedIn" }
  ];

  return (
    <section id="contact" className="py-20 bg-tech-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-heading font-bold text-brand-dark-blue mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-700">
              Ready to transform your business with reliable ICT solutions? Contact our experts today.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold text-brand-dark-blue mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <IconComponent className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-dark-blue mb-1">{info.title}</h4>
                        <p className="text-gray-600">{info.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-brand-dark-blue mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                        aria-label={social.label}
                      >
                        <IconComponent className="text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-brand-light-blue rounded-xl">
                <h4 className="font-semibold text-brand-dark-blue mb-2">Business Hours</h4>
                <p className="text-gray-700 text-sm">Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p className="text-gray-700 text-sm">24/7 Emergency Support Available</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold text-brand-dark-blue mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-brand-dark-blue font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-brand-dark-blue font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-brand-dark-blue font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-brand-dark-blue font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    placeholder="Tell us about your ICT requirements..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-blue hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center"
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
