import styles from "./GrowEffect.module.css";

const GrowEffect = () => {
  return (
    <span className={styles.background}>
      <a href="https://learning.atheros.ai" className={styles.buttonGlow}>
        learning.atheros.ai
      </a>
    </span>
  );
};

export default GrowEffect;
