import Square from "./Square.jsx";
import { calculateWinner } from "../utils/gameLogic.js";

function Board({ board, disabled, onSquareClick }) {
  const winner = calculateWinner(board);
  const winningLine = winner?.line ?? [];

  return (
    <div className="board" role="grid" aria-label="Tic-Tac-Toe board">
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          isWinningSquare={winningLine.includes(index)}
          disabled={disabled || Boolean(value)}
          onClick={() => onSquareClick(index)}
        />
      ))}
    </div>
  );
}

export default Board;
