import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${waterHeaterImage})` }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-nature rounded-full">
                <Droplets className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold hero-text-shadow font-playfair">
                Solar Water Heaters
              </h1>
            </div>
            <p className="text-xl mb-8 hero-text-shadow leading-relaxed">
              Switch to solar water heating and cut down on your electricity or gas costs. 
              Our durable, low-maintenance solar heaters are ideal for households, apartments, and hotels.
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

      {/* Details Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-playfair">
              Efficient Solar Water Heating Solutions
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our solar water heating systems harness the sun's energy to provide hot water for your daily needs. 
                Using advanced thermal technology, these systems can heat water to temperatures up to 80°C, ensuring 
                you have hot water available whenever you need it.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The system consists of solar thermal collectors that absorb sunlight and convert it to heat, 
                which is then transferred to water through a heat exchanger. With insulated storage tanks and 
                automatic temperature control, you get consistent performance in all weather conditions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our installations include backup heating elements for cloudy days, ensuring uninterrupted hot water supply. 
                All systems come with comprehensive warranties and professional maintenance support.
              </p>
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {specifications.map((spec, index) => (
                <Card key={index} className="text-center hover:shadow-nature transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-primary mb-2">{spec.label}</h3>
                    <p className="text-muted-foreground">{spec.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Features Grid */}
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

      {/* Use Cases Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-playfair">
              Perfect for Various Applications
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-nature">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-playfair">
            Ready for Unlimited Hot Water?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get a customized solar water heating solution for your property. 
            Our experts will assess your hot water needs and recommend the perfect system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4 h-auto">
                Get Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-4 h-auto">
                View Installation Examples
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolarWaterHeaters;