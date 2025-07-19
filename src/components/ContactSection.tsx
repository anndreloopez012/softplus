import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send,
  MessageCircle,
  Clock,
  CheckCircle
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono Directo",
    content: "+502 3011 5830",
    description: "Disponible de Lunes a Viernes",
    action: () => window.open('tel:+50230115830'),
    gradient: "from-primary to-tech-cyan"
  },
  {
    icon: Mail,
    title: "Correo Electrónico", 
    content: "ventas@softplusgt.com",
    description: "Respuesta en menos de 24 horas",
    action: () => window.open('mailto:ventas@softplusgt.com'),
    gradient: "from-accent to-neon-green"
  },
  {
    icon: MapPin,
    title: "Oficina Principal",
    content: "Ciudad de Guatemala, Zona 10",
    description: "Guatemala, Centroamérica",
    action: () => window.open('https://maps.google.com/?q=Ciudad+de+Guatemala+zona+10'),
    gradient: "from-secondary to-tech-purple"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business",
    content: "Chat Directo",
    description: "Respuesta inmediata",
    action: () => window.open('https://wa.me/50230115830'),
    gradient: "from-neon-green to-accent"
  }
];

const projectSteps = [
  {
    number: "01",
    title: "Comparte tus ideas",
    description: "Cuéntanos sobre tu proyecto y objetivos"
  },
  {
    number: "02", 
    title: "Discútelo con nuestros expertos",
    description: "Analizamos tu propuesta con nuestro equipo técnico"
  },
  {
    number: "03",
    title: "Obtén una cotización gratis", 
    description: "Recibe una propuesta detallada sin compromiso"
  },
  {
    number: "04",
    title: "Inicia el proyecto",
    description: "Comenzamos el desarrollo de tu solución"
  }
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "¡Mensaje enviado exitosamente!",
        description: "Nos pondremos en contacto contigo muy pronto.",
      });
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-muted/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-accent">Si usted está aquí</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">¡Vamos a empezar!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Iniciando un viaje hacia la innovación tecnológica. Conectemos y transformemos tus ideas en realidad digital.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className="bg-card/60 backdrop-blur-xl border-border hover:shadow-tech transition-all duration-300 group hover:-translate-y-2 cursor-pointer animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={info.action}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {info.title}
                </h3>
                <p className="text-sm font-medium text-primary mb-1">
                  {info.content}
                </p>
                <p className="text-xs text-muted-foreground">
                  {info.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-card/60 backdrop-blur-xl border-border animate-slide-in">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center space-x-3">
                <Send className="w-6 h-6 text-primary" />
                <span>¡Conectémonos!</span>
              </CardTitle>
              <p className="text-muted-foreground">
                Envíanos un mensaje y pronto discutiremos tu proyecto contigo.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Nombre completo"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-muted/30 border-border focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Correo electrónico"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-muted/30 border-border focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="phone"
                      placeholder="Teléfono"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-muted/30 border-border focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <Input
                      name="company"
                      placeholder="Empresa (opcional)"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-muted/30 border-border focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-muted/30 border-border focus:border-primary transition-colors resize-none"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input type="checkbox" required className="mt-1" />
                  <p className="text-xs text-muted-foreground">
                    Acepto ser contactado a la brevedad por el equipo de SoftPlus GT para discutir mi proyecto.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Enviando mensaje...</>
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Project Process */}
          <div className="animate-slide-in" style={{ animationDelay: '0.3s' }}>
            <Card className="bg-card/60 backdrop-blur-xl border-border mb-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-accent" />
                  <span>Proceso de Trabajo</span>
                </CardTitle>
                <p className="text-muted-foreground">
                  Así es como trabajamos contigo desde la idea hasta la implementación
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {projectSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                        <span className="text-primary-foreground font-bold text-sm">
                          {step.number}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Actions */}
            <div className="grid gap-4">
              <Button 
                size="lg"
                className="bg-gradient-tech hover:shadow-glow transition-all duration-300 group"
                onClick={() => window.open('https://wa.me/50230115830', '_blank')}
              >
                <MessageCircle className="mr-3 w-5 h-5" />
                Chat por WhatsApp
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 hover:shadow-neon group"
                onClick={() => window.open('tel:+50230115830')}
              >
                <Phone className="mr-3 w-5 h-5" />
                Llamar Ahora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};