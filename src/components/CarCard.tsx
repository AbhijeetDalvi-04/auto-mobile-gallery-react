import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Eye, Star } from 'lucide-react';

interface CarCardProps {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  year: number;
  engine: string;
  horsepower: string;
  topSpeed: string;
  onClick?: () => void;
  isVideo?: boolean;
}

export const CarCard = ({ 
  name, 
  brand, 
  price, 
  image, 
  year, 
  engine, 
  horsepower, 
  topSpeed, 
  onClick,
  isVideo = false 
}: CarCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className="group relative bg-gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 hover:scale-[1.02] cursor-pointer animate-fade-in"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={`${brand} ${name}`}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Video indicator */}
        {isVideo && (
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-glass backdrop-blur-md text-white border-white/20">
              <Play size={12} className="mr-1" />
              Video
            </Badge>
          </div>
        )}
        
        {/* Year badge */}
        <div className="absolute top-4 left-4">
          <Badge variant="outline" className="bg-glass backdrop-blur-md text-white border-white/20">
            {year}
          </Badge>
        </div>
        
        {/* Action buttons overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Button variant="glass" size="lg" className="backdrop-blur-md">
            <Eye size={16} className="mr-2" />
            View Details
          </Button>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title and Price */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {brand} {name}
            </h3>
            <p className="text-muted-foreground font-medium">{price}</p>
          </div>
          <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
            <Star size={16} />
          </Button>
        </div>
        
        {/* Specs */}
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="text-center">
            <p className="text-muted-foreground">Engine</p>
            <p className="font-semibold text-foreground">{engine}</p>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground">Power</p>
            <p className="font-semibold text-foreground">{horsepower}</p>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground">Top Speed</p>
            <p className="font-semibold text-foreground">{topSpeed}</p>
          </div>
        </div>
      </div>
    </div>
  );
};