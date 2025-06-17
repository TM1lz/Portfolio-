import { useState } from "react";
import styler from "./NavBar.module.css";

export default function NavBar({ sectionPositions }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("home");
  const logo = "<TM/>";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollTo = (section) => {
    const y = sectionPositions[section];
    if (y === undefined) return;

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

      <div className={styler.hamburger} onClick={toggleMenu}>
        <div className={styler.line}></div>
        <div className={styler.line}></div>
        <div className={styler.line}></div>
      </div>

      <div className={`${styler.navMenu} ${isMenuOpen ? styler.open : ""}`}>
        <ul>
          <li>
            <button
              onClick={() => scrollTo("home")}
              className={`${styler.link} ${
                activeButton === "home" ? styler.active : ""
              }`}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollTo("about")}
              className={`${styler.link} ${
                activeButton === "about" ? styler.active : ""
              }`}
            >
              Empresa
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollTo("tech")}
              className={`${styler.link} ${
                activeButton === "tech" ? styler.active : ""
              }`}
            >
              Produtos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollTo("project")}
              className={`${styler.link} ${
                activeButton === "project" ? styler.active : ""
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
