import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Zap, 
  Shield, 
  Award, 
  Sparkles, 
  Clock, 
  Users,
  ArrowRight 
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: '4K Video Gallery',
    description: 'Ultra-high definition videos showcasing every detail',
    color: 'text-yellow-400'
  },
  {
    icon: Shield,
    title: 'Verified Authentic',
    description: 'All vehicles verified and authenticated by experts',
    color: 'text-green-400'
  },
  {
    icon: Award,
    title: 'Award Winners',
    description: 'Featuring internationally acclaimed supercars',
    color: 'text-purple-400'
  },
  {
    icon: Sparkles,
    title: 'Exclusive Access',
    description: 'Access to limited edition and rare vehicles',
    color: 'text-pink-400'
  },
  {
    icon: Clock,
    title: 'Real-time Updates',
    description: 'Latest arrivals and availability updates',
    color: 'text-blue-400'
  },
  {
    icon: Users,
    title: 'Expert Curation',
    description: 'Handpicked by automotive professionals',
    color: 'text-cyan-400'
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-glass backdrop-blur-md">
            <Sparkles size={14} className="mr-2" />
            Premium Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose AutoLux
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the ultimate in automotive luxury with our cutting-edge platform 
            designed for supercar enthusiasts
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-background/50 mb-6 ${feature.color}`}>
                <feature.icon size={28} />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="premium" size="lg" className="text-lg px-8 py-3">
            Start Exploring
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};