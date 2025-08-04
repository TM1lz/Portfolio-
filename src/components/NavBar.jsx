import { useState, useEffect } from "react";
import style from "./Navbar.module.css";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Mostrar navbar ao rolar
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha menu ao clicar em link (mobile)
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`${style.navbar} ${visible ? "" : style.hide}`}>
      <div className={style.logo}>{"<Tm/>"}</div>

      <button
        className={style.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`${style.bar} ${menuOpen ? style.bar1 : ""}`}></span>
        <span className={`${style.bar} ${menuOpen ? style.bar2 : ""}`}></span>
        <span className={`${style.bar} ${menuOpen ? style.bar3 : ""}`}></span>
      </button>

      <ul className={`${style.navLinks} ${menuOpen ? style.open : ""}`}>
        <li>
          <a href="#home" onClick={handleLinkClick}>
            Início
          </a>
        </li>
        <li>
          <a href="#projects" onClick={handleLinkClick}>
            Projetos
          </a>
        </li>
        <li>
          <a href="#certifications" onClick={handleLinkClick}>
            Certificações
          </a>
        </li>
        <li>
          <a href="#contato" onClick={handleLinkClick}>
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
