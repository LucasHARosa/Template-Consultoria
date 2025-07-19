import { Link } from "react-router-dom";
import { BarChart3, Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="primary-gradient p-2 rounded-lg">
                <BarChart3 className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Strategic Vista</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed mb-4">
              Consultoria especializada em análises inteligentes, transformando riscos em 
              oportunidades e vantagens competitivas. Mais do que números, entregamos 
              precisão para decisões estratégicas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-background transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-background/80 hover:text-background transition-smooth text-sm">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-background/80 hover:text-background transition-smooth text-sm">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/cases" className="text-background/80 hover:text-background transition-smooth text-sm">
                  Cases
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-background/80 hover:text-background transition-smooth text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-background/60" />
                <span className="text-background/80">contato@strategicvista.com.br</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-background/60" />
                <span className="text-background/80">(11) 9999-9999</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-background/60" />
                <span className="text-background/80">São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 Strategic Vista. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;