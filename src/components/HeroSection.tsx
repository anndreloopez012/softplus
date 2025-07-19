import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Cpu } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-in">
            <div className="inline-flex items-center space-x-2 bg-muted/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Soluciones Tecnológicas</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Transformamos
              </span>
              <br />
              <span className="text-foreground">tu idea en</span>
              <br />
              <span className="bg-gradient-tech bg-clip-text text-transparent">
                tecnología.
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              En SoftPlus GT, convertimos visiones en realidades digitales. 
              Desarrollamos soluciones tecnológicas innovadoras que impulsan 
              el crecimiento de tu empresa en Guatemala.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                onClick={() => window.open('https://wa.me/50230115830', '_blank')}
              >
                Contáctanos Ahora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 hover:shadow-glow"
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Servicios
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1K+</div>
                <div className="text-sm text-muted-foreground">Clientes Satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">80K+</div>
                <div className="text-sm text-muted-foreground">Proyectos Realizados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">100%</div>
                <div className="text-sm text-muted-foreground">Garantizado</div>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative animate-slide-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main Tech Card */}
              <div className="bg-card/80 backdrop-blur-xl p-8 rounded-2xl border border-border shadow-tech animate-float">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Desarrollo Personalizado</h3>
                    <p className="text-muted-foreground">Arquitectura moderna</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">React & TypeScript</span>
                    <span className="text-primary">95%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full w-[95%]"></div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Cloud Solutions</span>
                    <span className="text-accent">88%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-neon h-2 rounded-full w-[88%]"></div>
                  </div>
                </div>
              </div>

              {/* Floating Security Card */}
              <div className="absolute -top-4 -right-4 bg-card/90 backdrop-blur-xl p-4 rounded-xl border border-border shadow-neon animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-3">
                  <Shield className="w-8 h-8 text-accent" />
                  <div>
                    <div className="text-sm font-semibold">Seguridad 100%</div>
                    <div className="text-xs text-muted-foreground">SSL & Encriptación</div>
                  </div>
                </div>
              </div>

              {/* Floating Contact Card */}
              <div className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-xl p-4 rounded-xl border border-border shadow-glow animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-sm font-semibold mb-1">Contacto Directo</div>
                <div className="text-primary text-lg font-bold">+502 3011 5830</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};