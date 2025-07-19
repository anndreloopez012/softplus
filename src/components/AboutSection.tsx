import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Award, 
  Target, 
  Zap,
  ArrowRight,
  CheckCircle2,
  Star
} from "lucide-react";

const achievements = [
  {
    icon: Users,
    number: "1K+",
    label: "Clientes Satisfechos",
    description: "Empresas que confían en nuestras soluciones",
    gradient: "from-primary to-tech-cyan"
  },
  {
    icon: Award,
    number: "80K+",
    label: "Proyectos Realizados", 
    description: "Soluciones exitosas implementadas",
    gradient: "from-accent to-neon-green"
  },
  {
    icon: Target,
    number: "100%",
    label: "Garantizados",
    description: "Compromiso total con la calidad",
    gradient: "from-secondary to-tech-purple"
  }
];

const clientLogos = [
  { name: "IGSS", icon: "🏥" },
  { name: "Banco Industrial", icon: "🏦" },
  { name: "Cervecería", icon: "🍺" },
  { name: "Telecomunicaciones", icon: "📡" },
  { name: "Retail", icon: "🛍️" },
  { name: "Educación", icon: "🎓" }
];

const values = [
  {
    title: "Innovación Continua",
    description: "Adoptamos las últimas tecnologías para mantener a nuestros clientes a la vanguardia",
    icon: Zap
  },
  {
    title: "Excelencia en Servicio",
    description: "Cada proyecto es tratado con el máximo nivel de profesionalismo y dedicación",
    icon: Star
  },
  {
    title: "Compromiso Local",
    description: "Orgullosamente guatemaltecos, impulsando el crecimiento tecnológico nacional",
    icon: CheckCircle2
  }
];

export const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-muted/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-secondary">Sobre Nosotros</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">SOFTWARE PLUS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            En Software Plus, transformamos ideas en soluciones tecnológicas. Nos especializamos en el desarrollo 
            de aplicaciones web personalizadas y la venta de equipos tecnológicos de última generación, 
            proporcionando herramientas para que empresas y personas de Guatemala alcancen sus metas digitales con éxito.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="animate-slide-in">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Nuestra Misión
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Potenciar el éxito de nuestros clientes mediante el desarrollo de soluciones de software 
                  innovadoras y personalizadas. Nos comprometemos a ofrecer productos de alta calidad y 
                  un servicio excepcional, adaptándonos continuamente a las necesidades del mercado.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Nuestros Valores
                </h3>
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                onClick={() => window.open('https://wa.me/50230115830', '_blank')}
              >
                Conoce Más Sobre Nosotros
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="animate-slide-in" style={{ animationDelay: '0.3s' }}>
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index}
                  className="bg-card/60 backdrop-blur-xl border-border hover:shadow-tech transition-all duration-300 group hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${achievement.gradient} rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300`}>
                        <achievement.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {achievement.number}
                        </div>
                        <div className="font-semibold text-foreground mb-1">
                          {achievement.label}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {achievement.description}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Client Showcase */}
        <div className="bg-card/40 backdrop-blur-xl p-8 rounded-2xl border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-foreground">Clientes que </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Confían en Nosotros</span>
            </h3>
            <p className="text-muted-foreground">
              Trabajamos con empresas líderes en diferentes sectores de Guatemala
            </p>
          </div>

          {/* Client Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            {clientLogos.map((client, index) => (
              <div 
                key={index}
                className="bg-muted/30 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group text-center"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {client.icon}
                </div>
                <div className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {client.name}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Badge variant="outline" className="border-primary text-primary mb-4">
              ¿Quieres ser parte de nuestra historia de éxito?
            </Badge>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                onClick={() => window.open('https://wa.me/50230115830', '_blank')}
              >
                Comenzar un Proyecto
              </Button>
              <Button 
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar Información
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};