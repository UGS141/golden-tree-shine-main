import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    serviceType: '',
    message: ''
  });
  const { toast } = useToast();

  const serviceOptions = [
    'Solar Rooftop Installation',
    'Solar Water Heater',
    'Solar Street Lights',
    'Inverter Systems',
    'CC Cameras',
    'Smart Fencing',
    'Solar Water Pumps'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Please fill required fields",
        description: "Name, phone, and email are required.",
        variant: "destructive"
      });
      return;
    }

    // Here you would integrate with Netlify forms
    toast({
      title: "Form submitted successfully!",
      description: "We'll contact you within 24 hours for a free consultation.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
  
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
    
    
    
    
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get Your <span className="text-gradient">Free Consultation</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to transform your space with energy and safety solutions? 
            Book a free site visit and get a customized quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Call Us</h3>
                    <p className="text-muted-foreground">+91 7993436520</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-accent-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email Us</h3>
                    <p className="text-muted-foreground">info@goldentreelifespaces.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Visit Us</h3>
                    <p className="text-muted-foreground">Nellore, Andhra Pradesh</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-accent-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Working Hours</h3>
                    <p className="text-muted-foreground">Mon-Sat: 9AM-7PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Book Your Free Site Visit</CardTitle>
              </CardHeader>
              <CardContent>
                <form 
                  name="contact-form"
                  className="space-y-6"
                 netlify >
                  <input type="hidden" name="form-name" value="contact-form" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Location
                      </label>
                      <Input
                        name="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        placeholder="City, State"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Type
                    </label>
                    <select 
                      name="serviceType" 
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      value={formData.serviceType}
                      onChange={(e) => handleInputChange('serviceType', e.target.value)}
                    >
                      <option value="">Select service you're interested in</option>
                      {serviceOptions.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full btn-primary text-lg py-4">
                    Schedule Free Consultation
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Required fields. We'll contact you within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
