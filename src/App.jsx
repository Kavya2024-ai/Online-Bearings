import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SecondaryNavbar from "./components/SecondaryNavbar";

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <SecondaryNavbar/>
      
      <Home />
      <Footer />
    </div>
  );
}

export default App;
