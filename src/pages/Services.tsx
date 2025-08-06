import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Sun, 
  Droplets, 
  Lightbulb, 
  Battery, 
  Camera, 
  Shield, 
  Waves,
  Check,
  ArrowRight
} from 'lucide-react';


const Services = () => {
  const services = [
    {
      icon: Sun,
      title: 'Solar Rooftop Installation',
      description: 'Complete solar panel installation with grid-tie inverters for maximum energy savings.',
      features: ['25-year warranty', 'Net metering support', 'Government subsidies', 'EMI options'],
      price: 'Starting ₹65,000',
      popular: true
    },
    {
      icon: Droplets,
      title: 'Solar Water Heaters',
      description: 'Efficient solar water heating systems for residential and commercial use.',
      features: ['Instant hot water', 'Zero electricity bills', '15-year warranty', 'Weather resistant'],
      price: 'Starting ₹25,000',
      popular: false
    },
    {
      icon: Lightbulb,
      title: 'Solar Street Lights',
      description: 'Automatic solar street lighting solutions for roads, parks, and communities.',
      features: ['Auto on/off', 'Motion sensors', 'Weather proof', '5-year warranty'],
      price: 'Starting ₹8,000',
      popular: false
    },
    {
      icon: Battery,
      title: 'Inverter Systems',
      description: 'Reliable power backup solutions with advanced battery management.',
      features: ['Pure sine wave', 'LCD display', 'Overload protection', '3-year warranty'],
      price: 'Starting ₹15,000',
      popular: false
    },
    {
      icon: Camera,
      title: 'CCTV Security Systems',
      description: 'Advanced surveillance systems with remote monitoring capabilities.',
      features: ['HD recording', 'Night vision', 'Mobile app', 'Cloud storage'],
      price: 'Starting ₹12,000',
      popular: true
    },
    {
      icon: Shield,
      title: 'Smart Fencing',
      description: 'Intelligent perimeter security with intrusion detection alerts.',
      features: ['Motion detection', 'SMS alerts', 'Solar powered', 'Weather resistant'],
      price: 'Starting ₹35,000',
      popular: false
    },
    {
      icon: Waves,
      title: 'Solar Water Pumps',
      description: 'Efficient solar-powered water pumping for agriculture and domestic use.',
      features: ['Variable speed', 'Dry run protection', 'Remote monitoring', '7-year warranty'],
      price: 'Starting ₹45,000',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive energy and safety solutions tailored for your needs. 
              From solar installations to security systems, we've got you covered.
            </p>
            <Button size="lg" className="btn-accent animate-scale-in">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent, and professional service delivery
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Free Consultation', desc: 'Site visit and requirement analysis' },
              { step: '02', title: 'Custom Proposal', desc: 'Detailed quote with specifications' },
              { step: '03', title: 'Professional Installation', desc: 'Expert installation by certified team' },
              { step: '04', title: 'Ongoing Support', desc: 'Maintenance and 24/7 customer support' }
            ].map((process, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                <p className="text-muted-foreground">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Book a free consultation and get a customized solution for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                Book Free Visit
              </Button>
              <Button size="lg" className="bg-white/20 text-white hover:bg-white/30">
                Call Now: +91 98765 43210
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;