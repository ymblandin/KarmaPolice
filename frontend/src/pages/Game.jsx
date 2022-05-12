import Model3D from "../components/Model3D";
import Interface from "../components/Interface";
import "../assets/css/game.css";

function Game() {
  return (
    <div className="game">
      <Model3D />
      <Interface />
    </div>
  );
}

export default Game;
