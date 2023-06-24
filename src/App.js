import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
