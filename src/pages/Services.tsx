import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { GetQuoteForm } from '@/components/GetQuoteForm';
import { Calendar, FileText, LineChart, Home } from "lucide-react";
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

const steps = [
  {
    number: 1,
    icon: <Calendar className="h-8 w-8 text-green-600" />,
    title: "Book a Free Consultation",
    desc: "Get system sizing, pricing, subsidy, and finance guidance."
  },
  {
    number: 2,
    icon: <FileText className="h-8 w-8 text-green-600" />,
    title: "Review Proposal & Confirm Order",
    desc: "Approve costing and design easily via our platform."
  },
  {
    number: 3,
    icon: <LineChart className="h-8 w-8 text-green-600" />,
    title: "Track Project Installation",
    desc: "End-to-end project management including subsidy and net-metering."
  },
  {
    number: 4,
    icon: <Home className="h-8 w-8 text-green-600" />,
    title: "Your Site is Solar Powered",
    desc: "24×7 support with proactive maintenance via our app."
  }
];

const Services = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      icon: Sun,
      title: 'Solar Rooftop',
      description: 'Complete solar panel installation with grid-tie inverters for maximum energy savings.',
      features: ['25-year warranty', 'Net metering support', 'Government subsidies', 'EMI options'],
      popular: true,
      path: '/services/RooftopSolar'
    },
    {
      icon: Droplets,
      title: 'Solar Water Heaters',
      description: 'Efficient solar water heating systems for residential and commercial use.',
      features: ['Instant hot water', 'Zero electricity bills', '15-year warranty', 'Weather resistant'],
      popular: false,
      path: '/services/SolarWaterHeaters'
    },
    {
      icon: Lightbulb,
      title: 'Solar Street Lights',
      description: 'Automatic solar street lighting solutions for roads, parks, and communities.',
      features: ['Auto on/off', 'Motion sensors', 'Weather proof', '5-year warranty'],
      popular: false,
      path: '/services/SolarStreetLights'
    },
    {
      icon: Battery,
      title: 'Inverter Systems',
      description: 'Reliable power backup solutions with advanced battery management.',
      features: ['Pure sine wave', 'LCD display', 'Overload protection', '3-year warranty'],
      popular: false,
      path: '/services/SolarInverters'
    },
    {
      icon: Camera,
      title: 'CCTV Security Systems',
      description: 'Advanced surveillance systems with remote monitoring capabilities.',
      features: ['HD recording', 'Night vision', 'Mobile app', 'Cloud storage'],
      popular: true,
      path: '/services/SolarCCTV'
    },
    {
      icon: Shield,
      title: 'Smart Fencing',
      description: 'Intelligent perimeter security with intrusion detection alerts.',
      features: ['Motion detection', 'SMS alerts', 'Solar powered', 'Weather resistant'],
      popular: false,
      path: '/services/SolarFencing'
    },
    {
      icon: Waves,
      title: 'Solar Water Pumps',
      description: 'Efficient solar-powered water pumping for agriculture and domestic use.',
      features: ['Variable speed', 'Dry run protection', 'Remote monitoring', '7-year warranty'],
      popular: false,
      path: '/services/SolarWaterPumping'
    }
  ];

  return (
    <div className="min-h-screen" onClick={scrollToTop}>
      <Navigation />
      

      {/* Simple Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-primary">Core Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive energy and safety solutions designed to power and protect your
              spaces with cutting-edge technology and professional expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {simpleServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary rounded-lg flex items-center justify-center mb-6 transform transition-all duration-500 hover:rotate-12 hover:scale-110">
                    <Icon className="h-8 w-8 text-white animate-pulse" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={service.path} className="text-primary font-medium hover:underline inline-flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className={`relative card-hover animate-fade-in group ${service.popular ? 'ring-2 ring-primary' : ''}`}
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  {service.popular && (
                    <Badge className="absolute -top-3 left-4 bg-primary text-white">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary via-primary/80 to-accent rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg hover:shadow-primary/50">
                      <Icon className="h-8 w-8 text-white group-hover:animate-bounce" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t space-y-3">
                      <Link 
                        to={service.path} 
                        className="w-full inline-block text-center text-primary font-medium hover:underline"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 inline-block" />
                      </Link>
                      <Button 
                        className="w-full btn-primary group"
                        onClick={() => {
                          setSelectedService(service.title);
                          setShowQuoteForm(true);
                        }}
                      >
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Choose Solar in <span className="text-green-600">4 Easy Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent, and professional service delivery
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute -top-4 left-6 bg-green-600 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full shadow-md">
                {step.number}
              </div>
              <div className="flex flex-col items-start mt-6">
                {step.icon}
                <h3 className="text-lg font-bold mt-4">{step.title}</h3>
                <p className="text-muted-foreground mt-2">{step.desc}</p>
              </div>
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

      {/* Add GetQuoteForm */}
      <GetQuoteForm 
        open={showQuoteForm} 
        onOpenChange={setShowQuoteForm} 
      />
      <Footer />
    </div>
  );
};

export default Services;
const simpleServices = [ ];
