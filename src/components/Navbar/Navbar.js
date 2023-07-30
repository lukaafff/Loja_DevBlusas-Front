import React, { useState } from "react";
import { MenuData } from "./MenuData";
import { Link } from "react-router-dom";
import "./Navbar.css";
import siteFetch from "../../axios/config";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleItemClick = () => {
    setClicked(false); 
  };

  return (
    <nav className="NavbarItens">
      <Link to={`/`}>
        <img src={require("../../images/logo.png")} alt="Logo" />
      </Link>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuData.map((item, index) => (
          <li key={index}>
            {/* Use onClick para chamar a função handleItemClick */}
            <Link to={item.url} className={item.cName} onClick={handleItemClick}>
              {item.title}
            </Link>
          </li>
        ))}

        <div className="nav-rigth">
          <Link to="/carrinho-de-compras" className="footer-links">
            <i className="bx bx-cart"></i>
          </Link>
          <Link to="/login" className="footer-links">
            <div className="login">
              <i className="bx bxs-user"></i>
              <label>Login</label>
            </div>
          </Link>
          <Link to={'/favoritos'} className="footer-links">
            <div className="Nfavorito">
              <i className="bx bx-heart"></i>
              <label className="favoritotxt" >Favoritos</label>
            </div>
          </Link>
        </div>
      </ul>
      <div className="menu" onClick={handleClick}>
        <i
          className={clicked ? "bx bx-x" : "bx bx-menu"}
          id="menu-icon"
        ></i>
      </div>
    </nav>
  );
};

export default Navbar;
