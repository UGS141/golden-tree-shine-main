import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import WhyChooseUs from "@/components/WhyChooseUs";


// Import all images
import streetLightsImage from '@/assets/solar-street-lights.jpg';
import heroImage from '@/assets/hero-solar.jpg';
import rooftopImage from '@/assets/rooftop-solar.jpg';
import cctvImage from '@/assets/solar-cctv.jpg';
import pumpingImage from '@/assets/solar-farm-pumping.jpg';
import fencingImage from '@/assets/solar-fencing.jpg';
import inverterImage from '@/assets/solar-inverter.jpg';
import waterHeaterImage from '@/assets/solar-water-heater.jpg';

// Import videos
import videoW1 from '@/assets/Golden-tree-videoW1.mp4';
import videoW2 from '@/assets/Golden-tree-videoW2.mp4';
import videoW3 from '@/assets/Golden-tree-videoW3.mp4';

const GallerySection = () => {
  // Images for the automatic slider
  const images = [
    streetLightsImage,
    heroImage,
    rooftopImage,
    cctvImage,
    pumpingImage,
    fencingImage,
    inverterImage,
    waterHeaterImage
  ];

  // Videos for the gallery
  const videos = [
    {
      src: videoW1,
      title: "Solar Installation Project",
      description: "Professional solar panel installation by our expert team"
    },
    {
      src: videoW2,
      title: "Commercial Solar Project",
      description: "Large-scale commercial solar installation"
    },
    {
      src: videoW3,
      title: "Residential Solar Setup",
      description: "Complete residential solar power solution"
    }
  ];

  // State for image slider
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState({});
  const videoRefs = useRef([]);

  // Auto-advance the slider every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Handle video play/pause
  const toggleVideo = (index) => {
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
        setIsPlaying(prev => ({ ...prev, [index]: true }));
      } else {
        videoElement.pause();
        setIsPlaying(prev => ({ ...prev, [index]: false }));
      }
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our <span className="text-gradient">Project Gallery</span>
        </h2>

        {/* YouTube Video Section */}
        {/* <div className="max-w-4xl mx-auto mb-16">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/sk_gnf9e2gY?autoplay=0"
              title="MGB Mall Solar Installation"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-semibold mb-3">MGB Mall, Nellore - 250kWp Solar Installation</h3>
            <p className="text-lg text-muted-foreground mb-4">
              One of our landmark projects showcasing our expertise in commercial solar solutions.
              This installation demonstrates our commitment to sustainable energy solutions for businesses.
            </p>
            <a 
              href="https://youtu.be/sk_gnf9e2gY?si=9lsoVaLBkgFf3541" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Watch on YouTube
            </a>
          </div>
        </div> */}

        {/* Automatic Image Slider */}
        <div className="max-w-5xl mx-auto mb-16">
          {/* <h3 className="text-3xl font-semibold text-center mb-8">Our Project Gallery</h3> */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
              {images.map((image, index) => (
                <div key={index} className="min-w-full h-full">
                  <img 
                    src={image} 
                    alt={`Project Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Indicator Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button 
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Video Gallery */}
        <h3 className="text-3xl font-semibold text-center mb-8">Project Videos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {videos.map((video, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <video 
                    ref={el => videoRefs.current[index] = el}
                    src={video.src}
                    className="object-cover w-full h-full"
                    loop
                    muted
                    playsInline
                  />
                  <div 
                    className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
                    onClick={() => toggleVideo(index)}
                  >
                    <PlayCircle className={`h-16 w-16 text-white transition-opacity ${isPlaying[index] ? 'opacity-0' : 'opacity-100'}`} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                  <p className="text-muted-foreground">{video.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Cards */}
        <h3 className="text-3xl font-semibold text-center mb-8">Featured Installations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="relative aspect-video">
                <img 
                  src={streetLightsImage} 
                  alt="Solar Street Lights Project"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Solar Street Lights Installation</h3>
                <p className="text-muted-foreground">Comprehensive street lighting solution for urban areas</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="relative aspect-video">
                <img 
                  src={cctvImage} 
                  alt="Solar CCTV Project"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Solar CCTV Systems</h3>
                <p className="text-muted-foreground">Advanced security solutions powered by solar energy</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="relative aspect-video">
                <img 
                  src={rooftopImage} 
                  alt="Rooftop Solar Project"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Rooftop Solar Installation</h3>
                <p className="text-muted-foreground">Complete rooftop solar power solutions for homes and businesses</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Link to="/projects">
            <Button 
              size="lg" 
              className="bg-gradient-solar hover:shadow-lg transition-shadow"
            >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
