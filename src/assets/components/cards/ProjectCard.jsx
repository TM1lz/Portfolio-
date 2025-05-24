import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <a href={link} className={styles.link} target="_blank" rel="noopener noreferrer">
          Ver Projeto →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
