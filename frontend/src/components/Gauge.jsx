import "../assets/css/gauge.css";

function Gauge({ level, position }) {
  return (
    <div className={`gauge ${position}`}>
      <div
        className={`gauge-front ${position}`}
        style={{ height: `${level}%` }}
      />
    </div>
  );
}

export default Gauge;
