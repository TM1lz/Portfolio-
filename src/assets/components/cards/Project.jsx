import ProjectCard from './ProjectCard';
import styles from './Project.module.css';
const Project = () => {
  return (
    <div className={styles.container}>
      <ProjectCard
        image="../../src/assets/img/RainhaIMG.png"
        title="Rainha Alimentos"
        description="Projeto feito para a Rainha Alimentos, com o objetivo de apresentar os produtos da empresa. O projeto foi desenvolvido REACTJS"
        link="https://tm1lz.github.io/Rainha_Project/"
      />
      <ProjectCard
        image="/images/starbucks.jpg"
        title="Em Breve"
        description="..."
        link="https://example.com/starbucks"
      />
      <ProjectCard
        image="/images/loja-virtual.jpg"
        title="Loja Virtual"
        description="Uma loja virtual criada com HTML, CSS e JavaScript. Permite que o cliente veja o produto e suas informações."
        link="https://example.com/loja"
      />
    </div>
  );
};
export default Project;