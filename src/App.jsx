import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SecondaryNavbar from "./components/SecondaryNavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import ContactForm from "./components/ContactForm";
import ProductsSection from "./components/ProductsSection";
import ServicesSection from "./components/ServicesSection";
import HeroSection from "./components/HeroSection";
import TestimonialsSection from "./components/TestimonialsSection";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";


function App() {
  return (
    <div className="font-sans text-gray-900">
      <Router>
        <Navbar/>
        <SecondaryNavbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          
          <Route path="/products" element={<ProductsSection/>}/>
          <Route path="/about" element={<AboutSection/>}/>
          <Route path="/services" element={<ServicesSection/>}/>
          <Route path="/contact" element={<ContactForm/>}/>
          <Route path="/testimonials" element={<TestimonialsSection/>}/>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          
        </Routes>
        
      
      <Footer />
      </Router>
      
      
    </div>
  );
}

export default App;
