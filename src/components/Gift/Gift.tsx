import styles from "../../styles/Gift.module.css";

const Gift = () => {
  return (
    <div className={styles.gift}>
      <div className={styles.lid}></div>
      <div className={styles.body}></div>
      <div className={styles.giftBowHorizontal}></div>
      <div className={styles.giftBowVertical}></div>
    </div>
  );
};

export default Gift;
