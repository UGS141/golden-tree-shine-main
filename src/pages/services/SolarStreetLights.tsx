import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Lightbulb, 
  Battery, 
  Zap, 
  Leaf, 
  Clock,
  MapPin,
  ArrowRight,
  CheckCircle,
  Sun,
  Shield,
  Wrench,
  Award,
  Ruler,
  Zap as ZapIcon,
  Battery as BatteryIcon,
  Sun as SunIcon
} from 'lucide-react';
import streetLightsImage from '@/assets/solar-street-lights.jpg';

const SolarStreetLights = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { icon: Battery, title: 'Smart Battery Backup', description: 'Up to 3 days of continuous operation' },
    { icon: Zap, title: 'Motion Sensors', description: 'Intelligent brightness control for energy saving' },
    { icon: Leaf, title: 'Zero Grid Dependency', description: 'Completely off-grid lighting solution' },
    { icon: Clock, title: 'Auto Operation', description: 'Automatic dusk to dawn functionality' }
  ];

  const useCases = [
    'Street and highway lighting',
    'Parks and recreational areas',
    'Campus and institutional lighting',
    'Rural and remote area illumination',
    'Parking lots and commercial spaces',
    'Pathway and garden lighting'
  ];

  const specifications = [
    { icon: Ruler, label: 'Height', value: '6-12 meters' },
    { icon: ZapIcon, label: 'Power', value: '30-120W' },
    { icon: BatteryIcon, label: 'Battery', value: '12V/24V Lithium' },
    { icon: SunIcon, label: 'Panel', value: '50-150W' }
  ];

  const benefits = [
    { icon: Sun, title: 'Energy Efficient', description: 'Up to 90% reduction in energy costs' },
    { icon: Shield, title: 'Weatherproof Design', description: 'Built to withstand extreme conditions' },
    { icon: Wrench, title: 'Easy Maintenance', description: 'Minimal upkeep required' },
    { icon: Award, title: 'Quality Assured', description: '10-year performance warranty' }
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navigation />
      
      {/* Hero Section with enhanced styling */}
      <section 
        className="relative py-32 bg-cover bg-center bg-fixed" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${streetLightsImage})`,
          minHeight: '80vh'
        }}
      >
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <div className="flex items-center space-x-3 mb-6 animate-fadeIn">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-solar rounded-full shadow-lg transform hover:scale-105 transition-transform">
                <Lightbulb className="h-10 w-10 text-primary-foreground" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold hero-text-shadow">
                Solar Street Lights
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 hero-text-shadow leading-relaxed opacity-90">
              We offer smart, sensor-based solar street lighting systems that light up streets, 
              campuses, and rural areas with zero grid dependency.
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

      {/* Benefits Section - New */}
      <section className="py-24 bg-gradient-to-b from-white to-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Why Choose Our <span className="text-gradient">Solar Street Lights</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card 
                  key={index} 
                  className="hover:shadow-solar transition-all duration-300 transform hover:-translate-y-2 border-none bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-solar rounded-xl shadow-lg flex-shrink-0 transform hover:rotate-6 transition-transform mb-6 mx-auto">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Smart <span className="text-gradient">Features</span>
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

      {/* Details Section with Specifications */}
      <section className="py-24 bg-white animate-slideUp">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-playfair">
              Technical Specifications
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our solar street lights combine high-efficiency LED technology with smart solar panels and 
                advanced lithium battery systems. Each unit operates independently, requiring no electrical 
                grid connection or trenching for cables, making installation quick and cost-effective.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Equipped with motion sensors and light controllers, these systems automatically adjust brightness 
                based on ambient conditions and movement detection. This intelligent operation extends battery life 
                and provides optimal illumination when needed most.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                All our street lights feature weatherproof construction, anti-theft design, and remote monitoring 
                capabilities. With minimal maintenance requirements and a 10-year lifespan, they provide excellent 
                return on investment for any lighting project.
              </p>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {specifications.map((spec, index) => {
                const IconComponent = spec.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-nature transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-nature rounded-full mb-4 mx-auto">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">{spec.label}</h3>
                      <p className="text-muted-foreground">{spec.value}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-muted/50 animate-slideUp">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-playfair">
              Ideal for Various Lighting Applications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-lg">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process - New Section */}
      <section className="py-24 bg-white animate-slideUp">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-playfair">
            Simple <span className="text-primary">Installation Process</span>
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-nature rounded-full flex items-center justify-center">
                <MapPin className="h-8 w-8 text-white" />
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Site Assessment</h3>
              <p className="text-muted-foreground">We analyze your location and lighting requirements</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-nature rounded-full flex items-center justify-center">
                <Wrench className="h-8 w-8 text-white" />
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Quick Installation</h3>
              <p className="text-muted-foreground">Professional setup with minimal disruption</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-nature rounded-full flex items-center justify-center">
                <Zap className="h-8 w-8 text-white" />
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Ready to Use</h3>
              <p className="text-muted-foreground">Immediate operation with automatic controls</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with enhanced styling */}
      <section className="py-20 bg-gradient-nature animate-slideUp relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-playfair">
            Illuminate Your Space with Solar
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get a customized solar street lighting solution for your area. 
            Our team will design and install the perfect lighting system for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4 h-auto">
                Get Lighting Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-4 h-auto">
                View Lighting Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolarStreetLights;