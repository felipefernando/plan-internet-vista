
import PlanCard from "./PlanCard";

const PlansSection = () => {
  const plans = [
    {
      name: "Plano Básico",
      speed: "100 Mbps",
      price: 89.9,
      oldPrice: 99.9,
      features: [
        "100 Mbps de velocidade",
        "Wi-Fi grátis",
        "Instalação grátis",
        "Atendimento online"
      ],
      isPopular: false
    },
    {
      name: "Plano Premium",
      speed: "300 Mbps",
      price: 129.9,
      oldPrice: 149.9,
      features: [
        "300 Mbps de velocidade",
        "Wi-Fi 6 grátis",
        "Instalação grátis",
        "Atendimento prioritário",
        "Sem limite de dados"
      ],
      isPopular: true
    },
    {
      name: "Plano Ultra",
      speed: "500 Mbps",
      price: 169.9,
      oldPrice: 199.9,
      features: [
        "500 Mbps de velocidade",
        "Wi-Fi 6 grátis",
        "Instalação grátis",
        "Atendimento VIP 24h",
        "Sem limite de dados",
        "IP fixo opcional"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="plans" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Escolha o plano ideal para você</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos planos flexíveis para atender às suas necessidades de conexão, 
            seja para trabalho, estudos ou entretenimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
