import React, { forwardRef } from 'react';
import styles from './Certifications.module.css';
import MinecraftXPBar from './MinecraftXPBar';

const certifications = [
  {
    "title": "Análise e Desenvolvimento de Sistemas",
    "platform": "Instituição",
    "year": 2025,
    "tags": ["Lógica", "Banco de Dados", "Programação"],
    "porcentagem": 15
  },
  {
    "title": "HTML e CSS",
    "platform": "Curso em Vídeo",
    "year": 2023,
    "tags": ["HTML", "CSS", "Responsividade"],
    "porcentagem": 100
  },
  {
    "title": "JavaScript",
    "platform": "Curso em Vídeo",
    "year": 2023,
    "tags": ["JavaScript", "DOM", "ES6+"],
    "porcentagem": 100
  },
  {
    "title": "ReactJS",
    "platform": "Udemy",
    "year": 2024,
    "tags": ["React", "Hooks", "Componentes"],
    "porcentagem": 100
  },
  {
    "title": "NodeJS",
    "platform": "Udemy",
    "year": 2023,
    "tags": ["Node.js", "Express", "APIs"],
    "porcentagem": 100
  },
  {
    "title": "BackEnd",
    "platform": "Senai",
    "year": 2023,
    "tags": ["Back-end", "APIs", "Segurança"],
    "porcentagem": 100
  },
  {
    "title": "Angular",
    "platform": "Udemy",
    "year": 2023,
    "tags": ["Angular", "TypeScript", "APIs"],
    "porcentagem": 60
  }
]

const Certifications = forwardRef((props, ref) => {
  return (
    <div id='certifications' ref={ref} className={styles.certifications}>
      <h2>Cursos e Certificações</h2>
      <div className={styles.cards}>
        {certifications.map((cert, index) => (
          <div key={index} className={styles.card}>
            <h3>{cert.title}</h3>
            <p>{cert.platform} • {cert.year}</p>
            <div className={styles.tags}>
              {cert.tags.map((tag, idx) => (
                <span key={idx} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <MinecraftXPBar data={cert.porcentagem} />
            <div>{cert.porcentagem}%</div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Certifications;
