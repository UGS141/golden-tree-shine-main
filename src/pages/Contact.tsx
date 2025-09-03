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
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Formspree integration
  const [formState, handleFormspreeSubmit] = useForm("xeolzaqj");

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

  const handleSubmit = async (e: React.FormEvent) => {
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

    // Submit to Formspree
    await handleFormspreeSubmit(e);
    
    // If submission was successful
    if (formState.succeeded) {
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
    }
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
              <Button 
                size="lg" 
                className="btn-primary animate-scale-in"
                onClick={() => window.location.href = "tel:+917993436520"}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +91 7993436520
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-accent"
                onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdRdjDw8egRHqtBqGW8h4LFdBUmynSVDOQTWWBky2h53bcjDQ/viewform?usp=header", "_blank")}
              >
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
              <h2 className="text-3xl font-bold mb-6">Book Your Free Site Visit</h2>
              <Card className="card-hover overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    <div className="bg-gradient-to-br from-primary to-accent p-8 text-white">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-3">Why Book a Site Visit?</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <div className="mr-2 mt-1 h-5 w-5 bg-white/20 rounded-full flex items-center justify-center">✓</div>
                            <span>Personalized energy assessment</span>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-2 mt-1 h-5 w-5 bg-white/20 rounded-full flex items-center justify-center">✓</div>
                            <span>Custom solutions for your space</span>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-2 mt-1 h-5 w-5 bg-white/20 rounded-full flex items-center justify-center">✓</div>
                            <span>Detailed cost estimates</span>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-2 mt-1 h-5 w-5 bg-white/20 rounded-full flex items-center justify-center">✓</div>
                            <span>Expert consultation</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">What to expect:</h4>
                        <p className="text-white/80 text-sm">Our expert will visit your location, assess your energy needs, and provide a detailed proposal within 24 hours.</p>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Zap className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Schedule Now</h3>
                        <p className="text-muted-foreground">Fill out our form and we'll reach you within 24 hours</p>
                      </div>
                      
                      <div className="space-y-4">
                        <Button 
                          onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdRdjDw8egRHqtBqGW8h4LFdBUmynSVDOQTWWBky2h53bcjDQ/viewform?usp=header", "_blank")} 
                          size="lg" 
                          className="w-full btn-primary animate-pulse"
                        >
                          <Zap className="mr-2 h-5 w-5" />
                          Start Filling the Form
                        </Button>
                        
                        <div className="text-center text-sm text-muted-foreground">
                          <p>Or call us directly at</p>
                          <p className="font-semibold text-primary">+91 7993436520</p>
                        </div>
                      </div>
                    </div>
                  </div>
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.5762262489723!2d79.98073731482347!3d14.439246089898786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf3f7d753e301%3A0x8f20eef1fb51b4fe!2sGOLDEN%20TREE%20LIFE%20SPACES%20SOLAR%20IN%20NELLORE!5e0!3m2!1sen!2sin!4v1652345678901!5m2!1sen!2sin"
                      width="100%"
                      height="256"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Golden Tree Life Spaces Location 1"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
              
              {/* Second Location */}
              <Card className="mb-8 card-hover">
                <CardContent className="p-0">
                  <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.8762262489723!2d79.97073731482347!3d14.429246089898786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf50391cefcf9%3A0xf8a3c0fd82bb70e2!2sGolden%20tree%20life%20spaces%20%26%20Cement%20and%20Steel!5e0!3m2!1sen!2sin!4v1652345678901!5m2!1sen!2sin"
                      width="100%"
                      height="256"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Golden Tree Life Spaces & Cement and Steel Location"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              
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
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdRdjDw8egRHqtBqGW8h4LFdBUmynSVDOQTWWBky2h53bcjDQ/viewform?usp=header", "_blank")}
              >
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
