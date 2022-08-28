import { FC } from "react";
import styles from "../../styles/NumericEntry.module.css";

interface NumericEntryProps {
  text: string;
  value: number;
  onChange: (newValue: number) => void;
}

const NumericEntry: FC<NumericEntryProps> = ({ text, value, onChange }) => {
  const decrement = () => onChange(value - 1);
  const increment = () => onChange(value + 1);

  return (
    <div className={styles.NumericEntry}>
      <span className={styles.text}>{text}</span>
      <span className={styles.value}>{value}</span>
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={decrement}>
          -
        </button>
        <button className={styles.btn} onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

export default NumericEntry;
