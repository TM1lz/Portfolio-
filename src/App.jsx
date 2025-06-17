//Testes
import Home from './assets/components/TesteComp/Home';
//

import style from './App.module.css';
import About from './assets/components/cards/About';
import Project from './assets/components/cards/Project';
import TechCard from './assets/components/cards/TechCard';
// import Home from './assets/components/home/Home';
import NavBar from './assets/components/Nav_Footer/NavBar';

function App() {
  
  return (
    <div className={style.containerApp}>
      <NavBar />
      <div className={style.container}>
        {/* <Home/>
        <About/>
        <TechCard />
        <Project/> */}
        <Home />
      </div>
    </div>
  );
}

export default App;
