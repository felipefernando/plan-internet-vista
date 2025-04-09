
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features"; 
import PlansSection from "../components/PlansSection";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <PlansSection />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
