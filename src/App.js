import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/nav/Navbar";
import Text from "./components/Text";
import Customers from "./components/customers/Customers";
import Dock from "./components/dock/Dock";
import Footer from "./components/footer/Footer";
import Products from "./components/products/Products";
import Services from "./components/services/Services";
import Spotlight from "./components/spotlights/Spotlight";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Text />
      <Products />
      <Spotlight />
      <Customers />
      <Services />
      <Dock />
      <Footer />
    </div>
  );
}

export default App;
