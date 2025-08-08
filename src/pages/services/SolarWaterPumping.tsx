import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Waves, 
  Droplets, 
  Leaf, 
  Settings,
  ArrowRight,
  CheckCircle,
  Sun,
  Timer,
  Zap,
  Wrench,
  Award
} from 'lucide-react';
import pumpingImage from '@/assets/solar-farm-pumping.jpg';

const SolarWaterPumping = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { icon: Droplets, title: 'Reliable Water Supply', description: 'Consistent pumping for irrigation needs' },
    { icon: Leaf, title: 'Eco-Friendly Operation', description: 'Zero emissions and noise pollution' },
    { icon: Settings, title: 'Smart Controls', description: 'Automatic operation and flow control' },
    { icon: Sun, title: 'Solar Powered', description: 'Harness clean solar energy for pumping' }
  ];

  const benefits = [
    { icon: Zap, title: 'Energy Savings', description: 'Reduce or eliminate electricity costs' },
    { icon: Timer, title: '24/7 Operation', description: 'Continuous water supply with battery backup' },
    { icon: Wrench, title: 'Low Maintenance', description: 'Minimal moving parts, less wear and tear' },
    { icon: Award, title: 'Long Lifespan', description: '20+ years of reliable operation' }
  ];

  const applications = [
    'Agricultural Irrigation',
    'Livestock Water Supply',
    'Drip Irrigation Systems',
    'Community Water Supply',
    'Industrial Process Water',
    'Fish Farming'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center animate-fadeIn min-h-[90vh] flex items-center" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${pumpingImage})`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <div className="flex items-center space-x-3 mb-6 animate-slideIn">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-water rounded-full transform hover:scale-110 transition-transform">
                <Waves className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold hero-text-shadow font-playfair">
                Solar Water Pumping
              </h1>
            </div>
            <p className="text-xl mb-8 hero-text-shadow leading-relaxed animate-slideIn delay-100">
              Harness the power of the sun for efficient and reliable water pumping solutions. 
              Perfect for agriculture, livestock, and community water supply needs.
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="btn-water text-lg px-8 py-4 h-auto hover:shadow-xl transform hover:-translate-y-1 transition-all animate-slideIn delay-200"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 animate-bounceRight" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50 animate-slideUp">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-playfair">
            Why Choose Our <span className="text-gradient-water">Solar Pumps</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-none bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-gradient-water rounded-full">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white animate-slideUp">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center font-playfair">
              Advanced <span className="text-gradient-water">Features</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="hover:shadow-water transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-gradient-water rounded-full flex-shrink-0">
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

      {/* Applications Section */}
      <section className="py-20 bg-blue-50 animate-slideUp">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-playfair">
              Perfect for Various <span className="text-gradient-water">Applications</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {applications.map((app, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/80 rounded-lg hover:shadow-water transition-all duration-300">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-lg">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-water animate-slideUp relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">
            Ready to Upgrade Your Water Pumping System?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a customized solar pumping solution designed for your specific needs.
            Our experts will analyze your requirements and provide the best solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4 h-auto">
                Get Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 h-auto">
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolarWaterPumping;