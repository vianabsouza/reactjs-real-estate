import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import FeatureProperties from "./components/FeaturedProperties";
import ContatForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

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
    <div>
      <Navbar />
      <Hero />
      <FeatureProperties properties={properties} />
      <ContatForm />
      <Footer />
    </div>
  );
}

export default App;
