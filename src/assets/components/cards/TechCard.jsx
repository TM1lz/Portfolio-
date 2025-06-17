import styles from './TechCard.module.css';

const technologies = ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Angular 17', 'ReactJS'];

export default function TechCard() {
  return (
    <section className={styles.technologiesSection}>
      <h2 className={styles.title}>Tecnologias</h2>
      <div className={styles.techGrid}>
        {technologies.map((tech, index) => (
          <div key={index} className={styles.techCard}>
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}
