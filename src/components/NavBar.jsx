
import { useEffect, useState } from "react";
import style from "./Navbar.module.css";

function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const minLogo = "<Tm/>"
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY) {
        setShow(true); // Scroll para baixo -> esconde
      } else {
        setShow(false); // Scroll para cima -> mostra
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`${style.navbar} ${!show ? style.hide : ""}`}>
      <div className={style.logo}>{minLogo}</div>
      <ul className={style.navLinks}>
        <li><a href="#home">Início</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
