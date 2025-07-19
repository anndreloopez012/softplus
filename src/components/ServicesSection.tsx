import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Cloud, 
  Code, 
  Gauge, 
  Shield, 
  Globe, 
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";

const services = [
  {
    icon: Cloud,
    title: "Creación y migración de la nube",
    description: "Soluciones completas en la nube para optimizar tu infraestructura tecnológica",
    features: [
      "Alojamiento Web Ultra",
      "Servidores VPS y Cloud", 
      "Servicios y Seguridad",
      "Correos Empresariales"
    ],
    gradient: "from-tech-blue to-tech-cyan"
  },
  {
    icon: Code,
    title: "Desarrollo de software personalizado",
    description: "Creamos aplicaciones únicas adaptadas a las necesidades específicas de tu negocio",
    features: [
      "Diseño de arquitectura de software",
      "Servicios de integración de sistemas",
      "Servicios de migración de datos", 
      "Modernización de aplicaciones"
    ],
    gradient: "from-primary to-secondary"
  },
  {
    icon: Gauge,
    title: "Gestión optimizada de la nube",
    description: "Maximiza el rendimiento y eficiencia de tu infraestructura cloud",
    features: [
      "Equilibrio de carga",
      "Redes de distribución de contenidos (CDN)",
      "Almacenamiento en caché",
      "Tecnologías de contenedorización"
    ],
    gradient: "from-accent to-neon-green"
  },
  {
    icon: Shield,
    title: "Servicios de auditoría y consultoría de TI",
    description: "Protege y optimiza tu infraestructura con nuestros expertos",
    features: [
      "Auditoría de TechGuard",
      "Auditoría de ciberseguridad",
      "Consultoría de TI especializada",
      "Análisis de seguridad integral"
    ],
    gradient: "from-secondary to-tech-purple"
  },
  {
    icon: Globe,
    title: "Diseño y desarrollo de aplicaciones web",
    description: "Creamos experiencias web modernas y responsivas",
    features: [
      "Desarrollo de aplicaciones web",
      "Servicios de desarrollo de portales",
      "Desarrollo de sitios web",
      "Desarrollo web offshore"
    ],
    gradient: "from-tech-cyan to-primary"
  },
  {
    icon: Users,
    title: "Consultoría de Transformación Digital",
    description: "Impulsa la evolución digital de tu empresa con estrategias personalizadas",
    features: [
      "Automatización de procesos",
      "Estrategia digital",
      "Gestión del cambio cultural",
      "Análisis de datos avanzado"
    ],
    gradient: "from-neon-green to-accent"
  }
];

export const ServicesSection = () => {
  return (
    <section 
      id="servicios" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${servicesBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-dark opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-muted/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-accent">Otros servicios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">¿Cómo podemos </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">ayudarte?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales para impulsar el crecimiento de tu empresa en la era digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card/80 backdrop-blur-xl border-border hover:shadow-tech transition-all duration-300 group hover:-translate-y-2 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary/10 hover:shadow-glow group"
                  onClick={() => window.open('https://wa.me/50230115830', '_blank')}
                >
                  Solicitar Información
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card/60 backdrop-blur-xl p-8 rounded-2xl border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              ¿Necesitas una solución personalizada?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nuestro equipo de expertos está listo para crear la solución perfecta para tu empresa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                onClick={() => window.open('https://wa.me/50230115830', '_blank')}
              >
                Contactar Especialista
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Más Detalles
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};