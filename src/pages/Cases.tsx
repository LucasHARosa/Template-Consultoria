import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Shield, 
  Activity, 
  Target, 
  Award, 
  ArrowRight,
  CheckCircle,
  BarChart3,
  Users,
  Clock
} from "lucide-react";

const Cases = () => {
  const cases = [
    {
      id: 1,
      sector: "Saúde",
      title: "Otimização de Reservas Técnicas para Operadora de Saúde",
      client: "Grande Operadora de Saúde",
      challenge: "Adequação às novas diretrizes da ANS e otimização das provisões técnicas para melhor gestão de capital.",
      solution: "Implementamos modelos estatísticos avançados para precificação e constituição de reservas, incluindo análise de sinistralidade e projeções atuariais.",
      results: [
        "Redução de 15% nas provisões técnicas",
        "Conformidade 100% com ANS",
        "Melhoria de 25% na previsibilidade financeira"
      ],
      icon: Activity,
      duration: "8 semanas",
      team: "3 especialistas",
      tags: ["ANS", "Provisões", "Atuária"]
    },
    {
      id: 2,
      sector: "Seguros",
      title: "Modelo de Precificação Dinâmica para Seguro Auto",
      client: "Seguradora Nacional",
      challenge: "Desenvolver um modelo de precificação mais preciso que considerasse fatores de risco em tempo real.",
      solution: "Criamos um modelo de machine learning integrado com dados telemáticos e histórico de sinistros, permitindo ajustes dinâmicos de preços.",
      results: [
        "Aumento de 22% na rentabilidade",
        "Redução de 18% na sinistralidade",
        "Melhoria de 30% na conversão"
      ],
      icon: Shield,
      duration: "12 semanas",
      team: "4 especialistas",
      tags: ["Precificação", "Machine Learning", "Telemática"]
    },
    {
      id: 3,
      sector: "Finanças",
      title: "Sistema de Gestão de Riscos para Banco Digital",
      client: "Fintech de Crédito",
      challenge: "Implementar um sistema robusto de análise de crédito e gestão de riscos para expansão dos negócios.",
      solution: "Desenvolvemos modelos de credit scoring e sistemas de monitoramento em tempo real, incluindo dashboards executivos para tomada de decisão.",
      results: [
        "Redução de 40% na inadimplência",
        "Aumento de 35% no volume de crédito",
        "ROI de 280% em 12 meses"
      ],
      icon: TrendingUp,
      duration: "16 semanas",
      team: "5 especialistas",
      tags: ["Credit Scoring", "Bacen", "Risk Management"]
    },
    {
      id: 4,
      sector: "ESG",
      title: "Desenvolvimento de Métricas ESG para Corporação",
      client: "Multinacional do Agronegócio",
      challenge: "Criar um framework completo de métricas ESG alinhado com padrões internacionais e regulamentações brasileiras.",
      solution: "Estruturamos um sistema de indicadores ESG com coleta automatizada de dados, relatórios customizados e benchmarking setorial.",
      results: [
        "Certificação B-Corp obtida",
        "Melhoria de 45% no rating ESG",
        "Redução de 30% no carbon footprint"
      ],
      icon: Target,
      duration: "20 semanas",
      team: "6 especialistas",
      tags: ["ESG", "Sustentabilidade", "Compliance"]
    },
    {
      id: 5,
      sector: "Imobiliário",
      title: "Análise de Viabilidade para Fundo Imobiliário",
      client: "Gestora de Fundos",
      challenge: "Avaliar a viabilidade de investimentos em diferentes regiões metropolitanas com análise detalhada de riscos e retornos.",
      solution: "Realizamos estudos de mercado abrangentes, modelagem de fluxos de caixa e análise de sensibilidade para diferentes cenários econômicos.",
      results: [
        "Seleção de 12 investimentos rentáveis",
        "TIR média 18% acima do benchmark",
        "Redução de 25% no tempo de análise"
      ],
      icon: BarChart3,
      duration: "14 semanas",
      team: "4 especialistas",
      tags: ["Valuation", "Análise de Mercado", "Due Diligence"]
    },
    {
      id: 6,
      sector: "Pesquisa",
      title: "Estudo de Comportamento do Consumidor Pós-Pandemia",
      client: "Rede de Varejo",
      challenge: "Compreender as mudanças no comportamento de compra e adaptar estratégias comerciais para o novo cenário.",
      solution: "Conduzimos pesquisa quantitativa e qualitativa com 5.000 consumidores, incluindo análise de jornada do cliente e segmentação avançada.",
      results: [
        "Identificação de 6 novos segmentos",
        "Aumento de 28% nas vendas online",
        "Melhoria de 32% na satisfação"
      ],
      icon: Users,
      duration: "10 semanas",
      team: "5 especialistas",
      tags: ["Pesquisa", "Comportamento", "Segmentação"]
    }
  ];

  const stats = [
    { number: "150+", label: "Projetos Entregues" },
    { number: "50+", label: "Clientes Satisfeitos" },
    { number: "R$ 200M+", label: "Valor Gerado" },
    { number: "99%", label: "Taxa de Sucesso" }
  ];

  const testimonials = [
    {
      quote: "A Qualitify nos ajudou a navegar pelas complexas regulamentações da ANS com soluções práticas e eficientes.",
      author: "Diretor Financeiro",
      company: "Operadora de Saúde"
    },
    {
      quote: "O modelo de precificação desenvolvido transformou nossa operação, gerando resultados excepcionais em rentabilidade.",
      author: "CEO",
      company: "Seguradora Nacional"
    },
    {
      quote: "Parceria estratégica que nos permitiu escalar o negócio mantendo controle rigoroso dos riscos.",
      author: "CRO",
      company: "Fintech de Crédito"
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
              Cases de Sucesso
            </h1>
            <p className="text-xl text-background/90 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
              Conheça alguns dos projetos que transformaram desafios em oportunidades 
              de crescimento para nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Cases Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {cases.map((caseStudy, index) => (
              <Card 
                key={caseStudy.id}
                className={`hover-lift card-gradient animate-fade-in-up animate-delay-${index * 200}`}
              >
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Case Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="primary-gradient p-2 rounded-lg">
                          <caseStudy.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {caseStudy.sector}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-foreground mb-3">
                        {caseStudy.title}
                      </h2>
                      
                      <p className="text-muted-foreground mb-4 font-medium">
                        Cliente: {caseStudy.client}
                      </p>

                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Desafio:</h3>
                          <p className="text-muted-foreground">{caseStudy.challenge}</p>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Solução:</h3>
                          <p className="text-muted-foreground">{caseStudy.solution}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-6">
                        {caseStudy.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Results & Details */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-foreground mb-4 flex items-center">
                          <Award className="h-5 w-5 mr-2 text-primary" />
                          Resultados Alcançados
                        </h3>
                        <div className="space-y-3">
                          {caseStudy.results.map((result, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                          <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                          <div className="text-sm font-medium text-foreground">{caseStudy.duration}</div>
                          <div className="text-xs text-muted-foreground">Duração</div>
                        </div>
                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                          <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                          <div className="text-sm font-medium text-foreground">{caseStudy.team}</div>
                          <div className="text-xs text-muted-foreground">Equipe</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              O que Nossos Clientes Dizem
            </h2>
             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
               Depoimentos de quem confia na Qualitify para transformar seus negócios
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className={`hover-lift card-gradient animate-fade-in-up animate-delay-${index * 200}`}
              >
                <CardContent className="p-6">
                  <div className="text-primary text-4xl mb-4">"</div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
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
              Pronto para Ser Nosso Próximo Case de Sucesso?
            </h2>
            <p className="text-xl text-background/80 mb-8">
              Entre em contato conosco e descubra como podemos transformar os desafios da sua empresa em oportunidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contato">
                  Solicitar Consultoria
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-background/30 text-background hover:bg-background hover:text-foreground" asChild>
                <Link to="/servicos">Conhecer Nossos Serviços</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cases;