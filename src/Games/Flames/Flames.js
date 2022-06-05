import bgimage from "../../resources/flamesbg.png";
import "./Flames.css";
function Flames(props) {
  return (
    <div className="flames">
      <img className="parent" src={bgimage} alt="bgimage"></img>
    </div>
  );
}
export default Flames;
