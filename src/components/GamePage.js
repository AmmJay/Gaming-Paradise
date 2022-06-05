import "./Gamepage.css";
import gamepagebg from "../resources/background2.png";
import Gamepagetile from "./GamepageTile";
import { Link } from "react-router-dom";
function GamePage(props) {
  return (
    <div className="gamepage">
      <img className="parent" src={gamepagebg} alt="gamepagelayout"></img>
      <Link to="/flames">
        <Gamepagetile
          topsize={95}
          leftsize={140}
          toptext={130}
          lefttext={190}
          name={"Flames"}
          sname={""}
        />
      </Link>
      <Link to="/tictactoe">
        <Gamepagetile
          topsize={95}
          leftsize={540}
          toptext={130}
          lefttext={590}
          name={"Tic Tac"}
          sname={"Toe"}
        />
      </Link>
      <Link to="/snakebite">
        <Gamepagetile
          topsize={95}
          leftsize={940}
          toptext={130}
          lefttext={1000}
          name={"Snake"}
          sname={"Bite"}
        />
      </Link>
      <Link to="/blocksmasher">
        <Gamepagetile
          topsize={400}
          leftsize={140}
          toptext={430}
          lefttext={190}
          name={"Block"}
          sname={"Smasher"}
        />
      </Link>
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
