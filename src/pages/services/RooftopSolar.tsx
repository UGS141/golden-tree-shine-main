import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Home, 
  Zap, 
  DollarSign, 
  Leaf, 
  Shield, 
  Clock,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import rooftopImage from '@/assets/rooftop-solar.jpg';

const RooftopSolar = () => {
  const features = [
    { icon: DollarSign, title: 'Reduce Electricity Bills', description: 'Save up to 90% on your monthly electricity costs' },
    { icon: Leaf, title: 'Environmental Impact', description: 'Reduce your carbon footprint significantly' },
    { icon: Shield, title: '25-Year Warranty', description: 'Long-term protection and peace of mind' },
    { icon: Clock, title: 'Quick Installation', description: 'Professional setup completed in 1-2 days' }
  ];

  const useCases = [
    'Residential homes and apartments',
    'Commercial buildings and offices',
    'Industrial facilities and warehouses',
    'Educational institutions',
    'Healthcare facilities',
    'Retail establishments'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section - Enhanced with better gradient overlay */}
      <section 
        className="relative py-32 bg-cover bg-center bg-fixed" // Added bg-fixed for parallax effect
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${rooftopImage})`,
          minHeight: '80vh' // Increased height for better visual impact
        }}
      >
        <div className="container mx-auto px-4 h-full flex items-center"> {/* Added flex for vertical centering */}
          <div className="max-w-3xl text-white">
            <div className="flex items-center space-x-3 mb-6 animate-fadeIn"> {/* Added animation */}
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-solar rounded-full shadow-lg transform hover:scale-105 transition-transform"> {/* Enhanced icon container */}
                <Home className="h-10 w-10 text-primary-foreground" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold hero-text-shadow">
                Rooftop Solar Systems
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 hero-text-shadow leading-relaxed opacity-90">
              Our rooftop solar systems are designed for homes and buildings to generate clean electricity 
              and reduce monthly bills. With high-efficiency panels and smart inverters, you can power your 
              life with sunlight.
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="btn-solar text-lg px-8 py-6 h-auto hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 animate-bounceRight" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid - Enhanced with animations and better spacing */}
      <section className="py-24 bg-gradient-to-b from-white to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Why Choose Our <span className="text-gradient">Rooftop Solar</span> Solutions?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card 
                    key={index} 
                    className="hover:shadow-solar transition-all duration-300 transform hover:-translate-y-2 border-none bg-white/80 backdrop-blur-sm"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-solar rounded-xl shadow-lg flex-shrink-0 transform hover:rotate-6 transition-transform">
                          <IconComponent className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                          <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section - Enhanced with better visual hierarchy */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Perfect for <span className="text-gradient">Various Applications</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/80 transition-all duration-300"
                >
                  <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
                  <span className="text-xl">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-solar">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Harness Solar Power?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get a customized solar solution designed specifically for your rooftop. 
            Our experts will assess your property and provide a detailed proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4 h-auto">
                Get Free Site Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-4 h-auto">
                View Installation Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RooftopSolar;