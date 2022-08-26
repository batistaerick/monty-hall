import { FC } from "react";
import DoorModel from "../../models/DoorModel";
import styles from "../../styles/Door.module.css";

interface DoorProps {
  doorModel: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

const Door: FC<DoorProps> = ({ doorModel, onChange }) => {
  const selectedStyle =
    doorModel.selected && !doorModel.opened ? styles.selected : "";

  const changeSelection = () => {
    onChange(doorModel.changeSelection());
  };

  const openTheDoor = (event: any | undefined) => {
    event?.stopPropagation();
    onChange(doorModel.open());
  };

  const doorRender = () => {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{doorModel.number}</div>
        <div className={styles.doorHandle} onClick={openTheDoor}></div>
      </div>
    );
  };

  return (
    <div className={styles.area} onClick={changeSelection}>
      <div className={`${styles.frame} ${selectedStyle}`}>
        {doorModel.opened ? false : doorRender()}
      </div>
      <div className={styles.floor}></div>
    </div>
  );
};

export default Door;
