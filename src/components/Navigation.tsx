import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Car, Search, User, Heart } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Collection', href: '#collection' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/80 backdrop-blur-md shadow-elegant' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-primary rounded-xl">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">
              AutoLux
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <User size={20} />
            </Button>
            <Button variant="premium">
              Book Test Drive
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="px-6 py-6 space-y-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            <div className="flex flex-col space-y-4 pt-4 border-t border-border">
              <Button variant="outline" className="justify-start">
                <Search size={20} className="mr-2" />
                Search Cars
              </Button>
              <Button variant="outline" className="justify-start">
                <Heart size={20} className="mr-2" />
                Favorites
              </Button>
              <Button variant="outline" className="justify-start">
                <User size={20} className="mr-2" />
                Profile
              </Button>
              <Button variant="premium" size="lg">
                Book Test Drive
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};