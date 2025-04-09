
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold text-primary">VelocNet</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#plans" className="text-gray-600 hover:text-primary">
              Planos
            </a>
            <a href="#features" className="text-gray-600 hover:text-primary">
              Vantagens
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary">
              Depoimentos
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary">
              Contato
            </a>
            <Button>Assinar agora</Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#plans" className="block text-gray-600 hover:text-primary">
              Planos
            </a>
            <a href="#features" className="block text-gray-600 hover:text-primary">
              Vantagens
            </a>
            <a href="#testimonials" className="block text-gray-600 hover:text-primary">
              Depoimentos
            </a>
            <a href="#contact" className="block text-gray-600 hover:text-primary">
              Contato
            </a>
            <Button className="w-full">Assinar agora</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
