import { calculateWinner, createEmptyBoard } from "./utils/gameLogic.js";

export const initialGameState = {
  history: [createEmptyBoard()],
  currentMove: 0,
  scores: {
    X: 0,
    O: 0,
    draws: 0,
  },
};

function getNextPlayer(currentMove) {
  return currentMove % 2 === 0 ? "X" : "O";
}

function updateScores(scores, nextBoard) {
  const winner = calculateWinner(nextBoard);

  if (winner) {
    return {
      ...scores,
      [winner.player]: scores[winner.player] + 1,
    };
  }

  if (nextBoard.every(Boolean)) {
    return {
      ...scores,
      draws: scores.draws + 1,
    };
  }

  return scores;
}

export function gameReducer(state, action) {
  switch (action.type) {
    case "MAKE_MOVE": {
      const { index } = action.payload;
      const currentBoard = state.history[state.currentMove];

      // Ignore moves that would overwrite a square or continue a finished round.
      if (currentBoard[index] || calculateWinner(currentBoard)) {
        return state;
      }

      const player = getNextPlayer(state.currentMove);
      const nextBoard = currentBoard.map((square, squareIndex) =>
        squareIndex === index ? player : square,
      );
      const nextMove = state.currentMove + 1;
      const nextHistory = state.history.slice(0, nextMove).concat([nextBoard]);

      return {
        ...state,
        history: nextHistory,
        currentMove: nextMove,
        scores: updateScores(state.scores, nextBoard),
      };
    }

    case "JUMP_TO_MOVE": {
      return {
        ...state,
        currentMove: action.payload.move,
      };
    }

    case "RESET_GAME": {
      return {
        ...state,
        history: [createEmptyBoard()],
        currentMove: 0,
      };
    }

    default:
      return state;
  }
}
