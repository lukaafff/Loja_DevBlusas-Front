import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";

import Banner1 from "./images/banner_carrossel.png";
import Banner2 from "./images/banner_carrossel.png";
import Banner3 from "./images/banner_carrossel.png";

import "./App.css";

function App() {
  const images = [
    { src: Banner1, alt: "Banner 1" },
    { src: Banner2, alt: "Banner 2" },
    { src: Banner3, alt: "Banner 3" },
  ];
  return (
    <div className="App">
      <Navbar />
      <Carousel data={images} />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
