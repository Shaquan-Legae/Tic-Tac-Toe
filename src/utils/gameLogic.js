export function createEmptyBoard() {
  return Array(9).fill(null);
}

export function calculateWinner(board) {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of winningLines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return {
        player: board[a],
        line: [a, b, c],
      };
    }
  }

  return null;
}

export function getGameStatus(board, currentMove, startingPlayer) {
  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(Boolean);
  const nextPlayer =
    currentMove % 2 === 0
      ? startingPlayer
      : startingPlayer === "X"
        ? "O"
        : "X";

  if (winner) {
    return {
      text: `Winner: ${winner.player}`,
      winner: winner.player,
      winningLine: winner.line,
      isDraw: false,
    };
  }

  if (isDraw) {
    return {
      text: "Draw!",
      winner: null,
      winningLine: [],
      isDraw: true,
    };
  }

  return {
    text: `Next Player: ${nextPlayer}`,
    winner: null,
    winningLine: [],
    isDraw: false,
  };
}
