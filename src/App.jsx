import style from './App.module.css'
import About from './assets/components/cards/About'
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
      </div>
    </div>
    </>
  )
}

export default App
