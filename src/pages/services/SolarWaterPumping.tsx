import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Waves, 
  Droplets, 
  Leaf, 
  Settings,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const SolarWaterPumping = () => {
  const features = [
    { icon: Droplets, title: 'Reliable Water Supply', description: 'Consistent pumping for irrigation needs' },
    { icon: Leaf, title: 'Eco-Friendly Operation', description: 'Zero emissions and noise pollution' },
    { icon: Settings, title: 'Smart Controls', description: 'Automatic operation and flow control' }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-32 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-nature rounded-full">
                <Waves className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-playfair">
                Solar Water Pumping
              </h1>
            </div>
            <p className="text-xl mb-8 leading-relaxed">
              Irrigate your lands with the power of the sun. Our solar water pumps offer a reliable 
              solution for farmers and industries where grid power is inconsistent.
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-nature transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-nature rounded-full mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 font-playfair">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolarWaterPumping;