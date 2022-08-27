import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Door from "../../../../components/Door/Door";
import { createDoors, updateDoors } from "../../../../functions/doors";
import DoorModel from "../../../../models/DoorModel";
import styles from "../../../../styles/Game.module.css";

const Game: NextPage = () => {
  const router = useRouter();
  const [doors, setDoors] = useState<DoorModel[]>([]);

  useEffect(() => {
    if (
      router.query.doors !== undefined &&
      router.query.hasGift !== undefined
    ) {
      setDoors(createDoors(+router.query.doors, +router.query.hasGift));
    }
  }, [router?.query]);

  const doorRender = () => {
    return doors.map((door) => (
      <Door
        key={door.number}
        door={door}
        onChange={(newDoor) => setDoors(updateDoors(doors, newDoor))}
      />
    ));
  };

  return (
    <div className={styles.game}>
      <div className={styles.doors}>{doorRender()}</div>
      <div className={styles.buttons}>
        <Link href="/">
          <button>Restart</button>
        </Link>
      </div>
    </div>
  );
};

export default Game;
