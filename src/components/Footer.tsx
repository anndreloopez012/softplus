import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  ArrowUp
} from "lucide-react";
import softplusLogo from "@/assets/softplus-logo.jpg";

const services = [
  "Desarrollo Web",
  "Aplicaciones Móviles", 
  "Cloud Computing",
  "Consultoría TI",
  "Ciberseguridad",
  "DevOps"
];

const technologies = [
  "React & TypeScript",
  "Node.js & Python",
  "AWS & Azure",
  "Docker & Kubernetes",
  "PostgreSQL & MongoDB",
  "Mobile Development"
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-gradient-primary p-1">
                  <img 
                    src={softplusLogo} 
                    alt="SoftPlus GT" 
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    SoftPlus
                  </span>
                  <span className="text-sm text-muted-foreground">Guatemala</span>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                Transformamos ideas en soluciones tecnológicas innovadoras. 
                Especializados en desarrollo de software y equipos tecnológicos 
                de última generación en Guatemala.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">+502 3011 5830</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">ventas@softplusgt.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Ciudad de Guatemala, Zona 10</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">
                Nuestros Servicios
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#servicios" 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
                    >
                      {service}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">
                Tecnologías
              </h3>
              <ul className="space-y-3">
                {technologies.map((tech, index) => (
                  <li key={index}>
                    <a 
                      href="#tecnologias" 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
                    >
                      {tech}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & CTA */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">
                Comenzar Proyecto
              </h3>
              <p className="text-sm text-muted-foreground">
                ¿Listo para transformar tu idea en tecnología? 
                Contacta con nuestro equipo de expertos.
              </p>
              
              <div className="space-y-3">
                <Button 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  onClick={() => window.open('https://wa.me/50230115830', '_blank')}
                >
                  Contactar por WhatsApp
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10"
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Solicitar Cotización
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-muted/30 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-glow group"
                >
                  <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-muted/30 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-glow group"
                >
                  <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-muted/30 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-glow group"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} SoftPlus Guatemala. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Términos de Servicio
              </a>
              <Button
                size="sm"
                variant="ghost"
                onClick={scrollToTop}
                className="hover:bg-primary/10 hover:text-primary group"
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};