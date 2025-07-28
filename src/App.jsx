import style from "./App.module.css";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Projects from "./components/Projects";
import Certifications from "./test/Certifications";
import Skills from "./test/Skills";


function App() {
  return (
    <div className={style.containerApp}>
      {/* Navbar */}
      <Navbar />
      {/* Home com logo*/}
      <Home />
      {/* Main */}
      <div className={style.main}>
        <Projects />
        {/* Barra de XP do Minecraft */}
        <Certifications />
        <Skills />
      </div>
      <div className={style.footer}>
        <p>© 2023 Meu Portfólio. Todos os direitos reservados.</p>
      </div>
    </div>
  );
} 

export default App;
