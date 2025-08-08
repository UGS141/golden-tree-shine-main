import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, Award, Target, Leaf, Zap, Shield, 
  Sun, Battery, Wifi, Lightbulb, Camera, Lock,
  Droplet, Factory, Home, Building2, CloudSun, ThumbsUp
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Happy Customers', icon: Users },
    { number: '1000+', label: 'Projects Completed', icon: Award },
    { number: '10+', label: 'Years Experience', icon: Target },
    { number: '50+', label: 'Expert Team', icon: Zap }
  ];

  const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Committed to green energy solutions that protect our environment for future generations.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Using only premium materials and certified installation practices for lasting results.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Trusted by thousands of customers with comprehensive warranties and 24/7 support.'
    }
  ];

  const services = [
    {
      icon: Sun,
      title: 'Solar Power Systems',
      description: 'Complete solar solutions for homes and businesses, from rooftop installations to large-scale projects.'
    },
    {
      icon: Battery,
      title: 'Solar Inverters',
      description: 'High-efficiency inverters that convert solar energy into usable electricity with smart monitoring.'
    },
    {
      icon: Droplet,
      title: 'Solar Water Pumping',
      description: 'Efficient water pumping solutions powered by solar energy for agriculture and residential use.'
    },
    {
      icon: Lock,
      title: 'Solar Fencing',
      description: 'Advanced perimeter security systems powered by solar energy for enhanced protection.'
    },
    {
      icon: Camera,
      title: 'Solar CCTV',
      description: 'Self-sustained surveillance systems with solar-powered cameras and 24/7 monitoring.'
    },
    {
      icon: Lightbulb,
      title: 'Solar Street Lights',
      description: 'Intelligent street lighting solutions that harness solar power for sustainable illumination.'
    }
  ];

  const industries = [
    { icon: Home, title: 'Residential', count: '300+' },
    { icon: Building2, title: 'Commercial', count: '150+' },
    { icon: Factory, title: 'Industrial', count: '50+' },
    { icon: CloudSun, title: 'Agricultural', count: '100+' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 hero-text-shadow">
              Powering the Future with <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Sustainable Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Since 2014, Golden Tree Life Spaces has been at the forefront of renewable energy and security solutions, 
              transforming how India powers its homes, businesses, and industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary animate-scale-in">
                Explore Our Services
              </Button>
              <Button size="lg" variant="outline" className="animate-scale-in delay-100">
                Watch Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in" 
                      style={{animationDelay: `${index * 100}ms`}}>
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-primary mb-2">{stat.number}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">Our Journey of Innovation</h2>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Founded in 2014, Golden Tree Life Spaces emerged from a simple vision: 
                to make sustainable energy and safety solutions accessible to every home and business.
              </p>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                What started as a small team of passionate engineers has grown into one of 
                India's most trusted names in solar and security solutions, serving over 500 
                satisfied customers across multiple cities.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Today, we continue to innovate and expand our services, always keeping our 
                core mission at heart: powering a sustainable future while keeping you safe.
              </p>
              <div className="mt-8 flex gap-4">
                <Button variant="outline" className="gap-2">
                  <ThumbsUp className="h-4 w-4" /> Customer Stories
                </Button>
                <Button variant="outline" className="gap-2">
                  <Award className="h-4 w-4" /> Our Achievements
                </Button>
              </div>
            </div>
            <div className="animate-scale-in relative group">
              <img 
                src="/lovable-uploads/0b16c232-edcd-4e4e-97ff-a1f5cc934d53.png" 
                alt="Golden Tree Logo" 
                className="w-full max-w-md mx-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Our Comprehensive Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our range of innovative solar and security solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-fade-in" 
                      style={{animationDelay: `${index * 100}ms`}}>
                  <CardContent className="p-8">
                    <Icon className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    <Button variant="ghost" className="mt-6 group-hover:translate-x-2 transition-transform duration-300">
                      Learn More →
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by diverse sectors across India
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in"
                      style={{animationDelay: `${index * 100}ms`}}>
                  <CardContent className="p-8">
                    <Icon className="h-16 w-16 text-primary mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-2">{industry.title}</h3>
                    <p className="text-3xl font-bold text-primary">{industry.count}</p>
                    <p className="text-muted-foreground">Projects</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that drive our innovation and service
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in" 
                      style={{animationDelay: `${index * 150}ms`}}>
                  <CardContent className="p-8">
                    <Icon className="h-16 w-16 text-primary mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Energy Future?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied customers who've made the switch to sustainable energy solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-2">
                Get Free Consultation
              </Button>
              <Button size="lg" className="bg-white/20 text-white hover:bg-white/30 border-2 border-white">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;