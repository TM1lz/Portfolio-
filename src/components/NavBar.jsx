import { useEffect, useState } from "react";
import style from "./Navbar.module.css";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const minLogo = "<Tm/>";

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY !== 0) {
        setVisible(true);
      } else {
        // Scroll para cima
        setVisible(false);
      }
      console.log(currentY);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`${style.navbar} ${!visible ? style.hide : ""}`}>
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
