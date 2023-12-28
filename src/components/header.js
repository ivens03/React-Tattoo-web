import React, { useState } from "react";
import "../css/header.css";
import Logo from "../img/logoPng.png";

//<img src={tatuadora} alt="Tatuadora Pudim" className="tatuadora" />

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <div className="menuHamburger">
        <nav className={isActive ? "nav active" : "nav"}>
          <a href="/" className="logo">
            <img className="logo1" src={Logo} alt="Logo" />
          </a>
          <button className="hamburger" onClick={toggleHamburger}></button>
          <ul className="nav-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Estilo</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="tattooPudim">
        <h1>Os melhores traços de toda Fortaleza</h1>
        <a href="!#"><button className="buttonPudim">Vejas as tattos</button></a>
      </div>
    </header>
  );
}

export default Header;
