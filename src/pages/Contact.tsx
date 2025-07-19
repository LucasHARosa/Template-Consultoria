import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  MessageSquare,
  Calendar,
  Users
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você integraria com seu backend
    toast({
      title: "Mensagem Enviada!",
      description: "Entraremos em contato em até 24 horas.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      description: "contato@strategicvista.com.br",
      action: "mailto:contato@strategicvista.com.br"
    },
    {
      icon: Phone,
      title: "Telefone",
      description: "(11) 9999-9999",
      action: "tel:+5511999999999"
    },
    {
      icon: MapPin,
      title: "Endereço",
      description: "São Paulo, SP",
      action: null
    },
    {
      icon: Clock,
      title: "Horário",
      description: "Seg - Sex: 9h às 18h",
      action: null
    }
  ];

  const services = [
    "Estatística",
    "Pesquisa e Inteligência de Mercado",
    "Regulação e Conformidade",
    "Soluções Digitais Inteligentes",
    "Consultoria Técnica",
    "Análises de Impacto e ESG",
    "Outro"
  ];

  const benefits = [
    {
      icon: MessageSquare,
      title: "Resposta Rápida",
      description: "Retornamos seu contato em até 24 horas"
    },
    {
      icon: Calendar,
      title: "Consultoria Gratuita",
      description: "Primeira análise do seu projeto sem custos"
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Consultores especializados no seu setor"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Vamos Conversar
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Entre em contato conosco e descubra como podemos transformar os desafios 
              da sua empresa em oportunidades de crescimento.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Solicite uma Consultoria
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Empresa</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service">Serviço de Interesse</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Selecione um serviço</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="mt-1"
                        placeholder="Conte-nos sobre seu projeto ou necessidade..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Informações de Contato
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <Card key={info.title} className="hover-lift">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="primary-gradient p-3 rounded-lg">
                            <info.icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{info.title}</h3>
                            {info.action ? (
                              <a 
                                href={info.action}
                                className="text-muted-foreground hover:text-primary transition-smooth"
                              >
                                {info.description}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{info.description}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Por que Escolher a Strategic Vista?
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit) => (
                    <div key={benefit.title} className="flex items-start space-x-3">
                      <div className="primary-gradient p-2 rounded-lg mt-1">
                        <benefit.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Dúvidas Frequentes
            </h2>
            <p className="text-muted-foreground mb-8">
              Confira algumas perguntas comuns sobre nossos serviços
            </p>
            <Button variant="outline" asChild>
              <a href="/faq">Ver Todas as Perguntas</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover-lift card-gradient">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  Qual o prazo médio dos projetos?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Varia de 2 a 12 semanas, dependendo da complexidade e escopo do projeto.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift card-gradient">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  Vocês trabalham com que setores?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Saúde, Seguros, Finanças, Sustentabilidade e Mercado Imobiliário.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift card-gradient">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  Como é feito o acompanhamento?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Reuniões semanais com relatórios de progresso e acessos a dashboards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;