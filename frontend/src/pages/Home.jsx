import { NavLink } from "react-router-dom";
import "../assets/css/home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="logo">Karma Police</div>
      <div className="rules">
        <h2>Regles</h2>
        <ul>
          <li>Essaie d&apos;empaler le maximum de braconniers</li>
          <li>Evite les obstacles</li>
          <li>Cours et utilise le boost a bon escient</li>
        </ul>
      </div>
      <div className="command">
        <h2>Commandes</h2>
        <ul>
          <li>
            <kbd>&#8592;</kbd> <kbd>&#8594;</kbd> <span>Deplace toi</span>
          </li>
          <li>
            <kbd>&#8593; </kbd> <span>Evite les obstacles</span>
          </li>
          <li>
            <kbd>S </kbd> <span>Cours</span>
          </li>
          <li>
            <kbd>Z</kbd> <span>Utilise le boost</span>
          </li>
        </ul>
      </div>
      <div className="button-container">
        <div className="button-wrapper">
          <NavLink to="/game" className="button-link">
            <button type="button">Start</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
