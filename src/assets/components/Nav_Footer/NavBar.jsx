import { useState } from "react";
import styler from "./NavBar.module.css";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("home");
  const logo = "<TM/>";
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollTo = (y, section) => {
    setIsMenuOpen(false);
    setActiveButton(section);
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <div className={styler.container}>
      <div className={styler.logo_nav}>
        <h1>{logo}</h1>
      </div>

      {/* Ícone do menu hamburguer para mobile */}
      <div className={styler.hamburger} onClick={toggleMenu}>
        <div className={styler.line}></div>
        <div className={styler.line}></div>
        <div className={styler.line}></div>
      </div>

      <div className={`${styler.navMenu} ${isMenuOpen ? styler.open : ""}`}>
        <ul>
          <li>
            <button
              onClick={() => scrollTo(0, "home")}
              className={`${styler.link} ${
                activeButton === "home" ? styler.active : ""
              }`}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollTo(400, "empresa")}
              className={`${styler.link} ${
                activeButton === "empresa" ? styler.active : ""
              }`}
            >
              Empresa
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollTo(900, "produtos")}
              className={`${styler.link} ${
                activeButton === "produtos" ? styler.active : ""
              }`}
            >
              Produtos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollTo(1400, "contato")}
              className={`${styler.link} ${
                activeButton === "contato" ? styler.active : ""
              }`}
            >
              Contato
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
