import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1e293b] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 mb-10 md:mb-0">
            <h2 className="text-xl font-bold mb-6">upscalable</h2>
            <p className="text-gray-300 mb-6">
              Helping ambitious business owners achieve sustainable growth through proven systems and strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/4 mb-10 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Growth Strategy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Marketing Optimization</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Team Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Systems Implementation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Revenue Optimization</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Executive Coaching</a></li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/4 mb-10 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Get the latest growth strategies and insights delivered to your inbox.
            </p>
            <form className="mb-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-[#0f172a] text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button type="submit" className="bg-white text-navy px-4 py-2 rounded-r-md font-medium hover:bg-gray-100 transition-colors">
                  Subscribe
                </Button>
              </div>
            </form>
            <p className="text-sm text-gray-400">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Upscalable. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
