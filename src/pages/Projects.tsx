import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Calendar, Zap, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Residential Solar Rooftop - 5kW',
      location: 'Bangalore, Karnataka',
      category: 'solar',
      date: 'December 2024',
      capacity: '5kW',
      savings: '₹8,000/month',
      image: '/src/assets/hero-solar.jpg',
      description: 'Complete solar installation with net metering for a modern villa.'
    },
    {
      id: 2,
      title: 'Commercial Security System',
      location: 'Mumbai, Maharashtra',
      category: 'security',
      date: 'November 2024',
      capacity: '16 Cameras',
      savings: '24/7 Security',
      image: '/src/assets/security-system.jpg',
      description: 'Advanced CCTV surveillance system for office complex.'
    },
    {
      id: 3,
      title: 'Solar Water Heater Installation',
      location: 'Chennai, Tamil Nadu',
      category: 'water',
      date: 'October 2024',
      capacity: '200L',
      savings: '₹2,500/month',
      image: '/src/assets/solar-water-heater.jpg',
      description: 'High-efficiency solar water heating system for residential use.'
    },
    {
      id: 4,
      title: 'Industrial Solar Plant - 100kW',
      location: 'Pune, Maharashtra',
      category: 'solar',
      date: 'September 2024',
      capacity: '100kW',
      savings: '₹1,50,000/month',
      image: '/src/assets/hero-solar.jpg',
      description: 'Large-scale solar installation for manufacturing facility.'
    },
    {
      id: 5,
      title: 'Smart Fencing System',
      location: 'Hyderabad, Telangana',
      category: 'security',
      date: 'August 2024',
      capacity: '500m Perimeter',
      savings: 'Enhanced Security',
      image: '/src/assets/security-system.jpg',
      description: 'Intelligent perimeter security for residential community.'
    },
    {
      id: 6,
      title: 'Solar Street Lighting',
      location: 'Delhi, NCR',
      category: 'lighting',
      date: 'July 2024',
      capacity: '50 Lights',
      savings: '₹25,000/month',
      image: '/src/assets/hero-solar.jpg',
      description: 'Automatic solar street lights for township roads.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'solar', label: 'Solar Systems', count: projects.filter(p => p.category === 'solar').length },
    { id: 'security', label: 'Security Systems', count: projects.filter(p => p.category === 'security').length },
    { id: 'water', label: 'Water Heaters', count: projects.filter(p => p.category === 'water').length },
    { id: 'lighting', label: 'Lighting', count: projects.filter(p => p.category === 'lighting').length }
  ];

  const getFilteredProjects = (category: string) => {
    return category === 'all' ? projects : projects.filter(p => p.category === category);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      solar: 'bg-yellow-100 text-yellow-800',
      security: 'bg-red-100 text-red-800',
      water: 'bg-blue-100 text-blue-800',
      lighting: 'bg-green-100 text-green-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Explore our portfolio of successful installations across India. 
              Real projects, real results, real savings for our customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary animate-scale-in">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="btn-accent">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '50MW+', label: 'Solar Capacity Installed' },
              { number: '98%', label: 'Customer Satisfaction' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-5 w-full max-w-2xl">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-xs sm:text-sm">
                    {category.label}
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {category.count}
                    </Badge>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {getFilteredProjects(category.id).map((project, index) => (
                    <Card 
                      key={project.id} 
                      className="card-hover animate-fade-in group cursor-pointer overflow-hidden"
                      style={{animationDelay: `${index * 100}ms`}}
                    >
                      <div className="relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className={getCategoryColor(project.category)}>
                            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {project.description}
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{project.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>{project.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Zap className="h-4 w-4 text-primary" />
                            <span>{project.capacity} • Saves {project.savings}</span>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full group">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get started with your energy transformation project today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                Book Free Site Visit
              </Button>
              <Button size="lg" className="bg-white/20 text-white hover:bg-white/30">
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;