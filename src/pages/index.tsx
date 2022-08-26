import type { NextPage } from "next";
import { useState } from "react";
import Door from "../components/Door/Door";
import DoorModel from "../models/DoorModel";

const Home: NextPage = () => {
  const [door, setDoor] = useState<DoorModel>(new DoorModel(1));

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Door doorModel={door} onChange={setDoor} />
    </div>
  );
};

export default Home;
