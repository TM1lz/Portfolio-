import styles from './MinecraftXPBar.module.css';

const MinecraftXPBar = () => {
  const Text = [
    { valor: 25, porcentagem: "25%", titulo: "Analise e Desenvolvimento de Sistemas" },
    { valor: 100, porcentagem: "100%", titulo: "Back-end com Node.js (Senai)" },
    { valor: 100, porcentagem: "100%", titulo: "JavaScript (Curso em Vídeo)" },
    { valor: 100, porcentagem: "100%", titulo: "HTML5 e CSS3 (Curso em Vídeo)" },
    { valor: 85, porcentagem: "85%", titulo: "React.js (Udemy)" },
  ];

  const getBarColor = (valor) => {
    if (valor === 100) return '#00FF00';
    if (valor >= 50) return '#f1c40f';
    return '#e74c3c';
  };

  return (
<div className={styles.container}>
  <h1 className={styles.title}>Progresso acadêmico</h1>
  {Text.map((item, index) => (
    <div key={index} className={styles.xpItem}>
      <div className={styles.titleDisplay}>{item.titulo}</div>
      <div className={styles.xpBarWrapper}>
        <div
          className={styles.xpFill}
          style={{
            width: `${item.porcentagem}`,
            backgroundColor: getBarColor(item.valor),
            boxShadow: `inset 0 0 8px ${getBarColor(item.valor)}, 0 0 6px ${getBarColor(item.valor)}`
          }}
        />
      </div>
      <div className={styles.levelDisplay}>{item.porcentagem}</div>
    </div>
  ))}
</div>
  );
};

export default MinecraftXPBar;
