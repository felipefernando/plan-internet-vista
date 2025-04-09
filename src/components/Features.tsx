
import { Wifi, Shield, Clock, Zap, Headphones, Percent } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Conexão estável",
      description: "Tecnologia avançada para garantir estabilidade mesmo nos horários de pico"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Segurança garantida",
      description: "Proteção contra ataques cibernéticos e acesso não autorizado"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Instalação rápida",
      description: "Instalação profissional em até 48 horas após a aprovação"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Alta velocidade",
      description: "Velocidades de download e upload superiores à média do mercado"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Suporte 24/7",
      description: "Equipe técnica disponível todos os dias, incluindo feriados"
    },
    {
      icon: <Percent className="h-8 w-8" />,
      title: "Sem fidelidade",
      description: "Liberdade para escolher o melhor plano sem contratos longos"
    }
  ];

  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher a VelocNet?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nossa empresa oferece internet de alta qualidade com a melhor tecnologia disponível no mercado.
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
