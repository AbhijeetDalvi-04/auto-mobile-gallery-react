import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, PlayCircle } from 'lucide-react';
import heroImage from '/lovable-uploads/ce40f437-a8ac-4ba9-a2e9-f4debfaec9a0.png';

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
            Formula
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Team Pegasus
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};