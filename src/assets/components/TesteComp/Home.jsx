import React from "react";
import style from "./Home.module.css";
// Imagens 
import imgPessoal from '../../../assets/img/imgpessoal.jpg';

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h1 className={style.title}>
          COM GRANDES <span className={style.dot}>HABILIDADES </span>
          NASCEM GRANDES <span className={style.dot}>PROJETOS</span>.
        </h1>

     
        <p className={style.description}>
          Aqueles que são loucos o suficiente para acharem que podem mudar o mundo, são os que realmente mudam.
        </p>
        <button className={style.button}>Entre em contato</button>

        <div className={style.instagram}>
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
            alt="Instagram"
            className={style.icon}
          />
          <span>@TMilz_p</span>
        </div>
      </div>

      <div className={style.imageWrapper}>
        <div className={style.hexagon}>
          <img
            src={imgPessoal}
            alt="Perfil"
            className={style.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
