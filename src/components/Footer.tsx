import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Phone, 
  Mail, 
  MapPin,
  Send
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div >
                <img 
              src="/lovable-uploads/GTlifelogo.png" 
              alt="Golden Tree Life Spaces" 
              className="h-12 w-12 object-contain"
               />
              </div>
              <div>
                <h3 className="text-lg font-bold">Golden Tree</h3>
                <p className="text-sm text-gray-300">Life Sciences</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Powering homes with sustainable energy solutions and advanced safety infrastructure. 
              Your trusted partner for solar installations and security systems.
            </p>
            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-primary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-primary">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Solar Rooftop Installations</li>
              <li className="text-gray-300">Solar Water Heaters</li>
              <li className="text-gray-300">Solar Street Lights</li>
              <li className="text-gray-300">Inverter Systems</li>
              <li className="text-gray-300">CC Cameras</li>
              <li className="text-gray-300">Smart Fencing</li>
              <li className="text-gray-300">Solar Water Pumps</li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 7993436520</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@goldentreelifespaces.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm">Nellore,Andhra Pradesh, India</span>
              </div>
            </div>

            <div className="pt-4">
              <h5 className="font-semibold mb-2">Newsletter</h5>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
                <Button size="icon" className="btn-accent">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Golden Tree Life Spaces. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;