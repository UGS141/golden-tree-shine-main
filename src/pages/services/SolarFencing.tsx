import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Shield, 
  Zap, 
  Leaf, 
  Settings, 
  Battery,
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Ruler,
  Clock,
  Sun
} from 'lucide-react';
import fencingImage from '@/assets/solar-fencing.jpg';

const SolarFencing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { icon: Zap, title: 'High Voltage Protection', description: '6000V to 10000V electric shock deterrent' },
    { icon: Leaf, title: 'Eco-Friendly Solution', description: 'Clean energy with zero carbon emissions' },
    { icon: Battery, title: 'Extended Battery Life', description: 'Up to 21 days backup during cloudy weather' },
    { icon: Settings, title: 'Smart Controls', description: 'Remote monitoring and automatic operation' }
  ];

  const useCases = [
    'Agricultural farmland protection',
    'Industrial property boundaries',
    'Residential estate perimeters',
    'Wildlife conservation areas',
    'Commercial property security',
    'Government and military installations'
  ];

  const specifications = [
    { label: 'Voltage Output', value: '6kV to 10kV', icon: Zap },
    { label: 'Solar Panel', value: '20W to 40W', icon: Sun },
    { label: 'Battery Backup', value: '15-21 Days', icon: Clock },
    { label: 'Fence Length', value: 'Up to 5km per unit', icon: Ruler }
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center animate-fadeIn min-h-[90vh] flex items-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${fencingImage})`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <div className="flex items-center space-x-3 mb-6 animate-slideIn">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-nature rounded-full transform hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-primary-foreground animate-pulse" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold hero-text-shadow font-playfair">
                Solar Fencing
              </h1>
            </div>
            <p className="text-xl mb-8 hero-text-shadow leading-relaxed animate-slideIn delay-100">
              Protect your farms and boundaries with solar-powered electric fencing. 
              Ideal for agricultural lands and estates, these solutions are eco-friendly and highly effective.
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="btn-nature text-lg px-8 py-4 h-auto hover:shadow-xl transform hover:-translate-y-1 transition-all animate-slideIn delay-200"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 animate-bounceRight" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 bg-gradient-to-b from-white to-green-50 animate-slideUp">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-playfair">
              Advanced <span className="text-gradient-nature">Solar Electric Fencing</span>
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our solar electric fencing systems provide a powerful and humane deterrent against intruders 
                and wildlife. Using high-voltage pulses, these fences deliver a memorable but non-lethal shock 
                that effectively discourages trespassing while remaining completely safe for humans and animals.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Powered entirely by solar energy, these systems operate independently of the electrical grid, 
                making them perfect for remote locations. The built-in battery backup ensures continuous 
                operation even during extended cloudy periods, providing 24/7 protection for your property.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each system includes warning signs, grounding equipment, and professional installation to ensure 
                compliance with safety regulations. Remote monitoring capabilities allow you to check system 
                status and receive alerts about any fence breaches or maintenance needs.
              </p>
            </div>

            {/* Warning Section */}
            <Card className="mb-16 border-orange-200 bg-orange-50/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0 animate-pulse" />
                  <div>
                    <h3 className="font-semibold text-orange-800 mb-2">Safety Notice</h3>
                    <p className="text-orange-700">
                      Solar electric fencing systems generate high voltage. Professional installation and 
                      proper warning signage are mandatory. All installations comply with local safety regulations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Specifications */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {specifications.map((spec, index) => {
                const IconComponent = spec.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-nature transition-all duration-300 transform hover:-translate-y-2 border-none bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-gradient-nature rounded-full">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">{spec.label}</h3>
                      <p className="text-muted-foreground">{spec.value}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="hover:shadow-nature transition-all duration-300 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-gradient-nature rounded-full flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 font-playfair">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
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

      {/* Use Cases Section */}
      <section className="py-24 bg-gradient-to-b from-green-50 to-white animate-slideUp">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-playfair">
              Perfect for Various <span className="text-gradient-nature">Applications</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/80 rounded-lg hover:shadow-nature transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-1">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-lg">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-nature animate-slideUp relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-green-500/20 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">
            Secure Your Property Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a customized solar fencing solution for your property protection needs. 
            Our experts will design and install the perfect security system for your land.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-4 h-auto hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                Get Security Assessment
                <ArrowRight className="ml-2 h-5 w-5 animate-bounceRight" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 h-auto hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                View Protection Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolarFencing;