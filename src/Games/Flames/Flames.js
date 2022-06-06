import bgimage from "../../resources/flamesbg.png";
import "./Flames.css";
function Flames(props) {
  return (
    <div className="flames">
      <img className="parent" src={bgimage} alt="bgimage"></img>
      <h2 className="gameName">Flames</h2>
      <li>
        <ul>
          <input className="forms"></input>
        </ul>
      </li>
    </div>
  );
}
export default Flames;
