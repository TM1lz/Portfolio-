import style from './Home.module.css';
import tmilz from "../assets/img/o.png";

function Home() {
    return (
        <>
        <div className={style.container_home}>
          <div className={style.home}>

            <div className={style.text}>
              <h1>
                Com grandes <span>habilidades</span>, nascem grandes{" "}
                <span>projetos</span>
              </h1>
              <p>
                Aqueles que são loucos o suficiente para acreditar que podem mudar o
                mundo são, de fato, os que realmente o fazem.
              </p>
              <button className={style.button}>Entre em contato</button>
            </div>

            <div className={style.img}>
              <img src={tmilz} alt="Ilustração de desenvolvedor" className={style.imageElement} />
            </div>

          </div>

          <span className="material-symbols-outlined">
            keyboard_double_arrow_down
          </span>
        </div>
        </>
    );
}

export default Home;
