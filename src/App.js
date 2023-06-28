
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CentralAtendimento from "./components/CentralAtendimento";
import"./App.css";

function App() {
  return (
    <div className="App">
      <Navbar/>

      {/* 
      <div className="container">
        <Outlet/>
      </div> COMENTÁRIO JSX */}
      <CentralAtendimento />
      <Footer/>
    </div>
  );
}

export default App;
