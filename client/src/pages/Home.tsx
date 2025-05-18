import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionItem } from "@/components/ui/accordion-custom";
import { ChartLine, BarChart3, Users, Zap, Shield, Clock, ChevronRight } from "lucide-react";

export default function Home() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    try {
      console.log("Form submitted:", contactForm);
      // Reset form after submission
      setContactForm({ name: "", email: "", message: "" });
      alert("Message sent! We'll get back to you soon.");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/50"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent"></div>
          <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          {/* Animated Gradient Orbs */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/30 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-60 -right-40 w-80 h-80 bg-accent/30 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-primary/30 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 space-y-8 mb-12 lg:mb-0">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                  Future of Marketing
                </span>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-foreground">
                  Revolutionize Your<br />
                  <span className="text-gradient">Marketing Strategy</span>
                </h1>
                <p className="text-lg md:text-xl text-foreground/70 max-w-xl">
                  Harness the power of AI and data-driven insights to supercharge your marketing efforts and drive unprecedented growth for your business.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="cta-button rounded-full px-8 py-6 bg-primary hover:bg-primary-light text-primary-foreground">
                  Get Started Free
                </Button>
                <Button variant="outline" className="rounded-full px-8 py-6 border-primary/30 hover:bg-primary/10 text-foreground">
                  Book a Demo
                </Button>
              </div>
              
              <div className="flex items-center space-x-8 text-foreground/60">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-primary" />
                  <span>Secure & Compliant</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30"></div>
                <div className="relative glass-card p-6 rounded-2xl overflow-hidden shadow-xl">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                      <ChartLine className="w-6 h-6 text-primary mb-2" />
                      <h3 className="font-semibold mb-1">Analytics</h3>
                      <p className="text-sm text-foreground/70">Real-time performance data</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                      <BarChart3 className="w-6 h-6 text-accent mb-2" />
                      <h3 className="font-semibold mb-1">Insights</h3>
                      <p className="text-sm text-foreground/70">AI-driven recommendations</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                      <Users className="w-6 h-6 text-accent mb-2" />
                      <h3 className="font-semibold mb-1">Audience</h3>
                      <p className="text-sm text-foreground/70">Detailed segmentation</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                      <Zap className="w-6 h-6 text-primary mb-2" />
                      <h3 className="font-semibold mb-1">Automation</h3>
                      <p className="text-sm text-foreground/70">Streamlined workflows</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold">Marketing Performance</h3>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">Live</span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Social Media</span>
                          <span className="text-primary">+78%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "78%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Email Campaigns</span>
                          <span className="text-primary">+65%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Content Marketing</span>
                          <span className="text-accent">+92%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div className="bg-accent h-2 rounded-full" style={{ width: "92%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-background/50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-foreground/60">Trusted by forward-thinking companies</span>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* These would be your client logos */}
            <div className="text-foreground/40 hover:text-foreground/80 transition-colors duration-300 text-2xl font-bold">Microsoft</div>
            <div className="text-foreground/40 hover:text-foreground/80 transition-colors duration-300 text-2xl font-bold">Adobe</div>
            <div className="text-foreground/40 hover:text-foreground/80 transition-colors duration-300 text-2xl font-bold">Shopify</div>
            <div className="text-foreground/40 hover:text-foreground/80 transition-colors duration-300 text-2xl font-bold">Salesforce</div>
            <div className="text-foreground/40 hover:text-foreground/80 transition-colors duration-300 text-2xl font-bold">Stripe</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/80 to-background -z-10"></div>
        {/* Add subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Comprehensive Marketing Services</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Everything you need to establish a strong online presence and effectively reach your target audience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-card hover:bg-card/80 p-8 rounded-xl transition duration-300 h-full flex flex-col shadow-lg border border-card">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Website Design & Development</h3>
                <p className="text-card-foreground/70 mb-6 flex-grow">
                  Custom-designed websites that are visually stunning, user-friendly, and optimized for conversion.
                </p>
                <div className="mt-auto">
                  <Button variant="link" className="pl-0 text-primary flex items-center group">
                    Learn more 
                    <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Service Card 2 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-card hover:bg-card/80 p-8 rounded-xl transition duration-300 h-full flex flex-col shadow-lg border border-card">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Social Media Management</h3>
                <p className="text-card-foreground/70 mb-6 flex-grow">
                  Strategic social media campaigns that increase engagement, build brand awareness, and drive qualified traffic.
                </p>
                <div className="mt-auto">
                  <Button variant="link" className="pl-0 text-primary flex items-center group">
                    Learn more 
                    <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Service Card 3 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-card hover:bg-card/80 p-8 rounded-xl transition duration-300 h-full flex flex-col shadow-lg border border-card">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Search Engine Optimization</h3>
                <p className="text-card-foreground/70 mb-6 flex-grow">
                  Data-driven SEO strategies that improve your search rankings and drive organic traffic to your website.
                </p>
                <div className="mt-auto">
                  <Button variant="link" className="pl-0 text-primary flex items-center group">
                    Learn more 
                    <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Service Card 4 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-card hover:bg-card/80 p-8 rounded-xl transition duration-300 h-full flex flex-col shadow-lg border border-card">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Content Marketing</h3>
                <p className="text-card-foreground/70 mb-6 flex-grow">
                  Compelling content strategies that establish your authority, engage your audience, and drive conversions.
                </p>
                <div className="mt-auto">
                  <Button variant="link" className="pl-0 text-primary flex items-center group">
                    Learn more 
                    <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Service Card 5 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-card hover:bg-card/80 p-8 rounded-xl transition duration-300 h-full flex flex-col shadow-lg border border-card">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Pay-Per-Click Advertising</h3>
                <p className="text-card-foreground/70 mb-6 flex-grow">
                  Targeted PPC campaigns that maximize your ROI and deliver measurable results for your business.
                </p>
                <div className="mt-auto">
                  <Button variant="link" className="pl-0 text-primary flex items-center group">
                    Learn more 
                    <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Service Card 6 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-card hover:bg-card/80 p-8 rounded-xl transition duration-300 h-full flex flex-col shadow-lg border border-card">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Email Marketing</h3>
                <p className="text-card-foreground/70 mb-6 flex-grow">
                  Strategic email campaigns that nurture leads, build customer loyalty, and drive repeat business.
                </p>
                <div className="mt-auto">
                  <Button variant="link" className="pl-0 text-primary flex items-center group">
                    Learn more 
                    <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-white dark:bg-gray-950"></div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Powerful Marketing Tools</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Cutting-edge features designed to transform your marketing strategy and drive exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side */}
            <div className="space-y-12">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30"></div>
                <div className="relative bg-card rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="attached_assets/C96F4D72-EEE8-4EDD-8B67-241D6494264E_1_105_c.jpeg" 
                    alt="AI-Powered Marketing Dashboard" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">AI-Powered Marketing Dashboard</h3>
                <p className="text-foreground/70 mb-6">
                  Our intelligent dashboard provides real-time analytics and actionable insights to optimize your marketing campaigns instantly.
                </p>
                <ul className="space-y-3">
                  {['Advanced performance metrics', 'Competitive analysis', 'Audience behavior tracking', 'ROI calculation'].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Right Side */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Automated Marketing Campaigns</h3>
                <p className="text-foreground/70 mb-6">
                  Streamline your marketing efforts with powerful automation tools that save time and deliver consistent results.
                </p>
                <ul className="space-y-3">
                  {['Multi-channel campaign management', 'Personalized customer journeys', 'Behavioral trigger automation', 'A/B testing and optimization'].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30"></div>
                <div className="relative bg-card rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="attached_assets/A04425B8-9A67-4E83-BA7C-296CED2DAE7E_1_105_c.jpeg" 
                    alt="Automated Marketing Campaign Dashboard" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Options Section */}
      <section id="service-options" className="py-24 relative overflow-hidden bg-gradient-to-r from-[#e6f7ff]/30 to-[#f8fff0]/30">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#4caf50]/20 text-[#4caf50] text-sm font-medium mb-4">
                  From The Seed
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                  The Plethora of our services include
                </h2>
                <p className="text-foreground/70 text-lg">
                  Here are a few services that you require for that slingshot to reach the top. Get started on these services, and wait for results to follow.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {/* Service 1 */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#e0f2fe] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Search Engine Optimization</h3>
                  </div>
                </div>
                
                {/* Service 2 */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#fef3c7] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#d97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Influencer Marketing</h3>
                  </div>
                </div>
                
                {/* Service 3 */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#d8f3dc] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2d6a4f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">TikTok Marketing</h3>
                  </div>
                </div>
                
                {/* Service 4 */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#ffe2e2] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e63946]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Podcasts</h3>
                  </div>
                </div>
              </div>
              
              <div>
                <Button className="rounded-full px-8 py-6 bg-gradient-to-r from-[#ef6351] to-[#f38375] hover:opacity-90 transition-opacity text-white border-0 font-medium uppercase tracking-wider">
                  Contact us
                </Button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="lg:w-1/2 flex justify-center">
              <img 
                src="attached_assets/image_1747348673399.png" 
                alt="3D illustration of person analyzing growth data" 
                className="max-w-full h-auto lg:max-w-lg xl:max-w-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Marketing Assistant Section */}
      <section id="ai-assistant" className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left content */}
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium">
                  AI-Powered Marketing
                </span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                  Your Personal AI Marketing Assistant
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Unlike other platforms, we integrate advanced AI that learns your business and creates personalized marketing strategies. Our platform becomes smarter with each interaction.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-primary/80 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Smart Content Generation</h3>
                  <p className="text-gray-300">
                    AI-written content tailored to your brand voice and audience preferences.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-accent/80 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Audience Prediction</h3>
                  <p className="text-gray-300">
                    Anticipate market trends and customer behaviors before they happen.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-primary/80 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Real-time Optimization</h3>
                  <p className="text-gray-300">
                    Campaigns that automatically adjust based on performance metrics.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-accent/80 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Competitor Analysis</h3>
                  <p className="text-gray-300">
                    AI-powered insights into competitor strategies and market gaps.
                  </p>
                </div>
              </div>

              <div>
                <Button className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-full transition-all duration-300">
                  Try AI Assistant Now
                </Button>
              </div>
            </div>

            {/* Right content - Chat Interface */}
            <div className="lg:w-1/2">
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">AI Marketing Assistant</h3>
                    <p className="text-gray-400 text-sm">Powered by advanced machine learning</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-gray-800 rounded-lg p-3 max-w-[80%]">
                      <p className="text-gray-300">What marketing strategy would work best for my SaaS product targeting small business owners?</p>
                    </div>
                  </div>

                  <div className="flex items-start justify-end">
                    <div className="bg-primary rounded-lg p-3 max-w-[80%]">
                      <p className="text-white">Based on your audience analysis, I recommend a multi-channel approach:</p>
                      <ul className="text-white mt-2 space-y-1 list-disc list-inside">
                        <li>LinkedIn content marketing focusing on pain points</li>
                        <li>Email drip campaigns with personalized demos</li>
                        <li>Targeted Google Ads with "cost-saving" messaging</li>
                      </ul>
                      <p className="text-white mt-2">Based on similar businesses, this approach has shown a 43% higher conversion rate than traditional methods.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gray-800 rounded-lg p-3 max-w-[80%]">
                      <p className="text-gray-300">Can you create content for our LinkedIn page?</p>
                    </div>
                  </div>

                  <div className="flex items-start justify-end">
                    <div className="bg-primary rounded-lg p-3 max-w-[80%]">
                      <p className="text-white">I've analyzed your brand voice and target audience. Here's a LinkedIn post draft:</p>
                      <p className="text-white mt-2 italic">"Struggling with managing client communications? Our new dashboard reduces response time by 65% on average. See how one agency went from overwhelmed to organized in just 3 days. [Link to case study]"</p>
                      <p className="text-white mt-2">Would you like me to prepare a full week's content schedule?</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <input type="text" className="w-full bg-gray-800 text-white rounded-full px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Ask your marketing assistant..." />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary hover:text-primary/80">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Data Platform Section */}
      <section id="data-platform" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left - Platform Visualization */}
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 z-0"></div>
                <div className="relative bg-white dark:bg-gray-800 p-6 z-10">
                  {/* Platform Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold dark:text-white">Unified Customer Data Platform</h3>
                      <div className="flex space-x-1">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Customer Journey Visualization */}
                  <div className="bg-slate-50 dark:bg-gray-900 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-semibold dark:text-white">Customer Journey Map</h4>
                      <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-2 py-1 rounded-full">Live View</span>
                    </div>
                    
                    <div className="relative">
                      {/* Journey Path */}
                      <div className="h-24 relative">
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2 z-0"></div>
                        
                        {/* Journey Steps */}
                        <div className="absolute top-1/2 left-[10%] w-6 h-6 bg-primary rounded-full transform -translate-y-1/2 z-10 flex items-center justify-center text-white text-xs">1</div>
                        <div className="absolute top-0 left-[10%] text-xs font-medium dark:text-gray-300 transform -translate-x-1/2">First Visit</div>
                        
                        <div className="absolute top-1/2 left-[30%] w-6 h-6 bg-primary rounded-full transform -translate-y-1/2 z-10 flex items-center justify-center text-white text-xs">2</div>
                        <div className="absolute top-0 left-[30%] text-xs font-medium dark:text-gray-300 transform -translate-x-1/2">Email Signup</div>
                        
                        <div className="absolute top-1/2 left-[50%] w-6 h-6 bg-primary rounded-full transform -translate-y-1/2 z-10 flex items-center justify-center text-white text-xs">3</div>
                        <div className="absolute top-0 left-[50%] text-xs font-medium dark:text-gray-300 transform -translate-x-1/2">Product Demo</div>
                        
                        <div className="absolute top-1/2 left-[70%] w-6 h-6 bg-primary rounded-full transform -translate-y-1/2 z-10 flex items-center justify-center text-white text-xs">4</div>
                        <div className="absolute top-0 left-[70%] text-xs font-medium dark:text-gray-300 transform -translate-x-1/2">Purchase</div>
                        
                        <div className="absolute top-1/2 left-[90%] w-6 h-6 bg-green-500 rounded-full transform -translate-y-1/2 z-10 flex items-center justify-center text-white text-xs">5</div>
                        <div className="absolute top-0 left-[90%] text-xs font-medium dark:text-gray-300 transform -translate-x-1/2">Retention</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Data Unification Visualization */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-slate-100 dark:bg-gray-900 p-3 rounded-lg">
                      <div className="text-xs font-semibold mb-2 text-gray-700 dark:text-gray-300">Website Data</div>
                      <div className="flex items-center text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span className="dark:text-white">352 events</span>
                      </div>
                    </div>
                    
                    <div className="bg-slate-100 dark:bg-gray-900 p-3 rounded-lg">
                      <div className="text-xs font-semibold mb-2 text-gray-700 dark:text-gray-300">Email Stats</div>
                      <div className="flex items-center text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="dark:text-white">24 opens</span>
                      </div>
                    </div>
                    
                    <div className="bg-slate-100 dark:bg-gray-900 p-3 rounded-lg">
                      <div className="text-xs font-semibold mb-2 text-gray-700 dark:text-gray-300">Ad Platform</div>
                      <div className="flex items-center text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                        <span className="dark:text-white">8 clicks</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Personalization Suggestion */}
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h4 className="font-semibold text-sm text-blue-800 dark:text-blue-200 mb-2">Personalization Suggestion</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">This customer is interested in social media automation features based on their browsing history. Send them our case study on how Company X increased engagement by 136%.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right content */}
            <div className="lg:w-1/2 space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium">
                Unified Data
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                The Only Platform with a True 360° Customer View
              </h2>
              <p className="text-foreground/70 text-lg">
                Unlike disconnected marketing tools, our platform integrates data from every customer touchpoint into a single, actionable view. No more siloed data or inconsistent customer experiences.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">Cross-Channel Data</h3>
                    <p className="text-foreground/70">Unify web, email, social, ad, and CRM data automatically</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">Privacy-First Design</h3>
                    <p className="text-foreground/70">GDPR and CCPA compliant with built-in consent management</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">Predictive Analytics</h3>
                    <p className="text-foreground/70">Identify high-value prospects before they convert</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">Automated Segmentation</h3>
                    <p className="text-foreground/70">Dynamic segments that update in real-time based on behavior</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-primary hover:bg-primary/90 text-white transition-all duration-300 rounded-lg px-6 py-3 mt-4">
                Explore the Data Platform
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing ROI Calculator Section */}
      <section id="roi-calculator" className="py-24 relative overflow-hidden bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
              Marketing ROI
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Calculate Your Marketing ROI</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Use our interactive calculator to estimate the return on investment for your next marketing campaign.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden gradient-border">
              <div className="grid md:grid-cols-2">
                {/* Calculator Controls */}
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-foreground">Campaign Details</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground/70 mb-2">
                        Marketing Budget
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="number"
                          defaultValue="5000"
                          min="100"
                          step="100"
                          className="pl-8 block w-full rounded-md border-gray-300 dark:border-gray-700 py-3 px-4 bg-white dark:bg-gray-900 text-foreground focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground/70 mb-2">
                        Expected Conversion Rate (%)
                      </label>
                      <input
                        type="range"
                        min="0.1"
                        max="10"
                        step="0.1"
                        defaultValue="2.5"
                        className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                      />
                      <div className="flex justify-between text-xs text-foreground/60 mt-1">
                        <span>0.1%</span>
                        <span>2.5%</span>
                        <span>5%</span>
                        <span>7.5%</span>
                        <span>10%</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground/70 mb-2">
                        Average Sale Value
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="number"
                          defaultValue="150"
                          min="1"
                          className="pl-8 block w-full rounded-md border-gray-300 dark:border-gray-700 py-3 px-4 bg-white dark:bg-gray-900 text-foreground focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground/70 mb-2">
                        Marketing Channels
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center">
                          <input 
                            id="seo" 
                            type="checkbox" 
                            defaultChecked
                            className="w-4 h-4 text-primary focus:ring-primary rounded" 
                          />
                          <label htmlFor="seo" className="ml-2 text-sm text-foreground/80">SEO</label>
                        </div>
                        <div className="flex items-center">
                          <input 
                            id="email" 
                            type="checkbox" 
                            defaultChecked
                            className="w-4 h-4 text-primary focus:ring-primary rounded" 
                          />
                          <label htmlFor="email" className="ml-2 text-sm text-foreground/80">Email Marketing</label>
                        </div>
                        <div className="flex items-center">
                          <input 
                            id="social" 
                            type="checkbox" 
                            defaultChecked
                            className="w-4 h-4 text-primary focus:ring-primary rounded" 
                          />
                          <label htmlFor="social" className="ml-2 text-sm text-foreground/80">Social Media</label>
                        </div>
                        <div className="flex items-center">
                          <input 
                            id="ppc" 
                            type="checkbox" 
                            className="w-4 h-4 text-primary focus:ring-primary rounded" 
                          />
                          <label htmlFor="ppc" className="ml-2 text-sm text-foreground/80">PPC Ads</label>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground/70 mb-2">
                        Campaign Duration
                      </label>
                      <select className="block w-full rounded-md border-gray-300 dark:border-gray-700 py-3 px-4 bg-white dark:bg-gray-900 text-foreground focus:ring-primary focus:border-primary">
                        <option>1 month</option>
                        <option selected>3 months</option>
                        <option>6 months</option>
                        <option>12 months</option>
                      </select>
                    </div>
                    
                    <Button className="w-full button-3d bg-primary hover:bg-primary/90 text-white">
                      Calculate ROI
                    </Button>
                  </div>
                </div>
                
                {/* Results Display */}
                <div className="bg-gray-50 dark:bg-gray-900 p-8">
                  <h3 className="text-xl font-bold mb-6 text-foreground">Projected Results</h3>
                  
                  <div className="space-y-6">
                    {/* ROI Meter */}
                    <div className="text-center mb-8">
                      <div className="relative h-36 w-36 mx-auto">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          {/* Background Circle */}
                          <circle 
                            cx="50" 
                            cy="50" 
                            r="45" 
                            fill="none" 
                            stroke="#e5e7eb" 
                            strokeWidth="10" 
                            className="dark:stroke-gray-700" 
                          />
                          {/* Progress Circle */}
                          <circle 
                            cx="50" 
                            cy="50" 
                            r="45" 
                            fill="none" 
                            stroke="url(#roiGradient)" 
                            strokeWidth="10" 
                            strokeDasharray="283" 
                            strokeDashoffset="70" 
                            strokeLinecap="round" 
                          />
                          {/* Gradient Definition */}
                          <defs>
                            <linearGradient id="roiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="hsl(var(--primary))" />
                              <stop offset="100%" stopColor="hsl(var(--accent))" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                          <span className="text-3xl font-bold text-foreground">375%</span>
                          <span className="text-sm text-foreground/70">ROI</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <p className="text-sm text-foreground/70 mb-1">Expected Revenue</p>
                        <p className="text-xl font-bold text-foreground">$23,750</p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <p className="text-sm text-foreground/70 mb-1">Net Profit</p>
                        <p className="text-xl font-bold text-foreground">$18,750</p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <p className="text-sm text-foreground/70 mb-1">Conversions</p>
                        <p className="text-xl font-bold text-foreground">158</p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <p className="text-sm text-foreground/70 mb-1">Cost per Acquisition</p>
                        <p className="text-xl font-bold text-foreground">$31.65</p>
                      </div>
                    </div>
                    
                    {/* Performance Chart */}
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-foreground/70 mb-4">Projected Performance</h4>
                      <div className="h-32 relative">
                        <svg className="w-full h-full">
                          {/* Grid Lines */}
                          <line x1="0" y1="0" x2="0" y2="100%" className="chart-grid-lines" />
                          <line x1="25%" y1="0" x2="25%" y2="100%" className="chart-grid-lines" />
                          <line x1="50%" y1="0" x2="50%" y2="100%" className="chart-grid-lines" />
                          <line x1="75%" y1="0" x2="75%" y2="100%" className="chart-grid-lines" />
                          <line x1="100%" y1="0" x2="100%" y2="100%" className="chart-grid-lines" />
                          
                          <line x1="0" y1="0" x2="100%" y2="0" className="chart-grid-lines" />
                          <line x1="0" y1="25%" x2="100%" y2="25%" className="chart-grid-lines" />
                          <line x1="0" y1="50%" x2="100%" y2="50%" className="chart-grid-lines" />
                          <line x1="0" y1="75%" x2="100%" y2="75%" className="chart-grid-lines" />
                          <line x1="0" y1="100%" x2="100%" y2="100%" className="chart-grid-lines" />
                          
                          {/* Data Line */}
                          <path 
                            d="M0,100 L25,80 L50,60 L75,30 L100,20" 
                            className="chart-data-line"
                          />
                          
                          {/* Area Fill */}
                          <path 
                            d="M0,100 L25,80 L50,60 L75,30 L100,20 L100,100 L0,100" 
                            className="chart-area-gradient"
                          />
                          
                          {/* Gradient for Area */}
                          <defs>
                            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
                            </linearGradient>
                          </defs>
                        </svg>
                        
                        {/* X-Axis Labels */}
                        <div className="flex justify-between text-xs text-foreground/60 mt-1">
                          <span>Month 1</span>
                          <span>Month 2</span>
                          <span>Month 3</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <Button variant="outline" className="text-primary hover:bg-primary/10">
                        Download Full Report
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Campaign Monitoring Section */}
      <section id="campaign-monitoring" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
              Campaign Monitoring
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Real-time Campaign Dashboard</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Track and optimize your marketing campaigns with our comprehensive real-time dashboard.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-xl opacity-30"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 p-6 md:p-8 overflow-hidden">
              {/* Dashboard Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Campaign Performance Overview</h3>
                  <p className="text-foreground/60">Last updated: 2 minutes ago</p>
                </div>
                
                <div className="flex mt-4 md:mt-0 space-x-4">
                  <div className="rounded-md shadow-sm flex">
                    <Button variant="outline" className="rounded-r-none border-r-0">Day</Button>
                    <Button variant="outline" className="rounded-none border-x-0">Week</Button>
                    <Button variant="outline" className="rounded-l-none border-l-0 bg-primary/10 text-primary">Month</Button>
                  </div>
                  
                  <Button variant="outline" className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Export
                  </Button>
                </div>
              </div>
              
              {/* Main Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-foreground/70">Total Impressions</span>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 rounded-full">+24%</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">1,254,789</div>
                  <div className="mt-2 text-xs text-foreground/60">Compared to 1,012,547 last month</div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-foreground/70">Engagement Rate</span>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 rounded-full">+3.2%</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">8.7%</div>
                  <div className="mt-2 text-xs text-foreground/60">Compared to 5.5% last month</div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-foreground/70">Conversions</span>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 rounded-full">+18%</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">3,847</div>
                  <div className="mt-2 text-xs text-foreground/60">Compared to 3,259 last month</div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-foreground/70">Cost per Conversion</span>
                    <span className="text-xs px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 rounded-full">+2.3%</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">$12.38</div>
                  <div className="mt-2 text-xs text-foreground/60">Compared to $12.10 last month</div>
                </div>
              </div>
              
              {/* Campaign Performance by Channel */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Campaign Performance by Channel</h4>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 h-64 flex items-center justify-center">
                    <div className="w-full h-full">
                      {/* This would be a chart in a real application */}
                      <div className="bg-gray-100 dark:bg-gray-800 h-full rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-foreground font-semibold mb-2">Channel Performance Chart</p>
                          <p className="text-foreground/70 text-sm">Visualization showing performance across channels</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Top Performing Content</h4>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                    <ul className="space-y-4">
                      <li className="border-b border-gray-200 dark:border-gray-700 pb-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-medium text-foreground">10 Marketing Trends for 2025</h5>
                            <p className="text-sm text-foreground/70">Blog Post</p>
                          </div>
                          <span className="text-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 px-2 py-1 rounded-full">87% Engagement</span>
                        </div>
                      </li>
                      <li className="border-b border-gray-200 dark:border-gray-700 pb-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-medium text-foreground">Email Campaign: Summer Sale</h5>
                            <p className="text-sm text-foreground/70">Email</p>
                          </div>
                          <span className="text-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 px-2 py-1 rounded-full">42% Open Rate</span>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-medium text-foreground">Behind the Scenes Video</h5>
                            <p className="text-sm text-foreground/70">Instagram Reel</p>
                          </div>
                          <span className="text-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 px-2 py-1 rounded-full">12K Views</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Audience Insights */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Audience Insights</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-3">Demographics</h5>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span className="text-foreground/70">25-34 years</span>
                          <span className="text-foreground/70">38%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <div className="h-2 bg-primary rounded-full" style={{ width: "38%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span className="text-foreground/70">35-44 years</span>
                          <span className="text-foreground/70">27%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <div className="h-2 bg-primary rounded-full" style={{ width: "27%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span className="text-foreground/70">18-24 years</span>
                          <span className="text-foreground/70">21%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <div className="h-2 bg-primary rounded-full" style={{ width: "21%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-3">Geographic Distribution</h5>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span className="text-foreground/70">United States</span>
                          <span className="text-foreground/70">42%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <div className="h-2 bg-accent rounded-full" style={{ width: "42%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span className="text-foreground/70">Europe</span>
                          <span className="text-foreground/70">28%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <div className="h-2 bg-accent rounded-full" style={{ width: "28%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span className="text-foreground/70">Asia Pacific</span>
                          <span className="text-foreground/70">18%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <div className="h-2 bg-accent rounded-full" style={{ width: "18%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Button className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-lg button-3d">
              Get Access to Full Dashboard
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Proven Process</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              We follow a systematic approach to ensure your marketing success. Here's how we work with you.
            </p>
          </div>
          
          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block h-1 bg-gray-200 absolute top-16 left-0 right-0 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                  <span className="font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Discovery</h3>
                <p className="text-foreground/70 text-center">
                  We learn about your business, goals, and target audience to create a tailored strategy.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                  <span className="font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Strategy</h3>
                <p className="text-foreground/70 text-center">
                  We develop a comprehensive marketing plan aligned with your business objectives.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                  <span className="font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Execution</h3>
                <p className="text-foreground/70 text-center">
                  We implement the strategy with precision and attention to detail.
                </p>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                  <span className="font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Optimization</h3>
                <p className="text-foreground/70 text-center">
                  We continuously monitor and refine the strategy to maximize results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">We Help Businesses Grow Through Strategic Marketing</h2>
              <p className="text-foreground/70 mb-6">
                At Upscalable, we're passionate about helping businesses reach their full potential through innovative marketing strategies. With our team of experienced professionals and cutting-edge technology, we deliver exceptional results for our clients.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>10+ years of experience</span>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>500+ satisfied clients</span>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>50+ marketing experts</span>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Award-winning agency</span>
                </div>
              </div>
              
              <Button className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-lg">
                Learn More About Us
              </Button>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                    alt="Our team working together" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Growth Services Section */}
      <section id="social-growth" className="py-24 relative overflow-hidden bg-gradient-to-tr from-[#833ab4]/10 via-[#fd1d1d]/10 to-[#fcb045]/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#833ab4]/20 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-16 -right-20 w-60 h-60 bg-[#fd1d1d]/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-[#833ab4]/20 to-[#fd1d1d]/20 text-transparent bg-clip-text bg-gradient-to-r from-[#833ab4] to-[#fd1d1d] text-sm font-medium mb-4">
              Social Media Growth
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Boost Your Social Media Presence</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Accelerate your social media growth with our premium engagement services. Get real followers, likes, and comments to increase your brand's credibility and reach.
            </p>
          </div>
          
          {/* Social Media Platforms */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Instagram Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#833ab4] to-[#fd1d1d] rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-all duration-300 group-hover:translate-y-[-5px] h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Instagram Growth</h3>
                </div>
                
                {/* Service Options */}
                <div className="space-y-5 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Premium Followers</span>
                      <span className="text-primary font-semibold">From $9.99</span>
                    </div>
                    <p className="text-sm text-foreground/70">High-quality followers to boost your account credibility. Choose packages from 100 to 10,000 followers.</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Authentic Likes</span>
                      <span className="text-primary font-semibold">From $4.99</span>
                    </div>
                    <p className="text-sm text-foreground/70">Increase engagement with real likes on your posts. Available for your latest or selected posts.</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Targeted Comments</span>
                      <span className="text-primary font-semibold">From $12.99</span>
                    </div>
                    <p className="text-sm text-foreground/70">Custom, relevant comments to boost engagement and create authentic interactions.</p>
                  </div>
                </div>
                
                <Button className="w-full button-3d bg-gradient-to-r from-[#833ab4] to-[#fd1d1d] text-white border-0 hover:opacity-90">
                  Boost Instagram Now
                </Button>
              </div>
            </div>
            
            {/* TikTok Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00f2ea] to-[#ff0050] rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-all duration-300 group-hover:translate-y-[-5px] h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00f2ea] to-[#ff0050] flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">TikTok Growth</h3>
                </div>
                
                {/* Service Options */}
                <div className="space-y-5 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">TikTok Followers</span>
                      <span className="text-primary font-semibold">From $14.99</span>
                    </div>
                    <p className="text-sm text-foreground/70">Grow your TikTok following with real accounts that enhance your profile credibility.</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Video Views</span>
                      <span className="text-primary font-semibold">From $3.99</span>
                    </div>
                    <p className="text-sm text-foreground/70">Boost your video visibility with authentic views that help your content go viral.</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Engagement Package</span>
                      <span className="text-primary font-semibold">From $19.99</span>
                    </div>
                    <p className="text-sm text-foreground/70">Complete package with likes, comments, shares, and saves to maximize algorithm favor.</p>
                  </div>
                </div>
                
                <Button className="w-full button-3d bg-gradient-to-r from-[#00f2ea] to-[#ff0050] text-white border-0 hover:opacity-90">
                  Boost TikTok Now
                </Button>
              </div>
            </div>
            
            {/* YouTube Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF0000] to-[#282828] rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-all duration-300 group-hover:translate-y-[-5px] h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#FF0000] flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">YouTube Growth</h3>
                </div>
                
                {/* Service Options */}
                <div className="space-y-5 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Subscribers</span>
                      <span className="text-primary font-semibold">From $29.99</span>
                    </div>
                    <p className="text-sm text-foreground/70">Grow your channel with real subscribers to reach monetization requirements faster.</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Video Views</span>
                      <span className="text-primary font-semibold">From $7.99</span>
                    </div>
                    <p className="text-sm text-foreground/70">Increase your video visibility with high-retention views that boost your channel ranking.</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Comments & Likes</span>
                      <span className="text-primary font-semibold">From $16.99</span>
                    </div>
                    <p className="text-sm text-foreground/70">Enhance engagement with custom comments and likes that improve algorithm performance.</p>
                  </div>
                </div>
                
                <Button className="w-full button-3d bg-gradient-to-r from-[#FF0000] to-[#282828] text-white border-0 hover:opacity-90">
                  Boost YouTube Now
                </Button>
              </div>
            </div>
          </div>
          
          {/* Growth Strategy Bonus */}
          <div className="relative mb-10 gradient-border">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Free Social Media Growth Strategy</h3>
                  <p className="text-foreground/70 mb-4">
                    Get a complementary personalized growth strategy when you purchase any of our premium packages. Our experts will analyze your profile and provide actionable recommendations to maximize your social media presence.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Content optimization recommendations</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Best posting times for maximum engagement</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Profile optimization for better discoverability</span>
                    </li>
                  </ul>
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Learn More
                  </Button>
                </div>
                <div className="md:w-1/3">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30"></div>
                    <div className="relative bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                      <div className="text-center">
                        <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">+287%</span>
                        <p className="text-foreground/70">Average growth rate for our clients</p>
                      </div>
                      <div className="h-px bg-gray-200 dark:bg-gray-700 my-4"></div>
                      <div className="flex items-center justify-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-primary"></span>
                        <span className="text-sm text-foreground/70">Results within 24-48 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Compliance Notice */}
          <div className="text-center text-foreground/60 text-sm max-w-2xl mx-auto">
            <p>Our services comply with social media platform terms of service. We never request passwords or access to your accounts. All engagement comes from real users and authentic accounts.</p>
          </div>
        </div>
      </section>

      {/* Advanced Social Media Analytics Dashboard */}
      <section id="social-analytics" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
              Performance Analytics
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Track Your Social Growth</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Our advanced analytics dashboard provides real-time insights into your social media performance across all platforms.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-30"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 p-6 md:p-8 overflow-hidden">
              {/* Dashboard Tabs */}
              <div className="flex overflow-x-auto pb-4 mb-6 border-b border-gray-200 dark:border-gray-700 custom-scrollbar">
                <div className="flex space-x-4">
                  <button className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-white">Overview</button>
                  <button className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-foreground/70">Instagram</button>
                  <button className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-foreground/70">TikTok</button>
                  <button className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-foreground/70">YouTube</button>
                  <button className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-foreground/70">Twitter</button>
                  <button className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-foreground/70">Facebook</button>
                </div>
              </div>
              
              {/* Main Dashboard Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Growth Metrics */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">Growth Analytics</h3>
                      <p className="text-sm text-foreground/60">Last 30 days</p>
                    </div>
                    <select className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm rounded-lg focus:ring-primary focus:border-primary py-2 px-3">
                      <option>Last 30 days</option>
                      <option>Last 90 days</option>
                      <option>Last 6 months</option>
                      <option>Last year</option>
                    </select>
                  </div>
                  
                  {/* Growth Chart */}
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 h-80">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg h-full flex items-center justify-center">
                      {/* This would be a chart in a real application */}
                      <div className="text-center">
                        <p className="text-foreground font-semibold mb-2">Cross-Platform Growth Chart</p>
                        <p className="text-foreground/70 text-sm">Visualization showing follower and engagement growth</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Platform Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </div>
                        <span className="font-medium text-foreground">Instagram</span>
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-1">+1,257</div>
                      <div className="flex items-center text-sm">
                        <span className="text-green-500 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                          </svg>
                          24.5%
                        </span>
                        <span className="text-foreground/60 ml-2">vs. last month</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00f2ea] to-[#ff0050] flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                          </svg>
                        </div>
                        <span className="font-medium text-foreground">TikTok</span>
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-1">+3,842</div>
                      <div className="flex items-center text-sm">
                        <span className="text-green-500 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                          </svg>
                          67.8%
                        </span>
                        <span className="text-foreground/60 ml-2">vs. last month</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                          </svg>
                        </div>
                        <span className="font-medium text-foreground">YouTube</span>
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-1">+743</div>
                      <div className="flex items-center text-sm">
                        <span className="text-green-500 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                          </svg>
                          18.3%
                        </span>
                        <span className="text-foreground/60 ml-2">vs. last month</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Content Performance */}
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-foreground">Top Content Performance</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                      <div className="flex">
                        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-lg mr-3 flex-shrink-0"></div>
                        <div className="flex-grow">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium text-foreground">Product Launch Video</span>
                            <div className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-xs rounded-full">Instagram</div>
                          </div>
                          <p className="text-sm text-foreground/70 mb-2">2 days ago</p>
                          <div className="flex space-x-3 text-sm">
                            <div className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                              </svg>
                              <span>2.8k</span>
                            </div>
                            <div className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                              </svg>
                              <span>186</span>
                            </div>
                            <div className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                              </svg>
                              <span>43.2k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                      <div className="flex">
                        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-lg mr-3 flex-shrink-0"></div>
                        <div className="flex-grow">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium text-foreground">Behind the Scenes</span>
                            <div className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-xs rounded-full">TikTok</div>
                          </div>
                          <p className="text-sm text-foreground/70 mb-2">5 days ago</p>
                          <div className="flex space-x-3 text-sm">
                            <div className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                              </svg>
                              <span>24.5k</span>
                            </div>
                            <div className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                              </svg>
                              <span>3.7k</span>
                            </div>
                            <div className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                              </svg>
                              <span>2.1k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                      <div className="flex">
                        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-lg mr-3 flex-shrink-0"></div>
                        <div className="flex-grow">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium text-foreground">Tutorial: Advanced Tips</span>
                            <div className="px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 text-xs rounded-full">YouTube</div>
                          </div>
                          <p className="text-sm text-foreground/70 mb-2">1 week ago</p>
                          <div className="flex space-x-3 text-sm">
                            <div className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                              </svg>
                              <span>8.3k</span>
                            </div>
                            <div className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                              </svg>
                              <span>567</span>
                            </div>
                            <div className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                              </svg>
                              <span>128</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                    <h4 className="font-medium text-foreground mb-3">AI-Powered Recommendations</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span className="text-foreground/70">Your Instagram engagement peaks between 6-8PM. Consider scheduling posts during this timeframe.</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span className="text-foreground/70">Video content is outperforming images by 43%. Focus on creating more video content.</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span className="text-foreground/70">Hashtag performance analysis suggests adding #marketingtips and #digitalstrategy to your content.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
              Client Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">What Our Clients Say</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what some of our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-amber-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <p className="text-foreground/80 mb-6">
                "Working with Upscalable has been a game-changer for our business. Their strategic approach to marketing has helped us double our leads and increase conversions by 35% in just three months."
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-foreground/60">CEO, TechStart Inc.</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-amber-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <p className="text-foreground/80 mb-6">
                "The team at Upscalable truly understands our industry and has created a marketing strategy that sets us apart from our competitors. Their data-driven approach has been invaluable to our success."
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Michael Rodriguez</h4>
                  <p className="text-sm text-foreground/60">Marketing Director, GrowthLab</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-amber-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <p className="text-foreground/80 mb-6">
                "We've worked with several marketing agencies in the past, but none have delivered results like Upscalable. Their holistic approach to marketing has transformed our online presence and boosted our sales."
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Emily Chen</h4>
                  <p className="text-sm text-foreground/60">Founder, StyleHouse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Find answers to common questions about our marketing services and how we can help your business grow.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion className="space-y-4">
              <AccordionItem title="What makes your marketing agency different?" defaultOpen>
                <p className="text-foreground/70 mb-4">
                  We combine cutting-edge technology with strategic expertise to deliver measurable results. Our unique approach focuses on data-driven decision-making, personalized strategies tailored to your specific business needs, and continuous optimization to maximize your ROI.
                </p>
              </AccordionItem>
              
              <AccordionItem title="How long does it take to see results?">
                <p className="text-foreground/70 mb-4">
                  The timeline for results varies based on factors such as your industry, competition, current online presence, and the specific marketing channels we're leveraging. Some clients see initial results within a few weeks, while more competitive industries might take 3-6 months to see significant traction. We'll provide realistic timelines and regular progress updates throughout our partnership.
                </p>
              </AccordionItem>
              
              <AccordionItem title="Do you offer customized marketing packages?">
                <p className="text-foreground/70 mb-4">
                  Absolutely! We don't believe in one-size-fits-all solutions. After a thorough analysis of your business goals, target audience, and competitive landscape, we create a customized marketing strategy designed to address your specific needs and challenges.
                </p>
              </AccordionItem>
              
              <AccordionItem title="How do you measure the success of your marketing campaigns?">
                <p className="text-foreground/70 mb-4">
                  We establish clear KPIs (Key Performance Indicators) at the beginning of our partnership based on your business objectives. These might include metrics such as website traffic, conversion rates, lead generation, social media engagement, or ROI. We provide comprehensive reporting and analytics to track progress and measure success.
                </p>
              </AccordionItem>
              
              <AccordionItem title="Can you work with our in-house marketing team?">
                <p className="text-foreground/70 mb-4">
                  Yes, we frequently collaborate with in-house marketing teams. We can either complement your existing team's efforts by providing specialized expertise in specific areas, or we can take on full management of your marketing initiatives while maintaining close communication with your internal team.
                </p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Marketing AI Chatbot Section */}
      <section id="marketing-chatbot" className="py-24 relative overflow-hidden bg-gradient-to-br from-black to-gray-900">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-grid-pattern"></div>
          <div className="absolute h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-sm font-medium mb-4">
              Marketing Assistant
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get Expert Marketing Advice 24/7</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our AI-powered marketing chatbot provides instant answers to your marketing questions. Try it now for free.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-20"></div>
              <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                <div className="flex flex-col h-[600px]">
                  {/* Chat Header */}
                  <div className="bg-gray-800 p-4 border-b border-gray-700">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Marketing AI Assistant</h3>
                        <div className="flex items-center text-green-400 text-xs">
                          <span className="w-2 h-2 rounded-full bg-green-400 mr-1"></span>
                          Online
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="flex-grow p-4 overflow-y-auto custom-scrollbar space-y-6">
                    {/* Assistant Message */}
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="bg-gray-800 rounded-lg rounded-tl-none p-4 max-w-[80%]">
                        <p className="text-white">Hello! I'm your marketing assistant. How can I help with your marketing strategy today?</p>
                      </div>
                    </div>
                    
                    {/* User Message */}
                    <div className="flex items-start justify-end">
                      <div className="bg-primary/20 rounded-lg rounded-tr-none p-4 max-w-[80%]">
                        <p className="text-white">I need help with social media marketing for my new ecommerce business. What platforms should I focus on?</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0 ml-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Assistant Message */}
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="bg-gray-800 rounded-lg rounded-tl-none p-4 max-w-[80%]">
                        <p className="text-white">For an ecommerce business, I recommend focusing on these platforms:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-white">
                          <li><span className="font-semibold text-primary">Instagram:</span> Great for visual products with shopping features</li>
                          <li><span className="font-semibold text-primary">Pinterest:</span> Excellent for driving traffic to your product pages</li>
                          <li><span className="font-semibold text-primary">TikTok:</span> Ideal for reaching younger demographics with trending content</li>
                          <li><span className="font-semibold text-primary">Facebook:</span> Still valuable for targeted advertising and demographics over 30</li>
                        </ul>
                        <p className="mt-2 text-white">I recommend starting with 2 platforms where your target audience is most active. Which product category are you selling?</p>
                      </div>
                    </div>
                    
                    {/* User Message */}
                    <div className="flex items-start justify-end">
                      <div className="bg-primary/20 rounded-lg rounded-tr-none p-4 max-w-[80%]">
                        <p className="text-white">I'm selling eco-friendly home products. My target audience is mainly women aged 25-45.</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0 ml-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Assistant Message */}
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="bg-gray-800 rounded-lg rounded-tl-none p-4 max-w-[80%] space-y-3">
                        <p className="text-white">Perfect! For eco-friendly home products targeting women 25-45, I strongly recommend:</p>
                        
                        <div className="bg-gray-700 rounded p-3">
                          <p className="font-semibold text-white mb-1">Instagram + Pinterest Strategy</p>
                          <p className="text-gray-300">These platforms are ideal for your audience and product type. Women in this age group are highly active on both, and the visual nature allows you to showcase your products beautifully.</p>
                        </div>
                        
                        <p className="text-white">Content strategy recommendations:</p>
                        <ul className="list-disc list-inside space-y-1 text-white">
                          <li>Create lifestyle imagery showing products in use</li>
                          <li>Highlight eco-friendly benefits visually</li>
                          <li>Partner with micro-influencers in the sustainability space</li>
                          <li>Use Instagram Shopping and Pinterest Product Pins</li>
                          <li>Create educational content about sustainable living</li>
                        </ul>
                        
                        <p className="text-white">Would you like me to provide a detailed 30-day content calendar for these platforms?</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat Input */}
                  <div className="p-4 border-t border-gray-800 bg-gray-900">
                    <div className="flex items-center">
                      <input
                        type="text"
                        placeholder="Ask any marketing question..."
                        className="flex-grow bg-gray-800 text-white rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <button className="ml-2 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">Why Use Our Marketing AI Assistant?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 text-center">Instant Answers</h4>
                  <p className="text-gray-300 text-center">Get expert marketing advice 24/7 without waiting for human consultants.</p>
                </div>
                
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 text-center">Customized Strategies</h4>
                  <p className="text-gray-300 text-center">Receive tailored marketing advice based on your specific business needs and goals.</p>
                </div>
                
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 text-center">Data-Backed Insights</h4>
                  <p className="text-gray-300 text-center">Our AI is trained on the latest marketing trends and performance data across industries.</p>
                </div>
              </div>
              
              <Button className="mt-10 bg-gradient-to-r from-primary to-accent text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
                Get Full Access
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 -z-10"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                  Get In Touch
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Ready to Grow Your Business?</h2>
                <p className="text-foreground/70">
                  Contact us today to discuss how our marketing services can help you achieve your business goals. We're here to answer any questions you might have.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-foreground/70">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-foreground/70">info@upscalable.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-foreground/70">123 Marketing St, Digital City, DC 12345</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30"></div>
                <div className="relative bg-card p-8 rounded-2xl shadow-lg border border-card">
                  <h3 className="text-2xl font-bold mb-6 text-card-foreground">Send Us a Message</h3>
                  
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleContactChange}
                        placeholder="John Doe"
                        className="w-full bg-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={contactForm.email}
                        onChange={handleContactChange}
                        placeholder="john@example.com"
                        className="w-full bg-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={contactForm.message}
                        onChange={handleContactChange}
                        placeholder="How can we help you?"
                        className="w-full bg-transparent min-h-[120px]"
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary-light text-white">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}