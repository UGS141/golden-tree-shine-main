import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Sun, 
  Droplets, 
  Lightbulb, 
  Battery, 
  Camera, 
  Shield, 
  Waves,
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ServicesSection from "@/components/ServicesSection";
import React from "react";

const ServicesSection = () => {
  const services = [
    {
      icon: Sun,
      title: "Solar Rooftop Installations",
      description: "Complete solar panel systems for residential and commercial properties with maximum efficiency.",
      features: ["25-year warranty", "Grid-tied systems", "Net metering support"],
      path: "/services/RooftopSolar"
    },
    {
      icon: Droplets,
      title: "Solar Water Heaters",
      description: "Energy-efficient water heating solutions using solar technology for year-round hot water.",
      features: ["Instant hot water", "Low maintenance", "Energy savings up to 80%"],
      path: "/services/SolarWaterHeaters"
    },
    {
      icon: Lightbulb,
      title: "Solar Street Lights",
      description: "Automatic LED street lighting systems powered by solar energy for outdoor spaces.",
      features: ["Motion sensors", "Weather resistant", "10+ hour backup"],
      path: "/services/SolarStreetLights"
    },
    {
      icon: Battery,
      title: "Inverter Systems",
      description: "Reliable power backup solutions with advanced inverter technology for uninterrupted supply.",
      features: ["Pure sine wave", "Smart charging", "Multiple capacity options"],
      path: "/services/SolarInverters"
    },
    {
      icon: Camera,
      title: "CC Cameras",
      description: "Advanced surveillance systems with HD recording and remote monitoring capabilities.",
      features: ["Night vision", "Mobile app access", "Cloud storage"],
      path: "/services/SolarCCTV"
    },
    {
      icon: Shield,
      title: "Smart Fencing",
      description: "Intelligent security fencing systems with automated alerts and monitoring features.",
      features: ["Intrusion detection", "Smart alerts", "Weather resistant"],
      path: "/services/SolarFencing"
    },
    {
      icon: Waves,
      title: "Solar Water Pumps",
      description: "Efficient water pumping solutions powered by solar energy for agricultural and domestic use.",
      features: ["Variable speed", "Low maintenance", "Remote monitoring"],
      path: "/services/SolarWaterPumping"
    }
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Core Services</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive energy and safety solutions designed to power and protect your spaces
            with cutting-edge technology and professional expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="card-hover border-0 bg-background">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={service.path}>
                    <Button variant="outline" className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/services">
            <Button size="lg" className="btn-primary text-lg px-8 py-4">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
