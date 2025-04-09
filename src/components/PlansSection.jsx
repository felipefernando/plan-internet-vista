
import PlanCard from "./PlanCard";
import { Users, Phone, List, MessageSquare, FileCheck, BookUser, Tag, MessageCircle, Kanban, Share, Calendar, ExternalLink, BrainCircuit, Infinity } from "lucide-react";

const PlansSection = () => {
  const plans = [
    {
      name: "Plano Basic",
      price: 97,
      features: [
        { text: "1 usuário", icon: <Users className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "1 conexão com WhatsApp", icon: <Phone className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "1 fila de atendimento", icon: <List className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "Respostas rápidas", icon: <MessageSquare className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "Tarefas", icon: <FileCheck className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "Contatos Salvos", icon: <BookUser className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "Tags", icon: <Tag className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "Chat interno", icon: <MessageCircle className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "Funil Kanban", icon: <Kanban className="h-5 w-5 text-green-500 mr-2" /> }
      ],
      isPopular: false,
      callToAction: "Contratar agora"
    },
    {
      name: "Plano Plus+",
      price: 197,
      features: [
        { text: "5 usuários", icon: <Users className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "3 conexões com WhatsApp", icon: <Phone className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "5 filas de atendimento", icon: <List className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "Respostas rápidas", icon: <MessageSquare className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "Tarefas", icon: <FileCheck className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "Contatos Salvos", icon: <BookUser className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "Tags", icon: <Tag className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "Campanhas de disparo", icon: <Share className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "Agendamento de mensagem", icon: <Calendar className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "Chat interno", icon: <MessageCircle className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "API Externo", icon: <ExternalLink className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "Funil Kanban", icon: <Kanban className="h-5 w-5 text-green-500 mr-2" /> }
      ],
      isPopular: true,
      callToAction: "Contratar agora"
    },
    {
      name: "Plano Plus++",
      price: 297,
      features: [
        { text: "5 usuários", icon: <Users className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "4 conexões com WhatsApp", icon: <Phone className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "10 filas de atendimento", icon: <List className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "Respostas rápidas", icon: <MessageSquare className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "Tarefas", icon: <FileCheck className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "Contatos Salvos", icon: <BookUser className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "Tags", icon: <Tag className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "Campanhas de disparo", icon: <Share className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "Agendamento de mensagem", icon: <Calendar className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "Chat interno", icon: <MessageCircle className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "API Externo", icon: <ExternalLink className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "Funil Kanban", icon: <Kanban className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "Open.AI", icon: <BrainCircuit className="h-5 w-5 text-green-500 mr-2" /> },
        { text: "Integrações", icon: <Infinity className="h-5 w-5 text-green-500 mr-2" /> }
      ],
      isPopular: false,
      callToAction: "Contratar agora"
    }
  ];

  return (
    <section id="plans" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Escolha o plano ideal para seu negócio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos planos flexíveis para atender às suas necessidades de atendimento, 
            desde pequenas empresas até grandes corporações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard 
              key={index} 
              name={plan.name} 
              price={plan.price}
              features={plan.features.map(f => f.text)}
              featureIcons={plan.features.map(f => f.icon)}
              isPopular={plan.isPopular}
              callToAction={plan.callToAction}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
