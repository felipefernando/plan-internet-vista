
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { ReactNode } from "react";

interface PlanCardProps {
  name: string;
  price: number;
  features: string[];
  featureIcons?: ReactNode[];
  isPopular?: boolean;
  callToAction?: string;
}

const PlanCard = ({
  name,
  price,
  features,
  featureIcons,
  isPopular = false,
  callToAction = "Assinar agora",
}: PlanCardProps) => {
  return (
    <div className={`plan-card bg-white rounded-xl shadow-lg overflow-hidden relative ${isPopular ? 'border-2 border-primary' : ''}`}>
      {isPopular && <span className="badge-popular">Mais Popular</span>}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <div className="mb-6">
          <span className="text-3xl font-bold">R$ {price.toFixed(2)}</span>
          <span className="text-gray-500 text-sm">/mês</span>
        </div>
        <ul className="mb-6 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              {featureIcons && featureIcons[index] ? (
                featureIcons[index]
              ) : (
                <Check className="h-5 w-5 text-green-500 mr-2" />
              )}
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
