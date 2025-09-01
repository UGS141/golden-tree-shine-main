import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { FreeVisitForm } from './FreeVisitForm';
import { GetQuoteForm } from './GetQuoteForm';


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [showVisitForm, setShowVisitForm] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background shadow-soft sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <a 
                href="tel:+919876543210" 
                className="flex items-center gap-2 hover:bg-primary-foreground/10 px-3 py-1.5 rounded-full transition-all"
              >
                <Phone className="h-5 w-5" />
                <span className="text-base font-medium">+91 7993436520</span>
              </a>
              <a 
                href="mailto:info@goldentreelifespaces.com" 
                className="flex items-center gap-2 hover:bg-primary-foreground/10 px-3 py-1.5 rounded-full transition-all"
              >
                <Mail className="h-5 w-5" />
                <span className="text-base font-medium">info@goldentreelifespaces.com</span>
              </a>
            </div>
            <div className="hidden md:block text-sm font-medium">
              <span>Certified Experts | EMI Available | Quality Materials</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/GTlifelogo.png" 
              alt="Golden Tree Life Spaces" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">Golden Tree</h1>
              <p className="text-sm text-muted-foreground">Life Sciences</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="bg-white text-yellow-700 border-2 border-yellow-500 hover:bg-yellow-50 hover:text-yellow-800 text-base font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => setShowQuoteForm(true)}
            >
              Get Quote
            </Button>
            <Button 
              className="bg-accent hover:bg-accent/90 text-white text-base font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => setShowVisitForm(true)}
            >
              Book Free Visit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t shadow-lg">
          <div className="container mx-auto px-4 py-6 space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 text-lg font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? 'text-primary' : 'text-foreground'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t">
              <Button 
                variant="outline" 
                className="w-full bg-white text-yellow-700 border-2 border-yellow-500 hover:bg-yellow-50 hover:text-yellow-800 text-lg font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => {
                  setShowQuoteForm(true);
                  setIsOpen(false);
                }}
              >
                Get Quote
              </Button>
              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-white text-lg font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => {
                  setShowVisitForm(true);
                  setIsOpen(false);
                }}
              >
                Book Free Visit
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Add Form Components */}
      <GetQuoteForm open={showQuoteForm} onOpenChange={setShowQuoteForm} />
      <FreeVisitForm open={showVisitForm} onOpenChange={setShowVisitForm} />
    </nav>
  );
};

export default Navigation;

