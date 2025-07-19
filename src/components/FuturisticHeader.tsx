import { useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import softplusLogo from "@/assets/softplus-logo.jpg";

export const FuturisticHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Header background opacity based on scroll
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0.8, 0.95]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50"
      style={{
        backgroundColor: useTransform(headerOpacity, (o) => `rgba(13, 17, 23, ${o})`),
        backdropFilter: "blur(20px)",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-gradient-primary p-1">
              <img 
                src={softplusLogo} 
                alt="SoftPlus GT" 
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                SoftPlus
              </span>
              <span className="text-xs text-muted-foreground">GT</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors relative group">
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
            <a href="#servicios" className="text-foreground hover:text-primary transition-colors relative group">
              Servicios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
            <a href="#tecnologias" className="text-foreground hover:text-primary transition-colors relative group">
              Tecnologías
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
            <a href="#nosotros" className="text-foreground hover:text-primary transition-colors relative group">
              Nosotros
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors relative group">
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+502 3011 5830</span>
            </div>
            <Button 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 animate-pulse-glow"
              onClick={() => window.open('https://wa.me/50230115830', '_blank')}
            >
              Contáctanos
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>
                Inicio
              </a>
              <a href="#servicios" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>
                Servicios
              </a>
              <a href="#tecnologias" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>
                Tecnologías
              </a>
              <a href="#nosotros" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>
                Nosotros
              </a>
              <a href="#contacto" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>
                Contacto
              </a>
              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <Phone className="w-4 h-4" />
                  <span>+502 3011 5830</span>
                </div>
                <Button 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  onClick={() => window.open('https://wa.me/50230115830', '_blank')}
                >
                  Contáctanos
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
};