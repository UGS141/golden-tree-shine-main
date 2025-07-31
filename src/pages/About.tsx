import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Target, Leaf, Zap, Shield } from 'lucide-react';

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

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About <span className="text-gradient">Golden Tree</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Leading the way in sustainable energy and safety solutions since 2014. 
              We're passionate about creating a greener, safer future for all.
            </p>
            <Button size="lg" className="btn-accent animate-scale-in">
              Schedule Free Consultation
            </Button>
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
                <Card key={index} className="text-center card-hover animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
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
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
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
            </div>
            <div className="animate-scale-in">
              <img 
                src="/lovable-uploads/0b16c232-edcd-4e4e-97ff-a1f5cc934d53.png" 
                alt="Golden Tree Logo" 
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center card-hover animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
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
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Ready to Go Green?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied customers who've made the switch to sustainable energy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                Get Free Quote
              </Button>
              <Button size="lg" className="bg-white/20 text-white hover:bg-white/30">
                Book Site Visit
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