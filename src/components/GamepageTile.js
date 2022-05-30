import gametile from "../resources/tiles game.png";

function GamepageTile(props) {
  return (
    <div>
      <img className="tile" src={gametile} alt="GameTile"></img>
    </div>
  );
}

export default GamepageTile;
