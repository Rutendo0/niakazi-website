import { motion } from "framer-motion";
import { Check, Star, Zap, Shield, Users, Crown } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Pricing() {
  const { ref, isVisible } = useScrollAnimation();

  const pricingPlans = [
    {
      name: "Starter",
      icon: Zap,
      price: "150",
      period: "Setup",
      description: "Perfect for small businesses starting their digital journey",
      features: [
        "Basic website development",
        "Domain setup and hosting",
        "SSL certificate included",
        "Mobile responsive design",
        "Basic contact form",
        "Social media integration",
        "3 months support"
      ],
      popular: false,
      color: "from-niakazi-primary to-niakazi-secondary"
    },
    {
      name: "Professional",
      icon: Users,
      price: "500",
      period: "Setup",
      description: "Comprehensive solution for growing businesses",
      features: [
        "Advanced website with CMS",
        "ERP system integration", 
        "AI chatbot implementation",
        "Basic CCTV system (4 cameras)",
        "Payroll system setup",
        "Staff training included",
        "6 months support",
        "Monthly maintenance"
      ],
      popular: true,
      color: "from-niakazi-secondary to-niakazi-accent"
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "1500",
      period: "Setup",
      description: "Complete digital transformation for large organizations",
      features: [
        "Full custom software solution",
        "Advanced ERP (MS Dynamics)",
        "16-channel CCTV system",
        "Complete automation suite",
        "Cybersecurity assessment",
        "24/7 monitoring & support",
        "Dedicated account manager",
        "1 year warranty"
      ],
      popular: false,
      color: "from-niakazi-accent to-niakazi-primary"
    }
  ];

  const monthlyPlans = [
    {
      name: "Basic Support",
      price: "30",
      description: "Shared IT support for ongoing maintenance",
      features: [
        "Email support",
        "System updates",
        "Basic troubleshooting",
        "Monthly health checks"
      ]
    },
    {
      name: "Premium Support", 
      price: "100",
      description: "Dedicated SLA with guaranteed response times",
      features: [
        "Priority phone support",
        "2-hour response time",
        "Remote system access",
        "Performance monitoring",
        "Security updates"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-white via-gray-50 to-niakazi-light/20 relative overflow-hidden" ref={ref}>
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
            <Star className="w-6 h-6 text-niakazi-primary" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-niakazi-dark mb-6 font-space-grotesk">
            Simple, Transparent
            <span className="block text-gradient-niakazi">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your business needs. All plans include professional installation and training.
          </p>
        </motion.div>

        {/* Setup Pricing */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative glass-card rounded-2xl p-8 card-hover-lift ${
                plan.popular ? 'ring-2 ring-niakazi-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-niakazi-primary to-niakazi-secondary text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.color} rounded-xl mb-4`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-niakazi-dark mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-niakazi-dark">
                  US${plan.price}
                  <span className="text-lg font-normal text-gray-500">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-niakazi-primary to-niakazi-secondary text-white hover:shadow-lg'
                    : 'border-2 border-niakazi-primary text-niakazi-primary hover:bg-niakazi-primary hover:text-white'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Monthly Support Plans */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-niakazi-dark mb-4">
              Monthly Support Plans
            </h3>
            <p className="text-gray-600">
              Ongoing maintenance and support to keep your systems running smoothly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {monthlyPlans.map((plan, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-2xl p-6 card-hover-lift"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-niakazi-dark mb-2">{plan.name}</h4>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-niakazi-primary">
                    US${plan.price}
                    <span className="text-lg font-normal text-gray-500">/month</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Shield className="w-4 h-4 text-niakazi-primary mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full py-2 border-2 border-niakazi-primary text-niakazi-primary rounded-xl font-semibold hover:bg-niakazi-primary hover:text-white transition-all duration-300"
                >
                  Subscribe
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-niakazi-dark mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6">
              Every business is unique. Contact us for a personalized quote tailored to your specific requirements.
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
              Request Custom Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}