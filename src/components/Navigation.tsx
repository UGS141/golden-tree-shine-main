import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

// Add these imports at the top
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
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>info@goldentreelifespaces.com</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
            <span>Certified Experts | EMI Available | Quality Materials</span>
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
              <p className="text-sm text-muted-foreground">Life Spaces</p>
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
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="outline" 
              className="text-yellow-700 border-yellow-500 hover:bg-yellow-100 hover:text-yellow-900 text-lg font-semibold px-8 py-4 shadow-lg transition duration-300 ease-in-out"
              onClick={() => setShowQuoteForm(true)}
            >
              Get Quote
            </Button>
            <Button 
              className="btn-accent"
              onClick={() => setShowVisitForm(true)}
            >
              Book Free Visit
            </Button>
          </div>

          {/* Add the forms */}
          <FreeVisitForm open={showVisitForm} onOpenChange={setShowVisitForm} />
          <GetQuoteForm open={showQuoteForm} onOpenChange={setShowQuoteForm} />

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? 'text-primary' : 'text-foreground'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" className="btn-primary">
                Get Quote
              </Button>
              <Button className="btn-accent">
                Book Free Visit
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;