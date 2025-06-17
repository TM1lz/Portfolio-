import style from './Home.module.css';

export default function Home() {
  return (
    <div  className={style.container}>
      <div className={style.content}>
        <h1>
        Com grandes <span className={style.destaque}>habilidades</span>, nascem grandes <span className={style.destaque}>projetos</span>
        </h1>
      <div/>
        <div className={style.buttons}>
          <button className={style.btnPrimary}>Entre em contato</button>
          <button className={style.btnSecondary}>Ver projetos</button>
    <div/>
      </div>
       </div>
        </div>
  );
}