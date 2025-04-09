
import { MessageSquare, Users, Bot, Zap, Clock, Infinity } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Chatbot Inteligente",
      description: "Automatize respostas para perguntas frequentes e aumente a eficiência do atendimento"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Multi-atendimento",
      description: "Gerencie múltiplos atendimentos em uma única plataforma com organização em filas"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Integração com WhatsApp",
      description: "Conexão oficial com a API do WhatsApp Business para comunicação segura"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Respostas rápidas",
      description: "Crie templates de mensagens para agilizar seu atendimento"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Agendamento de mensagens",
      description: "Programe mensagens para seus clientes em datas e horários específicos"
    },
    {
      icon: <Infinity className="h-8 w-8" />,
      title: "Integrações",
      description: "Conecte com diversas ferramentas como DialogFlow, N8N, Webhooks, Typebot e mais"
    }
  ];

  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher o ZettaBot?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nossa plataforma oferece soluções completas para gerenciar sua comunicação via WhatsApp de forma profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="feature-icon mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
