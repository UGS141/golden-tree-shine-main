import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Award } from 'lucide-react';
import heroImage from '@/assets/hero-solar.jpg';

const HeroSection = () => {
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
              <Button size="lg" className="btn-accent text-lg px-8 py-4">
                Book Free Site Visit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
  size="lg"
  variant="outline"
  className="text-yellow-700 border-yellow-500 hover:bg-yellow-100 hover:text-yellow-900 text-lg font-semibold px-8 py-4 shadow-lg transition duration-300 ease-in-out"
>
  Get Instant Quote
</Button>



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