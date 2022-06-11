import "./Sudoku.css";
import sdbg from "../../resources/tictactoebg.png";
function Sudoku(props) {
  return (
    <div className="sudoku">
      <img className="parent" src={sdbg} alt="I am sudoku"></img>
      <h2 className="text">Sudoku</h2>
      <table>
        <tbody>
          <td></td>
        </tbody>
      </table>
      <input className="cellInput" />
    </div>
  );
}
export default Sudoku;
