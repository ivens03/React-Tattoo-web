import React, { useState } from "react";
import "../css/header.css";
import tatuadora from "../img/tatuadora1.png";
import Logo from "../img/logoPng.png";

//<img src={tatuadora} alt="Tatuadora Pudim" className="tatuadora" />

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      {/*div butão/texto*/}


      {/*div*/}
      <nav className={isActive ? "nav active" : "nav"}>
        <a href="/" className="logo">
          <img className="logo1" src={Logo} alt="Logo" />
        </a>
        <button className="hamburger" onClick={toggleHamburger}></button>
        <ul className="nav-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">Estilo</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

