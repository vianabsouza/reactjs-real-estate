import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import FeatureProperties from "./components/FeaturedProperties";
import ContatForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { useState, useEffect, createContext } from "react";

export const PropertiesContext = createContext();

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("./src/data/properties.json")
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
      });
  }, []);

  return (
    <PropertiesContext.Provider value={{ properties }}>
      <div>
        <Navbar />
        <Hero />
        <FeatureProperties properties={properties} />
        <ContatForm />
        <Footer />
      </div>
    </PropertiesContext.Provider>
  );
}

export default App;
