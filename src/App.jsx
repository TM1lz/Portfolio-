import style from "./App.module.css";
import Home from "./components/Home";
import Navbar from "./components/NavBar";


function App() {
  return (
    <div className={style.containerApp}>
      {/* Navbar */}
      <Navbar />
      {/* Home com logo*/}
      <Home />
      {/* Main */}
      <div className={style.main}>
        <p>© 2023 Meu Portfólio. Todos os direitos reservados.</p>
      </div>
    </div>
  );
} 

export default App;
