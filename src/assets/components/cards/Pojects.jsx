import { useState } from 'react';
import styles from './Projects.module.css';
import img from '../../../assets/img/HomeCardBemVindo.png';
import img2 from '../../../assets/img/MineBlog.png';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: 'Projeto 1',
      description: 'Este é o Projeto 1 - uma aplicação incrível.',
      linkdeploy: 'https://example.com/projeto1',
      images: [img, img2],
    },
    {
      title: 'Projeto 2',
      description: 'Blog pessoal com funcionalidades legais.',
      linkdeploy: '',
      images: [img2],
    },
    {
      title: 'Projeto 3',
      description: 'Em breve!',
      linkdeploy: '',
      images: [],
    },
    {
      title: 'Projeto 3',
      description: 'Em breve!',
      linkdeploy: '',
      images: [],
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      (prev - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.title}>Projetos</h2>

      <div className={styles.projectGrid}>
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className={styles.projectCard}
            onClick={() => handleCardClick(project)}
          >
            {project.images.length > 0 ? (
              <>
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className={styles.projectImage}
                />
              </>
            ) : (
              <span className={styles.ribbon}>EM BREVE</span>
            )}
          </div>
        ))}
      </div>

      {!showAll && (
        <button onClick={() => setShowAll(true)} className={styles.button}>
          Ver mais
        </button>
      )}

      <p className={styles.githubLink}>
        <a
          href="https://github.com/TM1lz?tab=repositories"
          target="_blank"
        >
          Repositórios no GitHub
        </a>
      </p>

      {/* Modal */}
      {selectedProject && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {selectedProject.images.length > 0 && (
              <div className={styles.carousel}>
                <button onClick={prevImage}>&lt;</button>
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt="slide"
                />
                <button onClick={nextImage}>&gt;</button>
              </div>
            )}
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            {selectedProject.linkdeploy && (
              <a
                href={selectedProject.linkdeploy}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.deployLink}
              >
                Ver Projeto
              </a>
            )}
            <button onClick={closeModal} className={styles.closeButton}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
