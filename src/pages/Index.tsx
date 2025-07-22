import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { CarGallery } from '@/components/CarGallery';
import { FeaturesSection } from '@/components/FeaturesSection';
import { StatsSection } from '@/components/StatsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <CarGallery />
      <FeaturesSection />
    </div>
  );
};

export default Index;
