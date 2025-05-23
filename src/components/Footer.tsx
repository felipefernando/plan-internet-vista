
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white flex items-center">
              <MessageSquare className="text-primary h-5 w-5 mr-2" />
              ZettaBot
            </h3>
            <p className="mb-4">
              Solução completa para automatizar e potencializar seu atendimento no WhatsApp, com chatbots inteligentes e ferramentas de gestão.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Planos</h3>
            <ul className="space-y-2">
              <li><a href="#plans" className="hover:text-white">Plano Basic</a></li>
              <li><a href="#plans" className="hover:text-white">Plano Plus+</a></li>
              <li><a href="#plans" className="hover:text-white">Plano Plus++</a></li>
              <li><a href="#plans" className="hover:text-white">Empresarial</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Links úteis</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Sobre nós</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#testimonials" className="hover:text-white">Depoimentos</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>(00) 1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>contato@zettabot.com</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Av. Tecnologia, 1000, São Paulo - SP</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ZettaBot. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
