import { useState, useEffect } from "react";
import Score from "./Score";
import Gauge from "./Gauge";
import Bonus from "./Bonus";
import Timer from "./Timer";
import Speed from "./Speed";
import "./Interface.css";

function Interface() {
  const [timer, setTimer] = useState(120);
  const [speed] = useState(Math.floor(Math.random() * 101));

  useEffect(() => {
    const gameTime = setInterval(() => setTimer((time) => time - 1), 1000);
    return () => {
      clearInterval(gameTime);
    };
  }, []);
  return (
    <div className="Interface">
      <Score />
      <Timer timer={timer} />
      <Gauge />
      <Gauge />
      <Bonus />
      <Speed value={speed} />
    </div>
  );
}

export default Interface;
