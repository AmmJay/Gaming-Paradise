import "./App.css";
import Homepage from "./components/Homepage";
import GamePage from "./components/GamePage";
import { Route, Routes } from "react-router-dom";
function App() {
  const paths = "/";
  return (
    <div className="App">
      {/* <Homepage className="homepage"></Homepage> */}
      <Routes>
        <Route path={paths} element={<Homepage paths={"/"} />} />
        <Route path={paths} element={<GamePage />} />
      </Routes>
      {/* <GamePage className="gamepage" topsize={10} leftsize={10}></GamePage> */}
    </div>
  );
}

export default App;
