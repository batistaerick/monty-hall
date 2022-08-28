import { FC } from "react";
import styles from "../../styles/Card.module.css";

interface CardProps {
  bgColor?: string;
  children?: any;
}

const Card: FC<CardProps> = ({ bgColor, children }) => {
  return (
    <div className={styles.card} style={{ backgroundColor: bgColor ?? "#fff" }}>
      {children}
    </div>
  );
};

export default Card;
