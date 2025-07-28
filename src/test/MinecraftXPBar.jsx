import styles from './MinecraftXPBar.module.css';

const MinecraftXPBar = ({ data }) => {
  const getBarColor = () => {
    if (data === 100) return '#00FF00';
    if (data >= 50) return '#f1c40f';
    return '#e74c3c';
  };

  return (
    <div className={styles.container}>
      <div className={styles.xpBarWrapper}>
        <div
          className={styles.xpFill}
          style={{
            width: `${data}%`,
            backgroundColor: getBarColor(),
            boxShadow: `inset 0 0 8px ${getBarColor()}, 0 0 6px ${getBarColor()}`
          }}
        />
        <div className={styles.levelDisplay}>{data}%</div>
      </div>
    </div>
  );
};

export default MinecraftXPBar;
