import style from './App.module.css'
import About from './assets/components/cards/About'
import Projects from './assets/components/cards/Pojects'
import TechCard from './assets/components/cards/TechCard'
import Home from './assets/components/home/Home'
import NavBar from './assets/components/Nav_Footer/NavBar'
function App() {


  return (
    <>
    <div className={style.conteinerBackground}>
    <NavBar></NavBar>
      <div className={style.container}>
      <Home></Home>
      <About></About>
      <TechCard></TechCard>
      <Projects/>
      </div>
    </div>
    </>
  )
}

export default App
