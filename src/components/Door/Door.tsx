import { FC } from "react";
import DoorModel from "../../models/DoorModel";
import styles from "../../styles/Door.module.css";

interface DoorProps {
  doorModel: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

const Door: FC<DoorProps> = ({ doorModel, onChange }) => {
  const selectedStyle = doorModel.selected ? styles.selected : "";

  const changeSelection = () => {
    onChange(doorModel.changeSelection());
  };

  return (
    <div className={styles.area} onClick={changeSelection}>
      <div className={`${styles.frame} ${selectedStyle}`}>
        <div className={styles.door}>
          <div className={styles.number}>{doorModel.number}</div>
          <div className={styles.doorHandle}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
};

export default Door;
