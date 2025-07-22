import { useState } from 'react';
import { CarCard } from './CarCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Search, Filter, Grid3X3, Grid2X2 } from 'lucide-react';

// Import car images
import car1 from '@/assets/car-1.jpg';
import car2 from '@/assets/car-2.jpg';
import car3 from '@/assets/car-3.jpg';

interface Car {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  year: number;
  engine: string;
  horsepower: string;
  topSpeed: string;
  category: 'supercar' | 'luxury' | 'electric';
  isVideo?: boolean;
}

const cars: Car[] = [
  {
    id: '1',
    name: 'F8 Tributo',
    brand: 'Ferrari',
    price: '$280,000',
    image: car1,
    year: 2024,
    engine: 'V8 Twin-Turbo',
    horsepower: '710 HP',
    topSpeed: '211 mph',
    category: 'supercar',
    isVideo: true,
  },
  {
    id: '2',
    name: 'Huracán',
    brand: 'Lamborghini',
    price: '$260,000',
    image: car2,
    year: 2024,
    engine: 'V10 Naturally Aspirated',
    horsepower: '630 HP',
    topSpeed: '202 mph',
    category: 'supercar',
  },
  {
    id: '3',
    name: '720S',
    brand: 'McLaren',
    price: '$300,000',
    image: car3,
    year: 2024,
    engine: 'V8 Twin-Turbo',
    horsepower: '710 HP',
    topSpeed: '212 mph',
    category: 'supercar',
    isVideo: true,
  },
];

export const CarGallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'large'>('grid');

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || car.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Premium Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our curated selection of the world's finest supercars and luxury vehicles
          </p>
        </div>

        {/* Controls */}
        <div className="mb-12 space-y-6">
          {/* Search and View Toggle */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search cars..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-card border-border focus:border-primary"
              />
            </div>
            
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid3X3 size={18} />
              </Button>
              <Button
                variant={viewMode === 'large' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('large')}
              >
                <Grid2X2 size={18} />
              </Button>
              <Button variant="outline" size="icon">
                <Filter size={18} />
              </Button>
            </div>
          </div>

          {/* Category Tabs */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-card">
              <TabsTrigger value="all">All Cars</TabsTrigger>
              <TabsTrigger value="supercar">Supercars</TabsTrigger>
              <TabsTrigger value="luxury">Luxury</TabsTrigger>
              <TabsTrigger value="electric">Electric</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Gallery Grid */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1 md:grid-cols-2'
        }`}>
          {filteredCars.map((car, index) => (
            <div
              key={car.id}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CarCard
                {...car}
                onClick={() => console.log(`Viewing ${car.brand} ${car.name}`)}
              />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCars.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground mb-4">No cars found matching your criteria</p>
            <Button variant="outline" onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredCars.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Cars
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};