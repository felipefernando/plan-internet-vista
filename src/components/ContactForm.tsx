
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cep: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to a server
    console.log("Form submitted:", formData);
    
    // Show success notification
    toast({
      title: "Solicitação enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      cep: "",
    });
  };

  return (
    <section id="contact" className="section-padding gradient-background text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quero contratar agora!</h2>
            <p className="opacity-90 max-w-xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato para finalizar seu pedido.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2">Nome completo</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/20 border-white/20 text-white"
                    placeholder="Digite seu nome"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">E-mail</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/20 border-white/20 text-white"
                    placeholder="Digite seu e-mail"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2">Telefone</label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white/20 border-white/20 text-white"
                    placeholder="(00) 00000-0000"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cep" className="block mb-2">CEP</label>
                  <Input
                    id="cep"
                    name="cep"
                    value={formData.cep}
                    onChange={handleChange}
                    className="bg-white/20 border-white/20 text-white"
                    placeholder="00000-000"
                    required
                  />
                </div>
              </div>
              
              <div className="mt-8">
                <Button type="submit" className="w-full text-primary bg-white hover:bg-gray-100">
                  Solicitar contato
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
