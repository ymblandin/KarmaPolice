import Score from "./Score";
import Gauge from "./Gauge";
import Bonus from "./Bonus";
import Timer from "./Timer";
import Speed from "./Speed";
import "./Interface.css";

function Interface() {
  return (
    <div className="Interface">
      <Score />
      <Timer />
      <Gauge />
      <Gauge />
      <Bonus />
      <Speed />
    </div>
  );
}

export default Interface;
