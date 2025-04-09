
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PlanCardProps {
  name: string;
  speed: string;
  price: number;
  oldPrice?: number;
  features: string[];
  isPopular?: boolean;
  callToAction?: string;
}

const PlanCard = ({
  name,
  speed,
  price,
  oldPrice,
  features,
  isPopular = false,
  callToAction = "Assinar agora",
}: PlanCardProps) => {
  return (
    <div className={`plan-card bg-white rounded-xl shadow-lg overflow-hidden relative ${isPopular ? 'border-2 border-primary' : ''}`}>
      {isPopular && <span className="badge-popular">Mais Popular</span>}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <div className="text-3xl font-bold text-primary mb-2">{speed}</div>
        <div className="mb-6">
          {oldPrice && <span className="text-gray-400 line-through mr-2">R$ {oldPrice.toFixed(2)}</span>}
          <span className="text-2xl font-bold">R$ {price.toFixed(2)}</span>
          <span className="text-gray-500 text-sm">/mês</span>
        </div>
        <ul className="mb-6 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          className={`w-full ${isPopular ? 'bg-primary hover:bg-primary/90' : ''}`}
          variant={isPopular ? "default" : "outline"}
        >
          {callToAction}
        </Button>
      </div>
    </div>
  );
};

export default PlanCard;
