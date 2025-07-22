import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, PlayCircle } from 'lucide-react';
import heroImage from '@/assets/hero-car.jpg';

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <img
          src={heroImage}
          alt="Luxury Sports Car"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Experience
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Automotive Excellence
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover the world's most exclusive supercars and luxury vehicles. 
            Every detail crafted for perfection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="premium" size="lg" className="text-lg px-8 py-3">
              Explore Collection
            </Button>
            <Button variant="glass" size="lg" className="text-lg px-8 py-3">
              <PlayCircle size={20} className="mr-2" />
              Watch Showcase
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white/70" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-8 w-2 h-2 bg-primary rounded-full animate-glow-pulse opacity-60" />
      <div className="absolute top-1/3 right-12 w-1 h-1 bg-accent rounded-full animate-glow-pulse opacity-40" />
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-primary-glow rounded-full animate-glow-pulse opacity-50" />
    </section>
  );
};