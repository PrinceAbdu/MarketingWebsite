import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionItem } from "@/components/ui/accordion-custom";
import { ChartLine, BarChart3, Users, Zap, Shield, Clock, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const Home = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await apiRequest("POST", "/api/contact", contactForm);
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });
      
      // Reset form
      setContactForm({
        name: "",
        email: "",
        company: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="bg-white text-navy smooth-scroll">
      {/* Hero Section */}
      <section className="pt-36 pb-24 relative overflow-hidden">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 animated-gradient opacity-95 z-0"></div>
        
        {/* Decorative geometric shapes */}
        <div className="absolute top-1/4 right-[5%] w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-[10%] w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
              <div className="inline-block mb-2 bg-primary/10 px-4 py-1 rounded-full">
                <span className="text-primary font-medium text-sm">BUSINESS GROWTH EXPERTS • EST 2025</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Scale Your Business With Intelligent Strategy
              </h1>
              <p className="text-lg md:text-xl mb-8 text-foreground/80 max-w-xl mx-auto lg:mx-0">
                We help ambitious business owners achieve sustainable growth through AI-powered systems, frameworks, and strategies that deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-primary text-white px-8 py-6 rounded-full font-semibold hover:bg-primary-light transition-all duration-300 glow-button text-lg">
                  <span>Book Free Strategy Call</span>
                  <span className="ml-2">→</span>
                </Button>
                <Button variant="outline" className="gradient-border px-8 py-6 rounded-full font-semibold hover:bg-primary/5 transition-all duration-300 text-lg">
                  Learn About Our Process
                </Button>
              </div>
              
              {/* Stats or social proof */}
              <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-1">500+</p>
                  <p className="text-sm text-foreground/70">Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-1">97%</p>
                  <p className="text-sm text-foreground/70">Success Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-1">24/7</p>
                  <p className="text-sm text-foreground/70">Support</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              {/* Main image with float animation */}
              <div className="relative z-10 float-element">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Business growth strategy session" 
                  className="rounded-2xl shadow-2xl w-full object-cover glass-card"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-4 rounded-lg shadow-lg">
                  <p className="text-sm font-semibold">Average Growth</p>
                  <p className="text-2xl font-bold">+147%</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-accent rounded-xl opacity-20 blur-sm"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary rounded-full opacity-10 blur-md"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Subtle patterned background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center mb-12">
            <span className="text-xs font-semibold tracking-wider text-primary uppercase mb-2">Innovation Partners</span>
            <h2 className="text-center text-2xl font-bold text-foreground mb-2">Trusted by Industry Leaders</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="group relative">
                <div className="w-full aspect-video glass-card rounded-xl flex items-center justify-center 
                                p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary/30">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl opacity-0 
                                  group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
                                 from-primary/80 to-accent/80 group-hover:from-primary group-hover:to-accent 
                                 transition-all duration-300 relative z-10">
                    LOGO {num}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-foreground/60 max-w-xl mx-auto">
              Partnering with forward-thinking organizations to deliver measurable business growth and digital transformation since 2025.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-1/3 left-[-10%] w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-[-5%] w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">SERVICES</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Our Growth Acceleration Services
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mb-6"></div>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-center">
              We offer cutting-edge solutions powered by AI and data analytics to help your business achieve unprecedented growth in today's digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 - Growth Strategy */}
            <div className="group hover-card glass-card rounded-xl p-1">
              <div className="bg-card rounded-lg p-8 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary blur-md opacity-20 rounded-full"></div>
                    <div className="relative bg-gradient-to-br from-primary to-accent w-16 h-16 rounded-xl flex items-center justify-center">
                      <ChartLine className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-foreground/50">01</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">AI-Powered Growth Strategy</h3>
                <p className="text-foreground/70 mb-6">
                  Predictive analytics and AI-driven roadmaps that align with your business goals and market conditions to achieve sustainable growth.
                </p>
                <a href="#" className="text-primary font-medium inline-flex items-center group-hover:opacity-80 transition-opacity">
                  <span className="mr-2">Explore Service</span>
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <ChevronRight className="h-3 w-3 text-primary" />
                  </div>
                </a>
              </div>
            </div>

            {/* Service Card 2 - Marketing Optimization */}
            <div className="group hover-card glass-card rounded-xl p-1">
              <div className="bg-card rounded-lg p-8 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary blur-md opacity-20 rounded-full"></div>
                    <div className="relative bg-gradient-to-br from-primary to-accent w-16 h-16 rounded-xl flex items-center justify-center">
                      <BarChart3 className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-foreground/50">02</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Neural Marketing Optimization</h3>
                <p className="text-foreground/70 mb-6">
                  Machine learning algorithms that optimize campaigns in real-time, driving qualified leads with unprecedented conversion rates.
                </p>
                <a href="#" className="text-primary font-medium inline-flex items-center group-hover:opacity-80 transition-opacity">
                  <span className="mr-2">Explore Service</span>
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <ChevronRight className="h-3 w-3 text-primary" />
                  </div>
                </a>
              </div>
            </div>

            {/* Service Card 3 - Team Development */}
            <div className="group hover-card glass-card rounded-xl p-1">
              <div className="bg-card rounded-lg p-8 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary blur-md opacity-20 rounded-full"></div>
                    <div className="relative bg-gradient-to-br from-primary to-accent w-16 h-16 rounded-xl flex items-center justify-center">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-foreground/50">03</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Augmented Team Development</h3>
                <p className="text-foreground/70 mb-6">
                  Advanced talent management and AI-assisted team augmentation to build high-performance teams that execute growth strategies flawlessly.
                </p>
                <a href="#" className="text-primary font-medium inline-flex items-center group-hover:opacity-80 transition-opacity">
                  <span className="mr-2">Explore Service</span>
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <ChevronRight className="h-3 w-3 text-primary" />
                  </div>
                </a>
              </div>
            </div>

            {/* Service Card 4 - Systems Implementation */}
            <div className="group hover-card glass-card rounded-xl p-1">
              <div className="bg-card rounded-lg p-8 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary blur-md opacity-20 rounded-full"></div>
                    <div className="relative bg-gradient-to-br from-primary to-accent w-16 h-16 rounded-xl flex items-center justify-center">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-foreground/50">04</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Intelligent Systems Integration</h3>
                <p className="text-foreground/70 mb-6">
                  Implement autonomous systems with predictive capabilities that eliminate bottlenecks and scale operations efficiently.
                </p>
                <a href="#" className="text-primary font-medium inline-flex items-center group-hover:opacity-80 transition-opacity">
                  <span className="mr-2">Explore Service</span>
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <ChevronRight className="h-3 w-3 text-primary" />
                  </div>
                </a>
              </div>
            </div>

            {/* Service Card 5 - Revenue Optimization */}
            <div className="group hover-card glass-card rounded-xl p-1">
              <div className="bg-card rounded-lg p-8 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary blur-md opacity-20 rounded-full"></div>
                    <div className="relative bg-gradient-to-br from-primary to-accent w-16 h-16 rounded-xl flex items-center justify-center">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-foreground/50">05</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Quantum Revenue Optimization</h3>
                <p className="text-foreground/70 mb-6">
                  Advanced analytics uncover hidden revenue opportunities and optimize pricing structures for maximum profitability.
                </p>
                <a href="#" className="text-primary font-medium inline-flex items-center group-hover:opacity-80 transition-opacity">
                  <span className="mr-2">Explore Service</span>
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <ChevronRight className="h-3 w-3 text-primary" />
                  </div>
                </a>
              </div>
            </div>

            {/* Service Card 6 - Executive Coaching */}
            <div className="group hover-card glass-card rounded-xl p-1">
              <div className="bg-card rounded-lg p-8 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary blur-md opacity-20 rounded-full"></div>
                    <div className="relative bg-gradient-to-br from-primary to-accent w-16 h-16 rounded-xl flex items-center justify-center">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-foreground/50">06</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Strategic Executive Guidance</h3>
                <p className="text-foreground/70 mb-6">
                  Personalized leadership development with AI-enhanced feedback systems to help you evolve into a visionary business leader.
                </p>
                <a href="#" className="text-primary font-medium inline-flex items-center group-hover:opacity-80 transition-opacity">
                  <span className="mr-2">Explore Service</span>
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <ChevronRight className="h-3 w-3 text-primary" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-secondary/20">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-1/3 right-[-10%] w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-[-5%] w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">PLATFORM FEATURES</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Cutting-Edge Marketing Tools
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mb-6"></div>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-center">
              Our platform provides advanced marketing features designed to help your business grow in the digital landscape of 2025.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Feature Image 1 */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30"></div>
                <div className="relative bg-card rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="attached_assets/C96F4D72-EEE8-4EDD-8B67-241D6494264E_1_105_c.jpeg" 
                    alt="AI-Powered Marketing Dashboard" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg text-sm">
                  <p className="font-semibold">Intelligent Analytics</p>
                </div>
              </div>
            </div>
            
            {/* Feature Description 1 */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <ChartLine className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Real-time Analytics Dashboard</h3>
                </div>
                
                <p className="text-foreground/70 text-lg leading-relaxed">
                  Our AI-powered analytics platform provides real-time insights into your marketing campaigns, 
                  customer behavior, and business performance. Track KPIs, identify trends, and make data-driven 
                  decisions with our intuitive visualization tools.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">✓</div>
                    <p>Customizable dashboards with drag-and-drop interface</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">✓</div>
                    <p>Predictive analytics to forecast future performance</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">✓</div>
                    <p>Automated reporting and insights generation</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">✓</div>
                    <p>Competitive intelligence and market trend analysis</p>
                  </li>
                </ul>
                
                <Button className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-light transition-all duration-300 glow-button">
                  <span>Explore Analytics Features</span>
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Feature Description 2 */}
            <div className="order-3">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Automated Marketing Campaigns</h3>
                </div>
                
                <p className="text-foreground/70 text-lg leading-relaxed">
                  Leverage our AI-driven campaign management system to automate your marketing efforts across multiple 
                  channels. Our platform optimizes campaign performance in real-time, ensuring maximum ROI on your marketing spend.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">✓</div>
                    <p>Multi-channel campaign orchestration and scheduling</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">✓</div>
                    <p>AI-powered audience segmentation and targeting</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">✓</div>
                    <p>Dynamic content personalization at scale</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">✓</div>
                    <p>Automated A/B testing and performance optimization</p>
                  </li>
                </ul>
                
                <Button className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-light transition-all duration-300 glow-button">
                  <span>Discover Campaign Tools</span>
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Feature Image 2 */}
            <div className="order-4">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30"></div>
                <div className="relative bg-card rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/attached_assets/A04425B8-9A67-4E83-BA7C-296CED2DAE7E_1_105_c.jpeg" 
                    alt="Automated Marketing Campaign Dashboard" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-accent text-white px-4 py-2 rounded-lg shadow-lg text-sm">
                  <p className="font-semibold">Smart Automation</p>
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

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Proven Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to help you achieve sustainable growth and transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow p-8 relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-[#0f172a] text-white flex items-center justify-center text-xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-3 mt-4">Assess</h3>
              <p className="text-gray-600">
                We conduct a comprehensive review of your business to identify strengths, weaknesses, and growth opportunities.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow p-8 relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-[#0f172a] text-white flex items-center justify-center text-xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-3 mt-4">Strategize</h3>
              <p className="text-gray-600">
                Together, we develop a customized growth roadmap with clear milestones and actionable steps.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow p-8 relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-[#0f172a] text-white flex items-center justify-center text-xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-3 mt-4">Implement</h3>
              <p className="text-gray-600">
                We help you execute the plan, providing hands-on support and guidance every step of the way.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-lg shadow p-8 relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-[#0f172a] text-white flex items-center justify-center text-xl font-bold">4</div>
              <h3 className="text-xl font-bold mb-3 mt-4">Measure</h3>
              <p className="text-gray-600">
                We track key performance indicators to ensure your business is making progress toward its goals.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-lg shadow p-8 relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-[#0f172a] text-white flex items-center justify-center text-xl font-bold">5</div>
              <h3 className="text-xl font-bold mb-3 mt-4">Optimize</h3>
              <p className="text-gray-600">
                Based on data and feedback, we refine strategies and processes to improve results over time.
              </p>
            </div>

            {/* Step 6 */}
            <div className="bg-white rounded-lg shadow p-8 relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-[#0f172a] text-white flex items-center justify-center text-xl font-bold">6</div>
              <h3 className="text-xl font-bold mb-3 mt-4">Scale</h3>
              <p className="text-gray-600">
                With proven systems in place, we help you expand your business and achieve sustainable long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Upscalable team members" 
                className="rounded-lg shadow-xl" 
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Upscalable</h2>
              <p className="text-lg text-gray-600 mb-6">
                Upscalable was founded by experienced entrepreneurs who have built and scaled multiple successful businesses. We understand the challenges you face because we've been there ourselves.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to help business owners achieve sustainable growth without the stress and overwhelm that often comes with scaling. We combine proven frameworks with practical execution to deliver real results.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-bold text-[#0f172a]">200+</div>
                  <p className="text-gray-600">Businesses Transformed</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0f172a]">$50M+</div>
                  <p className="text-gray-600">Revenue Generated</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0f172a]">15+</div>
                  <p className="text-gray-600">Years of Experience</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0f172a]">98%</div>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
              </div>
              <Button className="bg-[#0f172a] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1e293b] transition-colors">
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[#0f172a] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from business owners who have transformed their companies with our help.
            </p>
          </div>

          <div className="testimonial-slider">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="testimonial-card bg-[#1e293b] rounded-lg p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-6 text-gray-300">
                  "Working with Upscalable transformed our business. Their strategic guidance helped us double our revenue in just 9 months while building systems that reduced our workload."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-400 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-gray-300">CEO, TechStart Inc.</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="testimonial-card bg-[#1e293b] rounded-lg p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-6 text-gray-300">
                  "The marketing optimization strategy Upscalable created for us reduced our customer acquisition cost by 40% while increasing conversion rates. The ROI has been phenomenal."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-400 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Michael Chen</h4>
                    <p className="text-sm text-gray-300">Founder, Growth Solutions</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="testimonial-card bg-[#1e293b] rounded-lg p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-6 text-gray-300">
                  "The team development program Upscalable implemented has been a game-changer. Our team is more aligned, productive, and motivated, which has directly impacted our bottom line."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-400 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Jessica Martinez</h4>
                    <p className="text-sm text-gray-300">COO, Service Solutions Ltd.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-white text-[#0f172a] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Read More Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our services and approach to business growth.
            </p>
          </div>

          <Accordion>
            <AccordionItem title="Who is Upscalable for?" defaultOpen>
              <p className="text-gray-600">
                Upscalable is designed for established businesses with $500K-$10M in annual revenue that are looking to scale strategically. We work with service providers, e-commerce businesses, SaaS companies, and other B2B and B2C ventures that are ready for the next level of growth.
              </p>
            </AccordionItem>

            <AccordionItem title="How long does it take to see results?">
              <p className="text-gray-600">
                Most clients begin to see measurable improvements within the first 30-60 days of working with us. However, significant business transformation typically occurs over a 6-12 month period as we implement systems, optimize processes, and build team capabilities for sustainable growth.
              </p>
            </AccordionItem>

            <AccordionItem title="What makes Upscalable different from other consultants?">
              <p className="text-gray-600">
                Unlike traditional consultants who provide advice but leave implementation to you, we take a hands-on approach to help you execute the strategies we develop together. Our team has real-world experience building and scaling businesses, so we understand the practical challenges you face. We focus on measurable results and building sustainable systems rather than quick fixes.
              </p>
            </AccordionItem>

            <AccordionItem title="What is your pricing structure?">
              <p className="text-gray-600">
                We offer several engagement models to suit different business needs and stages. These include project-based work, monthly retainers, and performance-based arrangements. Each engagement is customized based on your specific goals and requirements. We'll discuss pricing details during your initial strategy call after understanding your business needs.
              </p>
            </AccordionItem>

            <AccordionItem title="How do we get started?">
              <p className="text-gray-600">
                The process begins with a free strategy call where we'll discuss your business, goals, and challenges. If there's a good fit, we'll conduct a comprehensive business assessment and develop a customized growth plan. From there, we'll work together to implement the strategies and systems needed to achieve your goals.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0f172a] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Book a free strategy call to discuss your business goals and how we can help you achieve them.
            </p>
            <Button className="bg-white text-[#0f172a] px-8 py-6 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors">
              Schedule Your Free Strategy Call
            </Button>
            <p className="mt-6 text-gray-300">
              No obligation. Limited spots available each month.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our services or want to learn more? Reach out to our team and we'll get back to you promptly.
              </p>
              
              <div className="flex items-start mb-6">
                <div className="mr-4 mt-1 text-[#0f172a]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="mr-4 mt-1 text-[#0f172a]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">info@upscalable.co</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="mr-4 mt-1 text-[#0f172a]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-600">123 Growth Street, Suite 100<br />San Francisco, CA 94103</p>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <a href="#" className="bg-gray-200 hover:bg-gray-300 transition-colors w-10 h-10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-[#0f172a]" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-200 hover:bg-gray-300 transition-colors w-10 h-10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-[#0f172a]" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-200 hover:bg-gray-300 transition-colors w-10 h-10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-[#0f172a]" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-200 hover:bg-gray-300 transition-colors w-10 h-10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-[#0f172a]" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <form className="bg-white p-8 rounded-lg shadow-lg" onSubmit={handleContactSubmit}>
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent" 
                    placeholder="John Smith"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent" 
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company Name</label>
                  <Input 
                    type="text" 
                    id="company" 
                    name="company"
                    value={contactForm.company}
                    onChange={handleContactFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent" 
                    placeholder="Your Company"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactFormChange}
                    rows={5} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent" 
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-[#0f172a] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1e293b] transition-colors">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
