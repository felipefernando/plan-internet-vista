
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  image?: string;
  testimonial: string;
}

const TestimonialCard = ({ name, role, company, image, testimonial }: TestimonialProps) => {
  return (
    <div className="testimonial-card">
      <div className="mb-4">
        <svg className="h-6 w-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.4 2.7c1.8 0 3.5.6 5 1.7 2.2 1.9 2.8 5 1.4 8.7-1.9 5.1-5.3 8.3-10.2 9.8l-1.1-2.2c3.6-1.2 6.3-3.5 7.2-6.9.1-.5.1-1 .1-1.4-.3.1-.6.2-1 .2-1.7 0-3.1-1.3-3.1-3.1 0-1.6 1.3-2.9 2.9-3 0-.1.5.2.8.2zm11 0c1.8 0 3.5.6 5 1.7 2.2 1.9 2.8 5 1.4 8.7-1.9 5.1-5.3 8.3-10.2 9.8l-1.1-2.2c3.6-1.2 6.3-3.5 7.2-6.9.1-.5.1-1 .1-1.4-.3.1-.6.2-1 .2-1.7 0-3.1-1.3-3.1-3.1 0-1.6 1.3-2.9 2.9-3 0-.1.5.2.8.2z" />
        </svg>
      </div>
      <p className="mb-6 text-gray-600">{testimonial}</p>
      <div className="flex items-center">
        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-500">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Oliveira",
      role: "Gerente de Marketing",
      company: "TechSolutions",
      testimonial: "O ZettaBot revolucionou nossa forma de atender clientes. Conseguimos aumentar nossas vendas em 35% e reduzir o tempo de resposta em 80%.",
    },
    {
      name: "Fernanda Lima",
      role: "CEO",
      company: "Beauty Shop",
      testimonial: "Com o ZettaBot, conseguimos automatizar mais de 70% das perguntas frequentes. Nossos clientes estão mais satisfeitos e nossa equipe mais produtiva.",
    },
    {
      name: "Ricardo Santos",
      role: "Gerente Comercial",
      company: "Auto Parts",
      testimonial: "A facilidade de integrar o ZettaBot com nossos sistemas existentes foi incrível. Agora temos uma visão completa da jornada do cliente em um só lugar.",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Milhares de empresas já transformaram seu atendimento com o ZettaBot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
