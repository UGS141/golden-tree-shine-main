import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Wrench, Leaf } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: Award },
    { number: "50+", label: "Expert Technicians", icon: Users },
    { number: "10+", label: "Years Experience", icon: Wrench },
    { number: "98%", label: "Customer Satisfaction", icon: Leaf }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Why Choose <span className="text-gradient">Golden Tree?</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are committed to providing sustainable energy solutions and advanced safety 
                infrastructure that transforms homes and businesses into smart, secure, and 
                energy-efficient spaces.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Certified Excellence</h3>
                  <p className="text-muted-foreground">
                    Our team consists of certified professionals with extensive training in solar technology and security systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Leaf className="h-6 w-6 text-accent-dark" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Sustainable Solutions</h3>
                  <p className="text-muted-foreground">
                    We prioritize eco-friendly technologies that reduce carbon footprint and energy costs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Complete Support</h3>
                  <p className="text-muted-foreground">
                    From consultation to installation and maintenance, we provide end-to-end service support.
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="btn-accent">
              Schedule Free Consultation
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="card-hover bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <CardContent className="p-8 text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;