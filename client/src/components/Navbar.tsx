import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronRight } from "lucide-react";
import { useTheme } from "@/components/ui/theme-provider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = (id: string) => {
    setIsOpen(false);
    
    // Smooth scroll to the element
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#features", label: "Features" },
    { href: "#service-options", label: "Service Options" },
    { href: "#ai-assistant", label: "AI Assistant" },
    { href: "#data-platform", label: "Customer Data" },
    { href: "#process", label: "Our Process" },
    { href: "#about", label: "About Us" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" }
  ];

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled 
        ? "navbar-fixed py-2" 
        : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-primary font-bold text-2xl flex items-center glow-text">
          <Link href="/">
            <span className="mr-1 text-3xl">⚡</span>upscalable
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="text-foreground hover:text-primary font-medium transition-colors relative group"
              onClick={(e) => {e.preventDefault(); handleNavLinkClick(item.href.substring(1))}}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            variant="outline" 
            size="icon" 
            className="rounded-full w-9 h-9 border-primary/20"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <span className="text-yellow-400 text-xl">☀️</span>
            ) : (
              <span className="text-blue-900 text-xl">🌙</span>
            )}
          </Button>
          
          <Button className="bg-primary text-white hover:bg-primary-light glow-button rounded-full px-6 group">
            <span>Book a Call</span> 
            <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <Button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            variant="outline" 
            size="icon" 
            className="rounded-full w-9 h-9 border-primary/20"
          >
            {theme === 'dark' ? (
              <span className="text-yellow-400 text-xl">☀️</span>
            ) : (
              <span className="text-blue-900 text-xl">🌙</span>
            )}
          </Button>
          
          <button 
            className="text-foreground focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden w-full py-6 px-4",
        isOpen 
          ? "glass-effect translate-y-0 opacity-100 transition-all duration-300 ease-out" 
          : "translate-y-[-10px] opacity-0 pointer-events-none transition-all duration-200 ease-in"
      )}>
        <nav className="flex flex-col space-y-6 items-center">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="text-foreground hover:text-primary font-medium text-lg transition-colors"
              onClick={(e) => {e.preventDefault(); handleNavLinkClick(item.href.substring(1))}}
            >
              {item.label}
            </a>
          ))}
          <Button className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-light transition-colors w-full glow-button mt-2">
            Book a Call <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;