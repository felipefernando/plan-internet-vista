
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Fragment, useState } from "react";

const PlanCard = ({
  name,
  price,
  features,
  featureIcons,
  isPopular = false,
  callToAction = "Assinar agora",
}) => {
  const [billingPeriod, setBillingPeriod] = useState("monthly"); // monthly, semestral, annual
  
  // Calculate discounted prices
  const getSemestralPrice = () => (price * 6 * 0.9).toFixed(2);
  const getAnnualPrice = () => (price * 12 * 0.8).toFixed(2);
  
  // Get current price based on selected billing period
  const getCurrentPrice = () => {
    switch (billingPeriod) {
      case "semestral":
        return getSemestralPrice();
      case "annual":
        return getAnnualPrice();
      default:
        return price.toFixed(2);
    }
  };
  
  // Get billing period text
  const getBillingText = () => {
    switch (billingPeriod) {
      case "semestral":
        return "/semestre";
      case "annual":
        return "/ano";
      default:
        return "/mês";
    }
  };

  // Get discount text 
  const getDiscountText = () => {
    switch (billingPeriod) {
      case "semestral":
        return "(10% de desconto)";
      case "annual":
        return "(20% de desconto)";
      default:
        return "";
    }
  };
  
  return (
    <div className={`plan-card bg-white rounded-xl shadow-lg overflow-hidden relative ${isPopular ? 'border-2 border-primary' : ''}`}>
      {isPopular && <span className="badge-popular">Mais Popular</span>}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        
        {/* Billing toggle buttons */}
        <div className="flex flex-wrap gap-2 mb-3">
          <button 
            onClick={() => setBillingPeriod("monthly")}
            className={`text-xs px-2 py-1 rounded ${billingPeriod === "monthly" ? 'bg-primary text-white' : 'bg-gray-100'}`}
          >
            Mensal
          </button>
          <button 
            onClick={() => setBillingPeriod("semestral")}
            className={`text-xs px-2 py-1 rounded ${billingPeriod === "semestral" ? 'bg-primary text-white' : 'bg-gray-100'}`}
          >
            Semestral
          </button>
          <button 
            onClick={() => setBillingPeriod("annual")}
            className={`text-xs px-2 py-1 rounded ${billingPeriod === "annual" ? 'bg-primary text-white' : 'bg-gray-100'}`}
          >
            Anual
          </button>
        </div>
        
        <div className="mb-6">
          <span className="text-3xl font-bold">R$ {getCurrentPrice()}</span>
          <span className="text-gray-500 text-sm">{getBillingText()}</span>
          {billingPeriod !== "monthly" && (
            <div className="text-green-600 text-sm font-medium mt-1">
              {getDiscountText()}
            </div>
          )}
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
