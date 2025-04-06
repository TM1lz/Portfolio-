import style from './App.module.css'
import About from './assets/components/cards/About'
import NavBar from './assets/components/Nav_Footer/NavBar'
function App() {


  return (
    <>
    <div className={style.conteinerBackground}>
    <NavBar></NavBar>
      <div className={style.container}>
      <About></About>
      </div>
      
    </div>
    </>
  )
}

export default App
