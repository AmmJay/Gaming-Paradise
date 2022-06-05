import "./App.css";
import Homepage from "./components/Homepage";
import GamePage from "./components/GamePage";
import Flames from "./Games/Flames/Flames";
import { Route, Routes } from "react-router-dom";
import Tictactoe from "./Games/TicTacToe/Tictactoe";
function App() {
  const paths = "/";
  return (
    <div className="App">
      {/* <Homepage className="homepage"></Homepage> */}
      <Routes>
        <Route path="/" element={<Homepage paths={"/"} />} />
        <Route path="/gamepage" element={<GamePage />} />
        <Route path="/flames" element={<Flames />} />
        <Route path="/tictactoe" element={<Tictactoe />} />
      </Routes>
      {/* <GamePage className="gamepage" topsize={10} leftsize={10}></GamePage> */}
    </div>
  );
}

export default App;
