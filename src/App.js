import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import FavoritosProvider from "./components/favoritos/contexts/FavoritosContext";

function App() {
  return (
    <div className="App">
      <FavoritosProvider>
        <Navbar />
        <div className="container-app">
          <Outlet />
        </div>
        <Footer />
      </FavoritosProvider>
    </div>
  );
}

export default App;
