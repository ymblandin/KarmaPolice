import "../assets/css/score.css";

function Score({ score }) {
  return (
    <div className="score">
      <p>{score} PTS</p>
    </div>
  );
}

export default Score;
