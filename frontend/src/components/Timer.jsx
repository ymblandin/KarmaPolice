import "../assets/css/timer.css";

function Timer({ timer }) {
  const convertTime = (seconde) => {
    return `${((seconde - (seconde % 60)) / 60).toString().padStart(2, "0")}:${(
      seconde % 60
    )
      .toString()
      .padStart(2, "0")}`;
  };
  return <div className="timer">{convertTime(timer)}</div>;
}

export default Timer;
