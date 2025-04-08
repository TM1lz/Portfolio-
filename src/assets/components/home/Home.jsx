import style from './Home.module.css';

export default function Home() {
  return (
    <div className={style.container}>
      <h1>
        Com grandes <span className={style.destaque}>habilidades</span>, nascem grandes <span className={style.destaque}>projetos</span>.
      </h1>
    </div>
  );
}
