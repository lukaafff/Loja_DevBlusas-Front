<<<<<<< HEAD
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";

import Banner1 from "./images/banner_carrossel.png";
import Banner2 from "./images/banner_carrossel.png";
import Banner3 from "./images/banner_carrossel.png";

import "./App.css";
=======

import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CentralAtendimento from "./components/CentralAtendimento";
import"./App.css";
>>>>>>> 8b47cb5c9657aa6e7f203e38d1b5213434464e0a

function App() {
  const images = [
    { src: Banner1, alt: "Banner 1" },
    { src: Banner2, alt: "Banner 2" },
    { src: Banner3, alt: "Banner 3" },
  ];
  return (
    <div className="App">
<<<<<<< HEAD
      <Navbar />
      <Carousel data={images} />
      <Cards />
      <Footer />
=======
      <Navbar/>

      {/* 
      <div className="container">
        <Outlet/>
      </div> COMENTÁRIO JSX */}
      <CentralAtendimento />
      <Footer/>
>>>>>>> 8b47cb5c9657aa6e7f203e38d1b5213434464e0a
    </div>
  );
}

export default App;
