import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={cn(
      "fixed w-full bg-white z-50",
      isScrolled ? "shadow-md navbar-fixed" : "shadow-sm"
    )}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <a className="text-navy font-bold text-2xl">upscalable</a>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#services" 
            className="text-navy hover:text-navy/70 font-medium transition-colors"
            onClick={(e) => {e.preventDefault(); handleNavLinkClick('services')}}
          >
            Services
          </a>
          <a 
            href="#process" 
            className="text-navy hover:text-navy/70 font-medium transition-colors"
            onClick={(e) => {e.preventDefault(); handleNavLinkClick('process')}}
          >
            Our Process
          </a>
          <a 
            href="#about" 
            className="text-navy hover:text-navy/70 font-medium transition-colors"
            onClick={(e) => {e.preventDefault(); handleNavLinkClick('about')}}
          >
            About Us
          </a>
          <a 
            href="#testimonials" 
            className="text-navy hover:text-navy/70 font-medium transition-colors"
            onClick={(e) => {e.preventDefault(); handleNavLinkClick('testimonials')}}
          >
            Testimonials
          </a>
          <a 
            href="#faq" 
            className="text-navy hover:text-navy/70 font-medium transition-colors"
            onClick={(e) => {e.preventDefault(); handleNavLinkClick('faq')}}
          >
            FAQ
          </a>
        </nav>
        
        <div className="hidden md:block">
          <Button className="bg-navy text-white hover:bg-[#1e293b] transition-colors">
            Book a Call
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-navy focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden bg-white w-full py-4 px-4 shadow-lg",
        isOpen ? "block" : "hidden"
      )}>
        <nav className="flex flex-col space-y-4">
          <a 
            href="#services" 
            className="text-navy hover:text-navy/70 font-medium transition-colors"
            onClick={(e) => {e.preventDefault(); handleNavLinkClick('services')}}
          >
            Services
          </a>
          <a 
            href="#process" 
            className="text-navy hover:text-navy/70 font-medium transition-colors"
            onClick={(e) => {e.preventDefault(); handleNavLinkClick('process')}}
          >
            Our Process
          </a>
          <a 
            href="#about" 
            className="text-navy hover:text-navy/70 font-medium transition-colors"
            onClick={(e) => {e.preventDefault(); handleNavLinkClick('about')}}
          >
            About Us
          </a>
          <a 
            href="#testimonials" 
            className="text-navy hover:text-navy/70 font-medium transition-colors"
            onClick={(e) => {e.preventDefault(); handleNavLinkClick('testimonials')}}
          >
            Testimonials
          </a>
          <a 
            href="#faq" 
            className="text-navy hover:text-navy/70 font-medium transition-colors"
            onClick={(e) => {e.preventDefault(); handleNavLinkClick('faq')}}
          >
            FAQ
          </a>
          <Button className="bg-navy text-white px-5 py-2 rounded-md font-medium hover:bg-[#1e293b] transition-colors w-full">
            Book a Call
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
