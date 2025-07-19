import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Users, 
  Award, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Shield,
  Heart
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precisão",
      description: "Entregamos análises com rigor técnico e científico, garantindo confiabilidade em cada projeto."
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Utilizamos metodologias avançadas e tecnologias de ponta para resolver desafios complexos."
    },
    {
      icon: Shield,
      title: "Confiabilidade",
      description: "Nossos clientes confiam em nossa expertise para decisões estratégicas críticas."
    },
    {
      icon: Heart,
      title: "Compromisso",
      description: "Estamos comprometidos com o sucesso e crescimento sustentável de nossos parceiros."
    }
  ];

  const differentials = [
    "Expertise regulatória especializada em ANS, SUSEP e Bacen",
    "Metodologias estatísticas robustas e validadas cientificamente",
    "Equipe multidisciplinar com experiência em diversos setores",
    "Soluções personalizadas para cada necessidade específica",
    "Acompanhamento contínuo e suporte pós-implementação",
    "Transparência total em processos e resultados"
  ];

  const team = [
    {
      name: "Dr. Ana Silva",
      role: "Diretora Estatística",
      description: "PhD em Estatística com 15 anos de experiência em análise de riscos no setor financeiro."
    },
    {
      name: "Carlos Mendes",
      role: "Especialista Regulatório",
      description: "Ex-analista da SUSEP com expertise em conformidade e regulamentação de seguros."
    },
    {
      name: "Marina Santos",
      role: "Cientista de Dados",
      description: "Mestre em Data Science, especializada em machine learning aplicado à saúde."
    },
    {
      name: "Roberto Lima",
      role: "Consultor ESG",
      description: "Especialista em sustentabilidade corporativa e métricas de impacto socioambiental."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 animated-background overflow-hidden">
        <div className="floating-shapes"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-background mb-6 animate-fade-in-up">
              Sobre a Qualitify
            </h1>
            <p className="text-xl text-background/90 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
              Somos uma consultoria especializada em análises inteligentes, transformando dados 
              complexos em insights estratégicos que geram valor real para nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="hover-lift card-gradient">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="primary-gradient p-3 rounded-lg mr-4">
                    <Target className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Nossa Missão</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Transformar riscos em oportunidades através de análises inteligentes e 
                  soluções estatísticas robustas, fornecendo aos nossos clientes a precisão 
                  necessária para decisões estratégicas que impulsionam o crescimento sustentável.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift card-gradient">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="primary-gradient p-3 rounded-lg mr-4">
                    <TrendingUp className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Nossa Visão</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Ser a referência nacional em consultoria analítica especializada, reconhecida 
                  pela excelência técnica, inovação metodológica e capacidade de transformar 
                  complexidade em clareza estratégica.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Os princípios que guiam nosso trabalho e relacionamento com clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className={`hover-lift card-gradient text-center animate-fade-in-up animate-delay-${index * 200}`}
              >
                <CardContent className="p-6">
                  <div className="primary-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Nossos Diferenciais
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                O que nos torna únicos no mercado de consultoria analítica
              </p>
              <div className="space-y-4">
                {differentials.map((differential, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{differential}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card className="hover-lift card-gradient">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">150+</div>
                    <div className="text-muted-foreground">Projetos Concluídos</div>
                  </CardContent>
                </Card>
                <Card className="hover-lift card-gradient">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">8</div>
                    <div className="text-muted-foreground">Anos de Experiência</div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6 mt-8">
                <Card className="hover-lift card-gradient">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-muted-foreground">Clientes Atendidos</div>
                  </CardContent>
                </Card>
                <Card className="hover-lift card-gradient">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">99%</div>
                    <div className="text-muted-foreground">Satisfação</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nossa Equipe
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Profissionais especializados e experientes nos principais setores da economia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card 
                key={member.name}
                className={`hover-lift card-gradient animate-fade-in-up animate-delay-${index * 200}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-background mb-6">
              Quer Saber Mais Sobre Nosso Trabalho?
            </h2>
            <p className="text-xl text-background/80 mb-8">
              Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar novos patamares.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contato">
                  Fale Conosco
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-background/30 text-background hover:bg-background hover:text-foreground" asChild>
                <Link to="/servicos">Conheça Nossos Serviços</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;