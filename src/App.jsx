import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import FeatureProperties from "./components/FeaturedProperties";
import ContatForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { PropertiesProvider } from "./providers/PropertyProvider";

function App() {
  return (
    <PropertiesProvider>
      <div>
        <Navbar />
        <Hero />
        <FeatureProperties />
        <ContatForm />
        <Footer />
      </div>
    </PropertiesProvider>
  );
}

export default App;
