import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { insertQuoteSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Lightbulb, Star, Phone, Mail, MessageCircle, ArrowLeft, Home } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";

// Enhanced form schema with proper validation
const quoteFormSchema = insertQuoteSchema.extend({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name is required"),
  description: z.string().min(20, "Please provide more details about your project (minimum 20 characters)"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

export default function Quote() {
  const { toast } = useToast();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      projectType: "",
      budgetRange: "",
      timeline: "",
      services: [],
      description: "",
    },
  });

  const quoteMutation = useMutation({
    mutationFn: (data: QuoteFormData) => apiRequest(`/api/quote`, "POST", data),
    onSuccess: () => {
      toast({
        title: "Quote Request Submitted!",
        description: "We'll review your requirements and get back to you within 24 hours with a detailed proposal.",
      });
      form.reset();
      setSelectedServices([]);
    },
    onError: (error: any) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const handleServiceChange = (service: string, checked: boolean) => {
    const newServices = checked 
      ? [...selectedServices, service]
      : selectedServices.filter(s => s !== service);
    
    setSelectedServices(newServices);
    form.setValue("services", newServices);
  };

  const onSubmit = (data: QuoteFormData) => {
    quoteMutation.mutate(data);
  };

  const services = [
    "Connectivity Solutions",
    "Cloud Services", 
    "Cybersecurity",
    "Hardware Solutions",
    "IT Consulting",
    "Training & Support",
    "Maintenance & Support",
    "Custom Software Development"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Back to Home Button */}
      <div className="fixed top-24 left-4 sm:left-6 z-40">
        <Link to="/">
          <motion.button
            className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back to Home</span>
          </motion.button>
        </Link>
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 sm:py-20 pt-28 sm:pt-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
              Get Your Quote
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
              Tell us about your project and receive a detailed proposal with transparent pricing within 24 hours
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-dande-dark mb-4">
              Simple Quote Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Getting a quote is easy and transparent. Follow these simple steps to get started.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                step: "1",
                title: "Tell Us About Your Project",
                description: "Fill out our detailed form with your project requirements, timeline, and budget preferences.",
                icon: FileText,
                color: "bg-blue-500"
              },
              {
                step: "2", 
                title: "We Analyze Your Needs",
                description: "Our experts review your requirements and design a solution tailored to your specific needs.",
                icon: Lightbulb,
                color: "bg-green-500"
              },
              {
                step: "3",
                title: "Receive Your Proposal",
                description: "Get a comprehensive proposal with detailed scope, timeline, and transparent pricing.",
                icon: Star,
                color: "bg-purple-500"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-dande-dark mb-3">
                    {item.step}. {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-2xl border-0">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-poppins font-bold text-dande-dark">
                  Request Your Quote
                </CardTitle>
                <CardDescription className="text-lg">
                  Please provide detailed information about your project to help us create an accurate quote
                </CardDescription>
              </CardHeader>

              <CardContent className="p-8">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-xl font-poppins font-semibold text-dande-dark mb-6">
                      Contact Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          {...form.register("firstName")}
                        />
                        {form.formState.errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.firstName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          {...form.register("lastName")}
                        />
                        {form.formState.errors.lastName && (
                          <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.lastName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          {...form.register("email")}
                        />
                        {form.formState.errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          placeholder="+1 (555) 123-4567"
                          {...form.register("phone")}
                        />
                        {form.formState.errors.phone && (
                          <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.phone.message}
                          </p>
                        )}
                      </div>

                      <div className="md:col-span-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          placeholder="Your Company Name"
                          {...form.register("company")}
                        />
                        {form.formState.errors.company && (
                          <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.company.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <h3 className="text-xl font-poppins font-semibold text-dande-dark mb-6">
                      Project Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="industry" className="text-sm font-medium text-gray-700 mb-2 block">
                          Industry *
                        </Label>
                        <Select onValueChange={(value) => form.setValue("industry", value)}>
                          <SelectTrigger className="w-full h-12 text-left">
                            <SelectValue placeholder="Choose your industry sector" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border border-gray-200 shadow-lg rounded-lg max-h-60 overflow-y-auto">
                            <SelectItem value="healthcare" className="px-4 py-3 hover:bg-blue-50 cursor-pointer">
                              Healthcare & Medical Services
                            </SelectItem>
                            <SelectItem value="finance" className="px-4 py-3 hover:bg-blue-50 cursor-pointer">
                              Finance & Banking
                            </SelectItem>
                            <SelectItem value="education" className="px-4 py-3 hover:bg-blue-50 cursor-pointer">
                              Education & Training
                            </SelectItem>
                            <SelectItem value="retail" className="px-4 py-3 hover:bg-blue-50 cursor-pointer">
                              Retail & E-commerce
                            </SelectItem>
                            <SelectItem value="manufacturing" className="px-4 py-3 hover:bg-blue-50 cursor-pointer">
                              Manufacturing & Industrial
                            </SelectItem>
                            <SelectItem value="government" className="px-4 py-3 hover:bg-blue-50 cursor-pointer">
                              Government & Public Sector
                            </SelectItem>
                            <SelectItem value="nonprofit" className="px-4 py-3 hover:bg-blue-50 cursor-pointer">
                              Non-profit Organizations
                            </SelectItem>
                            <SelectItem value="technology" className="px-4 py-3 hover:bg-blue-50 cursor-pointer">
                              Technology & Software
                            </SelectItem>
                            <SelectItem value="agriculture" className="px-4 py-3 hover:bg-blue-50 cursor-pointer">
                              Agriculture & Food Processing
                            </SelectItem>
                            <SelectItem value="other" className="px-4 py-3 hover:bg-blue-50 cursor-pointer">
                              Other Industry
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        {form.formState.errors.industry && (
                          <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.industry.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="projectType">Project Type</Label>
                        <Select onValueChange={(value) => form.setValue("projectType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border border-gray-200 shadow-lg rounded-lg max-h-60 overflow-y-auto">
                            <SelectItem value="new-implementation" className="px-4 py-3 hover:bg-blue-50 cursor-pointer">New Implementation</SelectItem>
                            <SelectItem value="system-upgrade">System Upgrade</SelectItem>
                            <SelectItem value="migration">Migration</SelectItem>
                            <SelectItem value="security-audit">Security Audit</SelectItem>
                            <SelectItem value="consultation">Consultation</SelectItem>
                            <SelectItem value="maintenance">Maintenance & Support</SelectItem>
                            <SelectItem value="training">Training</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="budgetRange">Budget Range</Label>
                        <Select onValueChange={(value) => form.setValue("budgetRange", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-10k">Under $10,000</SelectItem>
                            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                            <SelectItem value="over-250k">Over $250,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="timeline">Desired Timeline</Label>
                        <Select onValueChange={(value) => form.setValue("timeline", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP</SelectItem>
                            <SelectItem value="1-month">Within 1 month</SelectItem>
                            <SelectItem value="2-3-months">2-3 months</SelectItem>
                            <SelectItem value="3-6-months">3-6 months</SelectItem>
                            <SelectItem value="6-12-months">6-12 months</SelectItem>
                            <SelectItem value="over-year">Over 1 year</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Services Needed */}
                  <div>
                    <h3 className="text-xl font-poppins font-semibold text-dande-dark mb-6">
                      Services Needed
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Select all services that apply to your project
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <div key={service} className="flex items-center space-x-3">
                          <Checkbox
                            id={service}
                            checked={selectedServices.includes(service)}
                            onCheckedChange={(checked) => 
                              handleServiceChange(service, checked as boolean)
                            }
                          />
                          <Label htmlFor={service} className="cursor-pointer">
                            {service}
                          </Label>
                        </div>
                      ))}
                    </div>
                    {form.formState.errors.services && (
                      <p className="text-red-500 text-sm mt-2">
                        {form.formState.errors.services.message}
                      </p>
                    )}
                  </div>

                  {/* Project Description */}
                  <div>
                    <h3 className="text-xl font-poppins font-semibold text-dande-dark mb-6">
                      Project Description
                    </h3>
                    <Label htmlFor="description">Describe your project in detail</Label>
                    <Textarea
                      id="description"
                      placeholder="Please provide detailed information about your project requirements, current challenges, desired outcomes, and any specific technical needs..."
                      rows={6}
                      {...form.register("description")}
                    />
                    {form.formState.errors.description && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.description.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-gradient-to-r from-dande-primary to-dande-dark hover:opacity-90 text-white px-12 py-4 text-lg font-poppins font-semibold"
                      disabled={quoteMutation.isPending}
                    >
                      {quoteMutation.isPending ? "Submitting..." : "Get My Quote"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-dande-dark mb-4">
              Prefer to Talk?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're here to help! Contact us directly through your preferred method.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Email Us",
                description: "Send us your requirements via email",
                contact: "info@niakazi.com",
                icon: Mail,
                color: "bg-blue-500",
                action: () => window.open("mailto:info@niakazi.com", "_blank")
              },
              {
                title: "Call Us",
                description: "Speak directly with our experts",
                contact: "+263 77 822 4653",
                icon: Phone,
                color: "bg-green-500",
                action: () => window.open("tel:+263778224653", "_blank")
              },
              {
                title: "WhatsApp",
                description: "Quick chat on WhatsApp",
                contact: "+263 77 822 4653",
                icon: MessageCircle,
                color: "bg-emerald-500",
                action: () => window.open("https://wa.me/263778224653", "_blank")
              }
            ].map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={option.action}>
                    <div className={`w-16 h-16 ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-poppins font-semibold text-dande-dark mb-2">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {option.description}
                    </p>
                    <p className="text-dande-primary font-semibold">
                      {option.contact}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}