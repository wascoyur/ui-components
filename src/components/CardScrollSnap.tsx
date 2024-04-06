import styles from "./CardScrollSnap.module.css";

const CardScrollSnap = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>HTML</div>
      <div className={styles.card}>CSS</div>
      <div className={styles.card}>JS</div>
      <div className={styles.card}>Python</div>
    </div>
  );
};

export default CardScrollSnap;
