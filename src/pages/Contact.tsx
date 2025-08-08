import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send,
  Zap
} from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 87654 32109'],
      description: 'Available 24/7 for emergency support'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@goldentreelifespaces.com', 'support@goldentreelifespaces.com'],
      description: 'We respond within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Green Energy Park', 'Bangalore, Karnataka - 560001'],
      description: 'Mon-Sat: 9 AM - 6 PM'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      details: ['+91 98765 43210'],
      description: 'Quick responses via WhatsApp'
    }
  ];

  const offices = [
    {
      city: 'Bangalore',
      address: '123 Green Energy Park, Whitefield, Bangalore - 560001',
      phone: '+91 98765 43210',
      email: 'bangalore@goldentreelifespaces.com'
    },
    {
      city: 'Mumbai',
      address: '456 Solar Solutions Center, Andheri East, Mumbai - 400001',
      phone: '+91 87654 32109',
      email: 'mumbai@goldentreelifespaces.com'
    },
    {
      city: 'Chennai',
      address: '789 Energy Hub, OMR Road, Chennai - 600001',
      phone: '+91 76543 21098',
      email: 'chennai@goldentreelifespaces.com'
    },
    {
      city: 'Delhi',
      address: '321 Power Solutions Plaza, Gurgaon, Delhi NCR - 122001',
      phone: '+91 65432 10987',
      email: 'delhi@goldentreelifespaces.com'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
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
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to transform your space with sustainable energy solutions? 
              We're here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary animate-scale-in">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
              <Button size="lg" variant="outline" className="btn-accent">
                <Zap className="mr-2 h-5 w-5" />
                Free Site Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card 
                  key={index} 
                  className="text-center card-hover animate-fade-in"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                    <div className="space-y-1 mb-3">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-primary font-medium">{detail}</p>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <Card className="card-hover">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6" data-netlify="true" name="contact">
                    <input type="hidden" name="form-name" value="contact" />
                    
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
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Subject
                        </label>
                        <Input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          placeholder="What can we help you with?"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your energy needs..."
                        rows={4}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full btn-primary">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Office Locations */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Our Locations</h2>
              
              {/* Google Map Embed */}
              <Card className="mb-8 card-hover">
                <CardContent className="p-0">
                  <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.7064!3d12.9698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzExLjMiTiA3N8KwNDInMjMuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                      width="100%"
                      height="256"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Golden Tree Life Spaces Location"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              {/* Office List */}
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">{office.city} Office</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-primary mt-0.5" />
                          <span className="text-muted-foreground">{office.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{office.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{office.email}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto card-hover animate-fade-in">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between font-semibold text-primary">
                      <span>Emergency Support</span>
                      <span>24/7 Available</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-muted-foreground">
                    Emergency support available round the clock for all our customers
                  </p>
                  <Button className="mt-4 btn-accent">
                    <Phone className="mr-2 h-4 w-4" />
                    Emergency Helpline
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Let's Power Your Future Together</h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to start your journey towards sustainable energy? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                Schedule Free Visit
              </Button>
              <Button size="lg" className="bg-white/20 text-white hover:bg-white/30">
                Get Instant Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
