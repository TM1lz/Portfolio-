import style from "./App.module.css";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Projects from "./components/Projects";
import MinecraftXPBar from "./test/MinecraftXPBar";


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
        <MinecraftXPBar />
      </div>
      <div className={style.footer}>
        <p>© 2023 Meu Portfólio. Todos os direitos reservados.</p>
      </div>
    </div>
  );
} 

export default App;
