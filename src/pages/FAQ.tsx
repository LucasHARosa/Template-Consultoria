import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Search, MessageCircle, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      category: "Geral",
      questions: [
        {
          question: "O que é a Strategic Vista?",
          answer: "Somos uma consultoria especializada em análises inteligentes, transformando riscos em oportunidades através de métodos estatísticos robustos e soluções personalizadas para os setores de saúde, seguros, finanças, sustentabilidade e mercado imobiliário."
        },
        {
          question: "Quais setores vocês atendem?",
          answer: "Atuamos nos setores de Saúde, Seguros, Finanças, Sustentabilidade (ESG) e Mercado Imobiliário, oferecendo soluções especializadas para cada área com expertise regulatória e técnica."
        },
        {
          question: "Onde vocês estão localizados?",
          answer: "Nossa sede fica em São Paulo, SP, mas atendemos clientes em todo o território nacional através de projetos remotos e presenciais."
        }
      ]
    },
    {
      category: "Serviços",
      questions: [
        {
          question: "Quais são os principais serviços oferecidos?",
          answer: "Oferecemos Estatística avançada, Pesquisa e Inteligência de Mercado, Regulação e Conformidade, Soluções Digitais Inteligentes, Consultoria Técnica com Squads sob demanda, e Análises de Impacto ESG."
        },
        {
          question: "Vocês fazem consultoria regulatória para ANS, SUSEP e Bacen?",
          answer: "Sim, somos especializados em entregas técnicas para órgãos reguladores. Produzimos testes de suficiência, perícias atuariais, relatórios regulatórios e documentações de compliance para ANS, SUSEP e Bacen."
        },
        {
          question: "Como funcionam as soluções digitais que vocês desenvolvem?",
          answer: "Desenvolvemos simuladores, calculadoras, dashboards e ferramentas sob medida integradas aos fluxos dos nossos clientes. Todas as soluções têm visual limpo, são intuitivas e transformam dados complexos em insights acionáveis."
        },
        {
          question: "Vocês oferecem equipes temporárias?",
          answer: "Sim, oferecemos consultores especializados e squads completos sob demanda para acelerar projetos específicos, sempre com foco em agilidade, confidencialidade e entregas de alta performance."
        }
      ]
    },
    {
      category: "Projetos",
      questions: [
        {
          question: "Qual é o prazo médio dos projetos?",
          answer: "O prazo varia conforme a complexidade e escopo, geralmente entre 2 a 20 semanas. Projetos de consultoria pontuais podem ser executados em 2-4 semanas, enquanto implementações complexas podem levar 12-20 semanas."
        },
        {
          question: "Como é feito o acompanhamento dos projetos?",
          answer: "Mantemos comunicação constante através de reuniões semanais, relatórios de progresso detalhados e acesso a dashboards de acompanhamento. Nossos clientes sempre sabem o status do projeto em tempo real."
        },
        {
          question: "Vocês trabalham com projetos internacionais?",
          answer: "Sim, temos experiência em projetos internacionais, especialmente para empresas multinacionais que precisam adequar operações brasileiras a padrões globais ou vice-versa."
        },
        {
          question: "Como garantem a confidencialidade dos dados?",
          answer: "Seguimos rigorosos protocolos de segurança da informação, incluindo contratos de confidencialidade (NDAs), criptografia de dados, acesso restrito e conformidade com LGPD. A confidencialidade é prioridade absoluta."
        }
      ]
    },
    {
      category: "Comercial",
      questions: [
        {
          question: "Como é feita a precificação dos projetos?",
          answer: "A precificação é personalizada conforme escopo, complexidade, prazo e recursos necessários. Oferecemos modelos de projeto fechado, por hora ou retainer mensal, sempre com transparência total nos custos."
        },
        {
          question: "Vocês fazem uma consultoria inicial gratuita?",
          answer: "Sim, oferecemos uma primeira análise gratuita do seu projeto para entender necessidades, definir escopo e apresentar nossa proposta de valor. Este diagnóstico inicial não tem custos."
        },
        {
          question: "Quais são as formas de pagamento aceitas?",
          answer: "Aceitamos transferência bancária, PIX e boleto bancário. Para projetos longos, oferecemos parcelamento conforme marcos de entrega (milestones) previamente definidos."
        },
        {
          question: "Há garantias nos trabalhos realizados?",
          answer: "Sim, oferecemos garantia de qualidade em todas as entregas. Caso algum resultado não atenda aos critérios acordados, fazemos os ajustes necessários sem custos adicionais dentro do prazo de garantia."
        }
      ]
    },
    {
      category: "Técnico",
      questions: [
        {
          question: "Quais metodologias estatísticas vocês utilizam?",
          answer: "Utilizamos métodos robustos como regressão avançada, análise multivariada, machine learning, simulação Monte Carlo, análise de sobrevivência, séries temporais e métodos atuariais, sempre validados cientificamente."
        },
        {
          question: "Que ferramentas e tecnologias vocês usam?",
          answer: "Trabalhamos com R, Python, SQL, Tableau, Power BI, Excel avançado e ferramentas especializadas por setor. Escolhemos a tecnologia mais adequada para cada projeto."
        },
        {
          question: "Como validam a qualidade dos modelos desenvolvidos?",
          answer: "Aplicamos testes rigorosos de validação incluindo backtesting, cross-validation, testes de stress, análise de resíduos e validação externa. Todos os modelos passam por peer review interno."
        },
        {
          question: "Vocês fazem integração com sistemas existentes?",
          answer: "Sim, nossas soluções podem ser integradas via APIs, conectores de banco de dados ou outras formas de integração técnica, sempre respeitando a arquitetura e segurança dos sistemas existentes."
        }
      ]
    }
  ];

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      item => 
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Perguntas Frequentes
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Encontre respostas para as principais dúvidas sobre nossos serviços, 
              metodologias e processo de trabalho.
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Buscar pergunta..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQ.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg mb-4">
                Nenhuma pergunta encontrada para "{searchTerm}"
              </p>
              <Button variant="outline" onClick={() => setSearchTerm("")}>
                Limpar Busca
              </Button>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredFAQ.map((category, categoryIndex) => (
                <div key={category.category}>
                  <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((item, questionIndex) => {
                      const itemIndex = categoryIndex * 100 + questionIndex;
                      const isOpen = openItems.includes(itemIndex);
                      
                      return (
                        <Card key={questionIndex} className="hover-lift">
                          <CardContent className="p-0">
                            <button
                              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-smooth"
                              onClick={() => toggleItem(itemIndex)}
                            >
                              <h3 className="font-semibold text-foreground pr-4">
                                {item.question}
                              </h3>
                              {isOpen ? (
                                <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                              )}
                            </button>
                            {isOpen && (
                              <div className="px-6 pb-4 animate-fade-in-up">
                                <p className="text-muted-foreground leading-relaxed">
                                  {item.answer}
                                </p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">&lt; 24h</div>
              <div className="text-muted-foreground">Tempo de Resposta</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99%</div>
              <div className="text-muted-foreground">Taxa de Satisfação</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Projetos Concluídos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="card-gradient p-8">
            <CardContent className="p-0">
              <div className="primary-gradient p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Ainda tem alguma dúvida?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nossa equipe está pronta para esclarecer qualquer questão específica sobre 
                seus projetos e necessidades. Entre em contato conosco!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" asChild>
                  <Link to="/contato">
                    Falar com Especialista
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/servicos">Conhecer Nossos Serviços</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FAQ;