import { useRef, useEffect, useState } from "react";
import style from "./App.module.css";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Projects from "./components/Projects";
import Certifications from "./test/Certifications";
import Skills from "./test/Skills";

function App() {
  // Refs para as seções
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const certificationsRef = useRef(null);
  const skillsRef = useRef(null);

  // Estado para guardar posições/offsets das seções
  const [sectionPositions, setSectionPositions] = useState({});

  useEffect(() => {
    // Função que atualiza os offsets das seções
    function updatePositions() {
      setSectionPositions({
        home: homeRef.current?.offsetTop || 0,
        projects: projectsRef.current?.offsetTop || 0,
        certifications: certificationsRef.current?.offsetTop || 0,
        skills: skillsRef.current?.offsetTop || 0,
      });
    }
    updatePositions();

    // Atualiza ao redimensionar a janela (responsividade)
    window.addEventListener("resize", updatePositions);

    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  return (
    <div className={style.containerApp}>
      {/* Passa as posições para o Navbar */}
      <Navbar sectionPositions={sectionPositions} />

      {/* Passa a ref para cada componente */}
      <Home ref={homeRef} />
      <div className={style.main}>
        <Projects ref={projectsRef} />
        <Certifications ref={certificationsRef} />
        <Skills ref={skillsRef} />
      </div>
      <div className={style.footer}>
        <p>© 2023 Meu Portfólio. Todos os direitos reservados.</p>
      </div>
    </div>
  );
}

export default App;
