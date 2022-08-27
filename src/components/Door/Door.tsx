import { FC } from "react";
import DoorModel from "../../models/DoorModel";
import styles from "../../styles/Door.module.css";
import Gift from "../Gift/Gift";

interface DoorProps {
  door: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

const Door: FC<DoorProps> = ({ door, onChange }) => {
  const selectedStyle = door.selected && !door.opened ? styles.selected : "";

  const changeSelection = () => {
    onChange(door.changeSelection());
  };

  const openTheDoor = (event: any | undefined) => {
    event?.stopPropagation();
    onChange(door.open());
  };

  const doorRender = () => {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{door.number}</div>
        <div className={styles.doorHandle} onClick={openTheDoor}></div>
      </div>
    );
  };

  return (
    <div className={styles.area} onClick={changeSelection}>
      <div className={`${styles.frame} ${selectedStyle}`}>
        {door.closed ? doorRender() : door.hasGift ? <Gift /> : false}
      </div>
      <div className={styles.floor}></div>
    </div>
  );
};

export default Door;
