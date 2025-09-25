import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Images
import heroImage from '@/assets/hero-solar.jpg';
import serviceSolar from '@/assets/service-solar.jpg';
import serviceSecurity from '@/assets/service-security.jpg';
import serviceEnergy from '@/assets/service-energy.jpg';
import heroSolarHome from '@/assets/hero-solar-home.jpg';
import rooftopSolar from '@/assets/rooftop-solar.jpg';
import serviceBattery from '@/assets/service-battery.jpg';
import serviceInverter from '@/assets/service-inverter.jpg';

import { FreeVisitForm } from './FreeVisitForm';
import { GetQuoteForm } from './GetQuoteForm';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Hero Solar Home",
    description: "Reliable home solar systems designed for maximum efficiency.",
    image: heroSolarHome,
  },
  {
    title: "Rooftop Solar Solutions",
    description: "Generate clean energy directly from your rooftop.",
    image: rooftopSolar,
  },
  {
    title: "Solar Panel Installation",
    description: "Power your home with reliable solar solutions and reduce electricity bills.",
    image: serviceSolar,
  },
  {
    title: "Smart Security Systems",
    description: "Protect your family with modern surveillance and smart alarm systems.",
    image: serviceSecurity,
  },
  {
    title: "Energy Management",
    description: "Optimize energy consumption with advanced monitoring and EMI options.",
    image: serviceEnergy,
  },
  {
    title: "Battery Backup Systems",
    description: "Ensure uninterrupted power supply with advanced solar batteries.",
    image: serviceBattery,
  },
  {
    title: "Inverter Solutions",
    description: "Smart inverters that guarantee reliable power conversion.",
    image: serviceInverter,
  },
];

const HeroSection = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [showVisitForm, setShowVisitForm] = useState(false);

  // Slider state
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % services.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);

  // Auto-slide every 6s
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Solar panel installation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-4xl">
          <div className="text-white space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Powering Your Homes with{' '}
              <span className="text-accent">Energy & Safety</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 max-w-2xl">
              Professional solar installations, security systems, and energy solutions 
              for modern homes. Certified experts with EMI options available.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="btn-accent text-lg px-8 py-4"
                onClick={() => setShowVisitForm(true)}
              >
                Book Free Site Visit
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-yellow-700 border-yellow-500 hover:bg-yellow-100 hover:text-yellow-900 text-lg font-semibold px-8 py-4 shadow-lg transition duration-300 ease-in-out"
                onClick={() => setShowQuoteForm(true)}
              >
                Get Instant Quote
              </Button>

              {/* Add the forms */}
              <FreeVisitForm open={showVisitForm} onOpenChange={setShowVisitForm} />
              <GetQuoteForm open={showQuoteForm} onOpenChange={setShowQuoteForm} />
            </div>
          </div>
        </div>
      </div>

      {/* === Services Slider Section === */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl">
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img 
                src={services[currentIndex].image} 
                alt={services[currentIndex].title} 
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-3xl font-bold text-white mb-3">
                  {services[currentIndex].title}
                </h2>
                <p className="text-lg text-white/90 max-w-2xl">
                  {services[currentIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <button 
            onClick={prevSlide} 
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
