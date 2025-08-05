// src/components/Projects.jsx
import React, { forwardRef } from 'react';
import styles from './Projects.module.css';

// Substitua pelas suas imagens reais
import portfolioImg from '../assets/img/RainhaIMG.png';
import apiImg from '../assets/img/RainhaIMG.png';
import landingImg from '../assets/img/RainhaIMG.png';

const projects = [
  {
    title: 'Rainha Alimentos',
    description: 'Site feito para por em prática o aprendizado.',
    image: portfolioImg,
    github: 'https://github.com/TM1lz/Rainha_Project',
    demo: 'https://tm1lz.github.io/Rainha_Project/',
  },
  {
    title: 'API NodeJS',
    description: 'Backend de autenticação com JWT usando NodeJS.',
    image: apiImg,
    github: 'https://github.com/TM1lz/GmanF',
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
            <img
              src={project.image}
              alt={project.title}
              className={styles.image}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.buttons}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className={styles.btn}>GitHub</button>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
