import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  TrendingUp, 
  Shield, 
  Monitor, 
  Users, 
  Leaf, 
  ArrowRight,
  CheckCircle,
  Target,
  Brain,
  FileCheck,
  Zap
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: BarChart3,
      title: "Estatística",
      subtitle: "Métodos Robustos para Decisões Precisas",
      description: "Aplicamos métodos estatísticos avançados para resolver desafios em saúde, seguros, finanças e grandes corporações. Atuamos em precificação, provisões, simulações e avaliação de riscos com foco técnico e regulatório.",
      features: [
        "Modelagem estatística avançada",
        "Análise de riscos e precificação",
        "Provisões técnicas e reservas",
        "Simulações Monte Carlo",
        "Testes de aderência e validação"
      ]
    },
    {
      icon: TrendingUp,
      title: "Pesquisa e Inteligência de Mercado",
      subtitle: "Insights Estratégicos para Crescimento",
      description: "Conduzimos estudos com rigor estatístico e foco em decisões. Mapeamos tendências, perfil de consumo, riscos setoriais e oportunidades para apoiar lançamentos e expansão de mercado.",
      features: [
        "Estudos de mercado e tendências",
        "Análise de comportamento do consumidor",
        "Pesquisas quantitativas e qualitativas",
        "Segmentação de mercado",
        "Análise de concorrência"
      ]
    },
    {
      icon: Shield,
      title: "Regulação e Conformidade",
      subtitle: "Compliance Regulatório Especializado",
      description: "Produzimos entregas técnicas completas para ANS, SUSEP e Bacen: testes de suficiência, perícias e relatórios regulatórios, com foco na transparência e ações estratégicas dos nossos clientes.",
      features: [
        "Testes de suficiência de provisões",
        "Relatórios regulatórios ANS/SUSEP/Bacen",
        "Perícias técnicas e actuariais",
        "Compliance regulatório",
        "Auditoria de modelos"
      ]
    },
    {
      icon: Monitor,
      title: "Soluções Digitais Inteligentes",
      subtitle: "Tecnologia a Serviço da Análise",
      description: "Desenvolvemos simuladores, calculadoras e dashboards sob medida. Nossas ferramentas transformam dados em decisões, com visual limpo e integrado aos fluxos dos nossos clientes.",
      features: [
        "Dashboards interativos",
        "Simuladores de cenários",
        "Calculadoras personalizadas",
        "APIs de integração",
        "Automação de processos"
      ]
    },
    {
      icon: Users,
      title: "Consultoria Técnica e Squads Sob Demanda",
      subtitle: "Expertise Temporária para Projetos Críticos",
      description: "Oferecemos equipes temporárias e consultores especializados para acelerar projetos em saúde, seguros e finanças. Atuamos com agilidade, confidencialidade e foco em entregas de alta performance.",
      features: [
        "Equipes especializadas temporárias",
        "Consultoria técnica especializada",
        "Gestão de projetos complexos",
        "Transferência de conhecimento",
        "Suporte técnico contínuo"
      ]
    },
    {
      icon: Leaf,
      title: "Análises de Impacto e ESG",
      subtitle: "Sustentabilidade Quantificada",
      description: "Quantificamos impactos sociais, ambientais e financeiros, atuando no apoio à estudos de sustentabilidade e projetos para o desenvolvimento de métricas ESG.",
      features: [
        "Métricas ESG personalizadas",
        "Análise de impacto socioambiental",
        "Relatórios de sustentabilidade",
        "Carbon footprint",
        "Indicadores de performance ESG"
      ]
    }
  ];

  const sectors = [
    {
      name: "Saúde",
      description: "Análises especializadas para operadoras, hospitais e órgãos reguladores"
    },
    {
      name: "Seguros",
      description: "Precificação, reservas e conformidade regulatória para seguradoras"
    },
    {
      name: "Finanças",
      description: "Gestão de riscos e compliance para instituições financeiras"
    },
    {
      name: "Sustentabilidade",
      description: "Métricas ESG e análises de impacto socioambiental"
    },
    {
      name: "Mercado Imobiliário",
      description: "Inteligência de mercado e análise de investimentos imobiliários"
    }
  ];

  const methodology = [
    {
      icon: Target,
      title: "Diagnóstico",
      description: "Análise detalhada do problema e definição de objetivos claros"
    },
    {
      icon: Brain,
      title: "Modelagem",
      description: "Desenvolvimento de modelos estatísticos robustos e validados"
    },
    {
      icon: FileCheck,
      title: "Implementação",
      description: "Execução da solução com acompanhamento técnico especializado"
    },
    {
      icon: Zap,
      title: "Otimização",
      description: "Monitoramento contínuo e ajustes para maximizar resultados"
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
              Nossos Serviços
            </h1>
            <p className="text-xl text-background/90 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
              Soluções especializadas em análises inteligentes para transformar riscos em 
              oportunidades e dados em vantagens competitivas.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div 
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="primary-gradient p-4 rounded-lg mr-4">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                        {service.title}
                      </h2>
                      <p className="text-primary font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <Card className="hover-lift card-gradient p-8">
                    <CardContent className="p-0">
                      <div className="text-center">
                        <div className="primary-gradient p-8 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                          <service.icon className="h-12 w-12 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-4">
                          Expertise Comprovada
                        </h3>
                        <p className="text-muted-foreground">
                          Metodologias validadas e reconhecidas pelos principais órgãos reguladores do país.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nossa Metodologia
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Processo estruturado para garantir excelência em cada projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((step, index) => (
              <Card 
                key={step.title}
                className={`hover-lift card-gradient text-center animate-fade-in-up animate-delay-${index * 200}`}
              >
                <CardContent className="p-6">
                  <div className="primary-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Setores de Atuação
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expertise especializada nos principais setores da economia brasileira
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {sectors.map((sector, index) => (
              <Card 
                key={sector.name}
                className={`hover-lift card-gradient text-center animate-fade-in-up animate-delay-${index * 200}`}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {sector.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {sector.description}
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
              Pronto para Começar Seu Projeto?
            </h2>
            <p className="text-xl text-background/80 mb-8">
              Entre em contato conosco e descubra como nossos serviços podem transformar sua operação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contato">
                  Solicitar Proposta
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

export default Services;