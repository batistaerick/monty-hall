import type { NextPage } from "next";
import Door from "../components/Door/Door";

const Home: NextPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Door />
      <Door />
    </div>
  );
};

export default Home;
