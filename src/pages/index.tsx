import type { NextPage } from "next";
import { useState } from "react";
import Door from "../components/Door/Door";
import { createDoors, updateDoors } from "../functions/doors";
import DoorModel from "../models/DoorModel";

const Home: NextPage = () => {
  const [doors, setDoors] = useState<DoorModel[]>(createDoors(4, 1));

  const doorRender = () => {
    return doors.map((door) => (
      <Door
        key={door.number}
        doorModel={door}
        onChange={(newDoor) => setDoors(updateDoors(doors, newDoor))}
      />
    ));
  };

  return <div style={{ display: "flex" }}>{doorRender()}</div>;
};

export default Home;
