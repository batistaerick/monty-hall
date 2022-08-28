import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import Card from "../components/Card/Card";
import NumericEntry from "../components/NumericEntry/NumericEntry";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [numberOfDoors, setNumberOfDoors] = useState<number>(3);
  const [doorWithGift, setDoorWithGift] = useState<number>(1);

  return (
    <div className={styles.home}>
      <div>
        <Card bgColor="#c0392c">
          <h1 className={styles.montyHall} >Monty Hall</h1>
        </Card>
        <Card bgColor="#fff">
          <NumericEntry
            text="How many Doors?"
            value={numberOfDoors}
            onChange={(newValue) => setNumberOfDoors(newValue)}
          />
        </Card>
      </div>
      <div>
        <Card bgColor="#fff">
          <NumericEntry
            text="Door with Gift"
            value={doorWithGift}
            onChange={(newValue) => setDoorWithGift(newValue)}
          />
        </Card>
        <Card bgColor="#28a085">
          <Link href={`/game/${numberOfDoors}/${doorWithGift}`}>
            <h2 className={styles.link}>Start</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Home;
