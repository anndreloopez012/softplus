import { useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AppleReveal, AppleScrollWrapper } from "@/components/AppleScrollEffects";

const techCategories = [
  {
    name: "Plataforma Web",
    active: true,
    technologies: [
      { name: "React Js", color: "bg-tech-cyan" },
      { name: "JavaScript", color: "bg-primary" },
      { name: "TypeScript", color: "bg-tech-blue" },
      { name: "PHP", color: "bg-secondary" },
      { name: "Laravel", color: "bg-accent" },
      { name: "Python", color: "bg-neon-green" }
    ]
  },
  {
    name: "Base de Datos",
    active: false,
    technologies: [
      { name: "PostgreSQL", color: "bg-tech-blue" },
      { name: "MySQL", color: "bg-primary" },
      { name: "MongoDB", color: "bg-accent" },
      { name: "Redis", color: "bg-secondary" },
      { name: "Oracle", color: "bg-tech-cyan" },
      { name: "Firebase", color: "bg-neon-green" }
    ]
  },
  {
    name: "Nube y DevOps",
    active: false,
    technologies: [
      { name: "AWS", color: "bg-primary" },
      { name: "Azure", color: "bg-tech-blue" },
      { name: "Docker", color: "bg-tech-cyan" },
      { name: "Kubernetes", color: "bg-secondary" },
      { name: "Jenkins", color: "bg-accent" },
      { name: "Terraform", color: "bg-neon-green" }
    ]
  },
  {
    name: "Aplicaciones Móviles",
    active: false,
    technologies: [
      { name: "React Native", color: "bg-tech-cyan" },
      { name: "Swift", color: "bg-primary" },
      { name: "Java", color: "bg-secondary" },
      { name: "Kotlin", color: "bg-tech-blue" },
      { name: "Flutter", color: "bg-accent" },
      { name: "Xamarin", color: "bg-neon-green" }
    ]
  },
  {
    name: "Otros Marcos",
    active: false,
    technologies: [
      { name: "Node.js", color: "bg-accent" },
      { name: "Express", color: "bg-primary" },
      { name: "Django", color: "bg-neon-green" },
      { name: "Spring", color: "bg-secondary" },
      { name: "Ruby on Rails", color: "bg-tech-cyan" },
      { name: "C++", color: "bg-tech-blue" }
    ]
  }
];

const partnerLogos = [
  { name: "AWS", logo: "🚀" },
  { name: "Microsoft Azure", logo: "☁️" },
  { name: "Google Cloud", logo: "🌩️" },
  { name: "Lenovo", logo: "💻" },
  { name: "HP", logo: "🖥️" },
  { name: "Docker", logo: "🐳" },
];

export const TechSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <motion.section 
      ref={containerRef} 
      id="tecnologias" 
      className="py-20 bg-gradient-dark relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <AppleReveal className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-muted/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">NUESTRAS TECNOLOGÍAS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Utilizamos </span>
            <span className="bg-gradient-tech bg-clip-text text-transparent">Tecnologías</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">de Vanguardia</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trabajamos con las tecnologías más avanzadas y herramientas líderes en la industria para garantizar soluciones robustas y escalables
          </p>
        </AppleReveal>

        {/* Technology Categories */}
        <AppleReveal className="flex flex-wrap justify-center gap-4 mb-12" delay={0.2}>
          {techCategories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === index ? "default" : "outline"}
              className={`transition-all duration-300 ${
                activeCategory === index 
                  ? "bg-gradient-primary shadow-glow" 
                  : "border-border hover:border-primary hover:shadow-glow"
              }`}
              onClick={() => setActiveCategory(index)}
            >
              {category.name}
            </Button>
          ))}
        </AppleReveal>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {techCategories[activeCategory].technologies.map((tech, index) => (
            <AppleScrollWrapper
              key={`${activeCategory}-${index}`}
              className="h-full"
              yRange={['40px', '0px']}
              scaleRange={[0.9, 1]}
            >
              <div className="bg-card/60 backdrop-blur-xl p-6 rounded-2xl border border-border hover:shadow-tech transition-all duration-300 hover:-translate-y-2 group h-full">
                <div className={`w-12 h-12 ${tech.color} rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300`}>
                  <span className="text-white font-bold text-sm">
                    {tech.name.substring(0, 2).toUpperCase()}
                  </span>
                </div>
                <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                  {tech.name}
                </h3>
              </div>
            </AppleScrollWrapper>
          ))}
        </div>

        {/* Partners Section */}
        <AppleReveal className="text-center mb-12" delay={0.4}>
          <h3 className="text-2xl font-bold mb-8">
            <span className="text-foreground">Nuestras </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Marcas</span>
          </h3>
          
          {/* Animated Logo Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee space-x-12">
              {[...partnerLogos, ...partnerLogos].map((partner, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 bg-card/40 backdrop-blur-xl p-6 rounded-xl border border-border hover:shadow-glow transition-all duration-300 group"
                >
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                    {partner.logo}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    {partner.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AppleReveal>

        {/* Stats */}
        <AppleReveal className="bg-card/40 backdrop-blur-xl p-8 rounded-2xl border border-border" delay={0.6}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-2">
              Más de 1,900 clientes confían en SoftPlus
            </h3>
            <p className="text-muted-foreground">
              Nos enorgullece ser el socio tecnológico de empresas líderes en Guatemala
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                50+
              </div>
              <div className="text-sm text-muted-foreground">
                Tecnologías Dominadas
              </div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-tech bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground">
                Tiempo de Actividad
              </div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">
                Soporte Técnico
              </div>
            </div>
          </div>
        </AppleReveal>
      </div>
    </motion.section>
  );
};