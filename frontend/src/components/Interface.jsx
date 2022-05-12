import { useState, useEffect } from "react";
import Score from "./Score";
import Gauge from "./Gauge";
import Bonus from "./Bonus";
import Timer from "./Timer";
import Speed from "./Speed";
import Utils from "../services/Utils";
import "../assets/css/interface.css";

function Interface() {
  const [timer, setTimer] = useState(120);
  const [speed] = useState(Math.floor(Math.random() * 101));
  const [enduranceLevel, setEnduranceLevel] = useState(100);

  useEffect(() => {
    const enduranceRandomEvolution = setInterval(() => {
      setEnduranceLevel((endurance) => {
        if (endurance > 0 && endurance <= 100) {
          return Utils.getRandomGaugeEvolution() < 5
            ? endurance + 1
            : endurance - 2;
        }
        return endurance;
      });
    }, 1000);
    const gameTime = setInterval(() => setTimer((time) => time - 1), 1000);
    return () => {
      clearInterval(gameTime);
      clearInterval(enduranceRandomEvolution);
    };
  }, []);
  return (
    <div className="interface">
      <Score />
      <Timer timer={timer} />
      <Gauge level={enduranceLevel} position="first" />
      <Gauge level={enduranceLevel} position="second" />
      <Bonus />
      <Speed value={speed} />
    </div>
  );
}

export default Interface;
