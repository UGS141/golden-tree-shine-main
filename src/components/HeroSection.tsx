import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Award } from 'lucide-react';

// Import all 7 images directly from assets
import heroSolarHome from '@/assets/hero-solar-home.jpg';
import rooftopSolar from '@/assets/rooftop-solar.jpg';
import heroSolar from '@/assets/hero-solar.jpg';
import solarWaterHeater from '@/assets/solar-water-heater.jpg';
import securitySystem from '@/assets/security-system.jpg';
import solarInverter from '@/assets/solar-inverter.jpg';
import solarStreetLights from '@/assets/solar-street-lights.jpg';

import { FreeVisitForm } from './FreeVisitForm';
import { GetQuoteForm } from './GetQuoteForm';

const slides = [
  {
    image: heroSolarHome,
    title: 'Solar Solutions for Homes',
    description: 'Efficient rooftop solar installations for sustainable living.',
  },
  {
    image: rooftopSolar,
    title: 'Rooftop Solar Power',
    description: 'Harness clean energy directly from your rooftop.',
  },
  {
    image: heroSolar,
    title: 'Complete Energy Solutions',
    description: 'Powering your homes with energy & safety.',
  },
  {
    image: solarWaterHeater,
    title: 'Solar Water Heaters',
    description: 'Save energy with advanced heating systems.',
  },
  {
    image: securitySystem,
    title: 'Security Systems',
    description: 'Smart CCTV and home security installations.',
  },
  {
    image: solarInverter,
    title: 'Solar Inverters',
    description: 'Reliable energy storage and smart power management.',
  },
  {
    image: solarStreetLights,
    title: 'Solar Street Lights',
    description: 'Sustainable outdoor lighting for streets and communities.',
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [showVisitForm, setShowVisitForm] = useState(false);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-4xl">
          <div className="text-white space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              {slides[current].title}{' '}
              <span className="text-accent">Energy & Safety</span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 max-w-2xl">
              {slides[current].description}
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

              {/* Forms */}
              <FreeVisitForm open={showVisitForm} onOpenChange={setShowVisitForm} />
              <GetQuoteForm open={showQuoteForm} onOpenChange={setShowQuoteForm} />

              <ArrowRight className="ml-2 h-5 w-5" />
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 bg-accent rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">Certified Experts</h3>
                  <p className="text-white/80 text-sm">Licensed & Trained</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 bg-accent rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">Quality Materials</h3>
                  <p className="text-white/80 text-sm">Premium Components</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 bg-accent rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">EMI Available</h3>
                  <p className="text-white/80 text-sm">Flexible Payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        {/* <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
          <button
            onClick={prevSlide}
            className="px-4 py-2 bg-white/30 hover:bg-white/50 rounded-full text-white font-bold"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="px-4 py-2 bg-white/30 hover:bg-white/50 rounded-full text-white font-bold"
          >
            ›
          </button>
        </div> */}

        {/* Dots Indicator */}
        {/* <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                current === index ? 'bg-yellow-400' : 'bg-white/50'
              }`}
            ></div>
          ))}
        </div>
      </div> */}

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
