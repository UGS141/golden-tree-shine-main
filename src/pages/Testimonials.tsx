import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, Quote, MapPin, User } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Testimonials = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    service: '',
    rating: '',
    testimonial: ''
  });

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Bangalore, Karnataka',
      service: 'Solar Rooftop Installation',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      testimonial: 'Excellent service! My electricity bill has reduced by 90%. The team was professional and completed the installation in just 2 days. Highly recommended!',
      date: 'December 2024'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Mumbai, Maharashtra',
      service: 'Solar Water Heater',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b829?w=150&h=150&fit=crop&crop=face',
      testimonial: 'Amazing product quality! Hot water is available instantly and we save ₹2,000 every month. The installation team was very knowledgeable.',
      date: 'November 2024'
    },
    {
      id: 3,
      name: 'Amit Patel',
      location: 'Ahmedabad, Gujarat',
      service: 'CCTV Security System',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      testimonial: 'Top-notch security solution! The mobile app works perfectly and the night vision quality is outstanding. Great customer support.',
      date: 'October 2024'
    },
    {
      id: 4,
      name: 'Sunita Reddy',
      location: 'Hyderabad, Telangana',
      service: 'Complete Solar Solution',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      testimonial: 'Best investment ever! Solar panels + water heater combo is working flawlessly. ROI achieved in 3 years. Excellent after-sales service.',
      date: 'September 2024'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      location: 'Delhi, NCR',
      service: 'Inverter System',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      testimonial: 'Reliable power backup during outages. Pure sine wave output protects all our appliances. Installation was quick and professional.',
      date: 'August 2024'
    },
    {
      id: 6,
      name: 'Kavitha Nair',
      location: 'Kochi, Kerala',
      service: 'Smart Fencing',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      testimonial: 'Innovative security solution! SMS alerts keep us informed 24/7. Solar-powered design is eco-friendly and cost-effective.',
      date: 'July 2024'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.location || !formData.service || !formData.rating || !formData.testimonial) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Thank You!",
      description: "Your testimonial has been submitted successfully. We appreciate your feedback!",
    });
    
    // Reset form
    setFormData({
      name: '',
      location: '',
      service: '',
      rating: '',
      testimonial: ''
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
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
              Customer <span className="text-gradient">Testimonials</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Real stories from real customers who've transformed their homes with 
              our energy and safety solutions.
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex">{renderStars(5)}</div>
              <span className="text-lg font-semibold">4.9/5</span>
              <span className="text-muted-foreground">(500+ Reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className="card-hover animate-fade-in relative"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.testimonial}"
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary font-medium">{testimonial.service}</span>
                    <span className="text-muted-foreground">{testimonial.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Testimonial Form */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4">Share Your Experience</h2>
              <p className="text-xl text-muted-foreground">
                Help others by sharing your experience with our services
              </p>
            </div>
            
            <Card className="card-hover animate-scale-in">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6" data-netlify="true" name="testimonial">
                  <input type="hidden" name="form-name" value="testimonial" />
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Location *
                      </label>
                      <Input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        placeholder="City, State"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Service Used *
                      </label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="solar-rooftop">Solar Rooftop Installation</SelectItem>
                          <SelectItem value="solar-water-heater">Solar Water Heater</SelectItem>
                          <SelectItem value="solar-street-lights">Solar Street Lights</SelectItem>
                          <SelectItem value="inverter-systems">Inverter Systems</SelectItem>
                          <SelectItem value="cctv-systems">CCTV Security Systems</SelectItem>
                          <SelectItem value="smart-fencing">Smart Fencing</SelectItem>
                          <SelectItem value="solar-water-pumps">Solar Water Pumps</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Rating *
                      </label>
                      <Select value={formData.rating} onValueChange={(value) => handleInputChange('rating', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Rate our service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">⭐⭐⭐⭐⭐ Excellent</SelectItem>
                          <SelectItem value="4">⭐⭐⭐⭐ Very Good</SelectItem>
                          <SelectItem value="3">⭐⭐⭐ Good</SelectItem>
                          <SelectItem value="2">⭐⭐ Fair</SelectItem>
                          <SelectItem value="1">⭐ Poor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Testimonial *
                    </label>
                    <Textarea
                      name="testimonial"
                      value={formData.testimonial}
                      onChange={(e) => handleInputChange('testimonial', e.target.value)}
                      placeholder="Share your experience with our services..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full btn-primary">
                    <User className="mr-2 h-5 w-5" />
                    Submit Testimonial
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Happy Customers?</h2>
            <p className="text-xl mb-8 opacity-90">
              Experience the same quality service that our customers love
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                Get Free Quote
              </Button>
              <Button size="lg" className="bg-white/20 text-white hover:bg-white/30">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;