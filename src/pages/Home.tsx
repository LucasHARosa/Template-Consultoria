import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Shield, 
  BarChart3, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  Activity,
  Target
} from "lucide-react";
import heroImage from "@/assets/hero-analytics.jpg";
import healthcareImage from "@/assets/healthcare-analytics.jpg";
import financeImage from "@/assets/finance-analytics.jpg";
import esgImage from "@/assets/esg-analytics.jpg";
import realestateImage from "@/assets/realestate-analytics.jpg";

const Home = () => {
  const sectors = [
    {
      title: "Saúde",
      description: "Análises especializadas para o setor de saúde",
      image: healthcareImage,
      icon: Activity
    },
    {
      title: "Seguros & Finanças",
      description: "Gestão de riscos e conformidade regulatória",
      image: financeImage,
      icon: Shield
    },
    {
      title: "ESG & Sustentabilidade",
      description: "Métricas de impacto social e ambiental",
      image: esgImage,
      icon: Target
    },
    {
      title: "Mercado Imobiliário",
      description: "Inteligência de mercado imobiliário",
      image: realestateImage,
      icon: TrendingUp
    }
  ];

  const services = [
    {
      title: "Estatística Avançada",
      description: "Métodos robustos para resolver desafios complexos em diversos setores",
      icon: BarChart3
    },
    {
      title: "Pesquisa de Mercado",
      description: "Estudos com rigor estatístico focados em decisões estratégicas",
      icon: TrendingUp
    },
    {
      title: "Regulação & Conformidade",
      description: "Entregas técnicas para ANS, SUSEP e Bacen com transparência total",
      icon: Shield
    },
    {
      title: "Consultoria Especializada",
      description: "Equipes temporárias e consultores para acelerar seus projetos",
      icon: Users
    }
  ];

  const stats = [
    { number: "150+", label: "Projetos Concluídos" },
    { number: "50+", label: "Clientes Atendidos" },
    { number: "8", label: "Anos de Experiência" },
    { number: "99%", label: "Taxa de Satisfação" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Transformamos
                <span className="text-primary block">Riscos em Oportunidades</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Consultoria especializada em análises inteligentes para Saúde, Seguros, 
                Finanças, Sustentabilidade e Mercado Imobiliário. Entregamos precisão 
                para decisões estratégicas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" size="lg" asChild>
                  <Link to="/contato">
                    Vamos Conversar
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/servicos">Nossos Serviços</Link>
                </Button>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src={heroImage} 
                alt="Análises inteligentes Qualitify"
                className="rounded-2xl shadow-elegant hover-lift w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`text-center animate-fade-in-up animate-delay-${index * 200}`}
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluções completas e especializadas para transformar dados em vantagens competitivas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className={`hover-lift card-gradient border-border animate-fade-in-up animate-delay-${index * 200}`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="primary-gradient p-3 rounded-lg">
                      <service.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/servicos">
                Ver Todos os Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Setores de Atuação
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expertise especializada nos principais setores da economia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <Card 
                key={sector.title}
                className={`group hover-lift overflow-hidden animate-fade-in-up animate-delay-${index * 200}`}
              >
                <div className="relative">
                  <img 
                    src={sector.image} 
                    alt={sector.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-smooth" />
                  <div className="absolute bottom-4 left-4">
                    <div className="primary-gradient p-2 rounded-lg">
                      <sector.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {sector.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {sector.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-background mb-6">
              Pronto para Transformar Seus Dados em Vantagem Competitiva?
            </h2>
            <p className="text-xl text-background/80 mb-8">
              Entre em contato conosco e descubra como podemos acelerar o crescimento do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contato">
                  Solicitar Consultoria
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-background/30 text-background hover:bg-background hover:text-foreground" asChild>
                <Link to="/cases">Ver Cases de Sucesso</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;