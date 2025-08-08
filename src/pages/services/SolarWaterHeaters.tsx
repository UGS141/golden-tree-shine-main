import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Droplets, 
  DollarSign, 
  Thermometer, 
  Shield, 
  Clock,
  Home,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import waterHeaterImage from '@/assets/solar-water-heater.jpg';

const SolarWaterHeaters = () => {
  const features = [
    { icon: DollarSign, title: 'Reduce Energy Costs', description: 'Save up to 80% on water heating expenses' },
    { icon: Thermometer, title: 'Consistent Hot Water', description: 'Reliable hot water supply throughout the year' },
    { icon: Shield, title: '10-Year Warranty', description: 'Comprehensive coverage on all components' },
    { icon: Clock, title: 'Quick Installation', description: 'Professional setup completed in half a day' }
  ];

  const useCases = [
    'Residential homes and apartments',
    'Hotels and resorts',
    'Hospitals and healthcare facilities',
    'Educational institutions',
    'Gyms and fitness centers',
    'Restaurants and commercial kitchens'
  ];

  const specifications = [
    { label: 'Capacity Range', value: '100L to 500L' },
    { label: 'Material', value: 'Stainless Steel 316 Grade' },
    { label: 'Efficiency', value: 'Up to 70% energy saving' },
    { label: 'Temperature', value: 'Up to 80°C water temperature' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-fixed" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${waterHeaterImage})`,
          minHeight: '80vh'
        }}
      >
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <div className="flex items-center space-x-3 mb-6 animate-fadeIn">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-solar rounded-full shadow-lg transform hover:scale-105 transition-transform">
                <Droplets className="h-10 w-10 text-primary-foreground" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold hero-text-shadow">
                Solar Water Heaters
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 hero-text-shadow leading-relaxed opacity-90">
              Switch to solar water heating and cut down on your electricity or gas costs. 
              Our durable, low-maintenance solar heaters are ideal for households, apartments, and hotels.
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

      {/* Specifications with enhanced styling */}
      <section className="py-24 bg-gradient-to-b from-white to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Advanced <span className="text-gradient">Solar Technology</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {specifications.map((spec, index) => (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-solar transition-all duration-300 transform hover:-translate-y-2 border-none bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-primary mb-3">{spec.label}</h3>
                    <p className="text-lg text-muted-foreground">{spec.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Features Grid with enhanced styling */}
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

      {/* Use Cases Section with enhanced styling */}
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

      {/* CTA Section with enhanced styling */}
      <section className="py-24 bg-gradient-solar">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready for Unlimited Hot Water?
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get a customized solar water heating solution for your property. 
            Our experts will assess your hot water needs and recommend the perfect system.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-6 h-auto hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                Get Free Assessment
                <ArrowRight className="ml-2 h-5 w-5 animate-bounceRight" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-6 h-auto transform hover:-translate-y-1 transition-all"
              >
                View Installation Examples
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SolarWaterHeaters;