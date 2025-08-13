import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import licetLogo from "@/assets/licet-logo.jpg"
import armeLogo from "@/assets/arme-logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side - LICET Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src={licetLogo}
                alt="LICET Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-s font-bold text-neon font-[900] tracking-wider">
              Loyola-ICAM College of Engineering and Technology
            </h1>
          </div>

          {/* Right Side - Navigation, Instagram, ARME Logo, and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-foreground hover:text-primary transition-colors duration-300 px-3 py-2 text-sm font-medium tracking-wide"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Instagram Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open('https://www.instagram.com/arme_licet/', '_blank')}
              className="text-foreground hover:text-pink-500"
            >
              <Instagram size={20} />
            </Button>

            {/* ARME Logo */}
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src={armeLogo}
                alt="ARME Logo"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground hover:text-primary"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-md border-b border-border/50">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;