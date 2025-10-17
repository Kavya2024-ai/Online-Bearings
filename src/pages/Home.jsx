import HeroSection from "../components/HeroSection";
import ProductsSection from "../components/ProductsSection";
import AboutSection from "../components/AboutSection";
import ContactForm from "../components/ContactForm";
import SecondaryNavbar from "../components/SecondaryNavbar";
import ServicesSection from "../components/ServicesSection";
import Subscribe from "../components/Subscribe";
import TestimonialsSection from "../components/TestimonialsSection";



export default function Home() {
  return (
    <main>
      <SecondaryNavbar/>
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <ServicesSection/>
      <TestimonialsSection/>
      <Subscribe/>
      <ContactForm />
    </main>
  );
}
