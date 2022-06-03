import "./Gamepage.css";
import gamepagebg from "../resources/background2.png";
import Gamepagetile from "./GamepageTile";
function GamePage(props) {
  return (
    <div className="gamepage">
      <img className="parent" src={gamepagebg} alt="gamepagelayout"></img>
      <Gamepagetile
        topsize={95}
        leftsize={140}
        toptext={130}
        lefttext={190}
        name={"Flames"}
        sname={""}
      ></Gamepagetile>
      <Gamepagetile
        topsize={95}
        leftsize={540}
        toptext={130}
        lefttext={590}
        name={"Tic Tac"}
        sname={"Toe"}
      ></Gamepagetile>
      <Gamepagetile
        topsize={95}
        leftsize={940}
        toptext={130}
        lefttext={1000}
        name={"Snake"}
        sname={"Bite"}
      ></Gamepagetile>
      <Gamepagetile
        topsize={400}
        leftsize={140}
        toptext={430}
        lefttext={190}
        name={"Block"}
        sname={"Smasher"}
      ></Gamepagetile>
      <Gamepagetile
        topsize={400}
        leftsize={540}
        toptext={440}
        lefttext={600}
        name={"Sudoku"}
        sname={""}
      ></Gamepagetile>
      <Gamepagetile
        topsize={400}
        leftsize={940}
        toptext={440}
        lefttext={980}
        name={"Rock-Paper"}
        sname={"scissor"}
      ></Gamepagetile>
    </div>
  );
}

export default GamePage;
