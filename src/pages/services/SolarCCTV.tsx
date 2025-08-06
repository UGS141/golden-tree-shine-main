import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Camera, 
  Wifi, 
  Cloud, 
  Shield, 
  Battery,
  Moon,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import cctvImage from '@/assets/solar-cctv.jpg';

const SolarCCTV = () => {
  const features = [
    { icon: Camera, title: '4K Resolution', description: 'Ultra-high definition recording and live streaming' },
    { icon: Cloud, title: 'Cloud Storage', description: 'Secure online backup with mobile access' },
    { icon: Moon, title: 'Night Vision', description: 'Clear recording in complete darkness' },
    { icon: Battery, title: '7-Day Backup', description: 'Continuous operation during cloudy weather' }
  ];

  const useCases = [
    'Remote property monitoring',
    'Construction site security',
    'Agricultural farm surveillance',
    'Perimeter security systems',
    'Wildlife monitoring',
    'Off-grid location security'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${cctvImage})` }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-nature rounded-full">
                <Camera className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold hero-text-shadow font-playfair">
                Solar CC Camera
              </h1>
            </div>
            <p className="text-xl mb-8 hero-text-shadow leading-relaxed">
              Keep your property safe 24/7 with solar-powered surveillance systems. 
              No wiring, no downtime — just secure, off-grid CCTV with cloud storage options.
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-nature text-lg px-8 py-4 h-auto">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-playfair">
              Advanced Solar Security Solutions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="hover:shadow-nature transition-all duration-300">
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

      <section className="py-20 bg-gradient-nature">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-playfair">
            Complete Security Coverage
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get a customized solar security solution for your property.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 h-auto">
              Get Security Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SolarCCTV;