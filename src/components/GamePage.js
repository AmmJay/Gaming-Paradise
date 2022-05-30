import "./Gamepage.css";
import gamepagebg from "../resources/background2.png";
import Gamepagetile from "./GamepageTile";
function GamePage(props) {
  return (
    <div className="gamepage">
      <img className="parent" src={gamepagebg} alt="gamepagelayout"></img>
      <Gamepagetile topsize={10} leftsize={10}></Gamepagetile>
    </div>
  );
}

export default GamePage;
