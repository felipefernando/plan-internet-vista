
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="gradient-background text-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Automatize seu atendimento no WhatsApp com ZettaBot
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Transforme sua comunicação com clientes através de chatbots inteligentes e ferramentas de multiatendiemnto. Aumente suas vendas e satisfação do cliente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Ver planos
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Agendar demo
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Teste gratuitamente!</h3>
                <p className="mb-4">Experimente o ZettaBot por 7 dias sem compromisso</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="text" 
                    placeholder="Digite seu WhatsApp" 
                    className="px-4 py-2 rounded-md text-gray-800 w-full"
                  />
                  <Button className="bg-accent hover:bg-accent/90">Começar</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
