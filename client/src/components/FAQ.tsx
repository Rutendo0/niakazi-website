import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle, Clock, Shield, Zap, Users } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: "Services",
      icon: Zap,
      questions: [
        {
          question: "What ICT services does NIAKAZI provide?",
          answer: "We offer comprehensive ICT solutions including ERP systems (ERPNext/Odoo, MS Dynamics), AI chatbots, CCTV security systems, custom software development, payroll & HR systems, process automation, and professional website development with hosting services."
        },
        {
          question: "Do you provide ongoing support after implementation?",
          answer: "Yes, we provide dedicated monthly support packages starting from US$30 for shared support up to US$100 for dedicated SLA support. This includes system maintenance, updates, troubleshooting, and technical assistance."
        },
        {
          question: "Can you integrate new systems with our existing infrastructure?",
          answer: "Absolutely. Our team specializes in seamless integration with existing systems. We conduct thorough assessments and create custom integration solutions to ensure minimal disruption to your operations."
        }
      ]
    },
    {
      category: "Implementation",
      icon: Clock,
      questions: [
        {
          question: "How long does a typical ERP implementation take?",
          answer: "ERP implementation timelines vary based on complexity and customization needs. Basic ERPNext/Odoo setups typically take 2-4 weeks, while complex MS Dynamics implementations may take 6-12 weeks including training and data migration."
        },
        {
          question: "What is included in your CCTV security packages?",
          answer: "Our CCTV packages include high-definition cameras, DVR systems with storage (500GB to 2TB), professional installation, mobile app access, remote monitoring capabilities, and ongoing technical support."
        },
        {
          question: "Do you provide training for new systems?",
          answer: "Yes, comprehensive training is included with all our implementations. We provide on-site training, user manuals, video tutorials, and ongoing support to ensure your team can effectively use the new systems."
        }
      ]
    },
    {
      category: "Security",
      icon: Shield,
      questions: [
        {
          question: "How secure are your cloud-based solutions?",
          answer: "We implement enterprise-grade security measures including data encryption, secure authentication, regular security updates, and compliance with international security standards. All data is backed up regularly with disaster recovery procedures in place."
        },
        {
          question: "What cybersecurity services do you offer?",
          answer: "We provide vulnerability assessments, penetration testing, cybersecurity awareness training, endpoint security solutions, and 24/7 security operations center services to protect your business from evolving threats."
        },
        {
          question: "Can you help with data backup and recovery?",
          answer: "Yes, we offer comprehensive backup solutions including automated daily backups, cloud storage, disaster recovery planning, and rapid data restoration services to ensure business continuity."
        }
      ]
    },
    {
      category: "Support",
      icon: Users,
      questions: [
        {
          question: "What are your support hours?",
          answer: "We offer flexible support hours including business hours support (8 AM - 5 PM) and 24/7 support for critical systems. Our dedicated SLA packages include guaranteed response times and priority support channels."
        },
        {
          question: "How do you handle system updates and maintenance?",
          answer: "We provide scheduled maintenance windows, automatic security updates, performance optimization, and proactive monitoring. All maintenance activities are planned to minimize disruption to your business operations."
        },
        {
          question: "What is your response time for technical issues?",
          answer: "Response times vary by support level: Shared support (4-8 hours), Dedicated support (1-2 hours), and Critical issues (within 30 minutes for SLA customers). We prioritize system-down issues and provide regular status updates."
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-niakazi-light/10 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="aurora-bg"></div>
        <div className="aurora-bg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center p-3 bg-niakazi-primary/10 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <HelpCircle className="w-6 h-6 text-niakazi-primary" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-niakazi-dark mb-6 font-space-grotesk">
            Frequently Asked
            <span className="block text-gradient-niakazi">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about our ICT solutions and services
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              className="glass-card rounded-2xl p-8 card-hover-lift"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-niakazi-primary/20 to-niakazi-secondary/20 rounded-xl mr-4">
                  <category.icon className="w-6 h-6 text-niakazi-primary" />
                </div>
                <h3 className="text-2xl font-bold text-niakazi-dark">{category.category}</h3>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div key={faqIndex} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full text-left p-6 bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between group"
                      >
                        <span className="text-lg font-semibold text-niakazi-dark group-hover:text-niakazi-primary transition-colors">
                          {faq.question}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-niakazi-primary transition-colors" />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="p-6 pt-0 bg-gray-50">
                              <p className="text-gray-700 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-niakazi-dark mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact our expert team for personalized assistance with your ICT needs
            </p>
            <motion.button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary px-8 py-3 font-semibold glow-on-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Our Experts
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}