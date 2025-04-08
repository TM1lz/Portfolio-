import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.title}>Projetos</h2>
      <div className={styles.projectGrid}>
        {[1, 2, 3].map((_, index) => (
          <div key={index} className={styles.projectCard}>
            <span className={styles.ribbon}>EM BREVE</span>
          </div>
        ))}
      </div>
    <a href="https://github.com/TM1lz?tab=repositories" target='blank'><button className={styles.button}>Ver mais</button></a>
      <p className={styles.githubLink}>Repositórios no github</p>
    </section>
  );
}
