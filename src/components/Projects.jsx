import React, { forwardRef } from 'react';
import styles from './Projects.module.css';
import portfolioImg from '../assets/img/RainhaIMG.png';
import apiImg from '../assets/img/RainhaIMG.png';
import landingImg from '../assets/img/RainhaIMG.png';

const projects = [
  {
    title: 'Portfólio Pessoal',
    description: 'Site pessoal feito com ReactJS e CSS Modules.',
    image: portfolioImg,
    github: 'https://github.com/seuusuario/portfolio',
    demo: 'https://seuportfolio.vercel.app',
  },
  {
    title: 'API NodeJS',
    description: 'Backend de autenticação com JWT usando NodeJS.',
    image: apiImg,
    github: 'https://github.com/seuusuario/api-node',
    demo: '',
  },
  {
    title: 'Landing Page Responsiva',
    description: 'Landing page moderna e responsiva.',
    image: landingImg,
    github: 'https://github.com/seuusuario/landing-page',
    demo: 'https://landingpage.vercel.app',
  },
];               

const Projects = forwardRef((props, ref) => {
  return (
    <section id="projects" ref={ref} className={styles.projectsSection}>
      <h2 className={styles.title}>Meus Projetos</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <img src={project.image} alt={project.title} className={styles.image} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.buttons}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <button className={styles.btn}>GitHub</button>
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <button className={styles.btn}>View</button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});


export default Projects;
