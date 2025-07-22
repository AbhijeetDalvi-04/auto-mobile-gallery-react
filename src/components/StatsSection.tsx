import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const Counter = ({ end, duration = 2000, suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const stats = [
  {
    number: 500,
    suffix: '+',
    label: 'Premium Vehicles',
    description: 'Curated collection of luxury cars'
  },
  {
    number: 50,
    suffix: '+',
    label: 'Exclusive Brands',
    description: 'Top automotive manufacturers'
  },
  {
    number: 10,
    suffix: 'K+',
    label: 'Happy Clients',
    description: 'Satisfied automotive enthusiasts'
  },
  {
    number: 95,
    suffix: '%',
    label: 'Satisfaction Rate',
    description: 'Customer approval rating'
  }
];

export const StatsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-glass backdrop-blur-md">
            Trusted by Thousands
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            By the Numbers
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  <Counter end={stat.number} suffix={stat.suffix} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>
                <p className="text-muted-foreground">
                  {stat.description}
                </p>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-150" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};