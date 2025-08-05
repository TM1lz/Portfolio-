import { forwardRef } from "react";
import style from './Home.module.css';
import tmilz from "../assets/img/o.png";

const Home = forwardRef((props, ref) => {
  return (
    <div id="home" ref={ref} className={style.container_home}>
      <div className={style.home}>
        <div className={style.text}>
          <h1>
            Com grandes <span>habilidades</span>, nascem grandes{" "}
            <span>projetos</span>
          </h1>
          <p>
            Desenvolvedor Front-end, com foco em ReactJS, e sempre buscando aprender mais sobre o mundo da programação.
          </p>

          <button 
            onClick={() => window.location.href="#contato"} 
            className={style.button}
          >
            Entre em contato
          </button>

          <button>
            <a 
              href="/cv-tmilz.pdf" 
              download 
              className={style.button}
            >
              📄 CV Download
            </a>
          </button>
        </div>

        <div className={style.img}>
          <img 
            src={tmilz} 
            alt="Ilustração de desenvolvedor" 
            className={style.imageElement} 
          />
        </div>
      </div>

      <span className="material-symbols-outlined">
        keyboard_double_arrow_down
      </span>
    </div>
  );
});

export default Home;
