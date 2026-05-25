import { calculateWinner, createEmptyBoard } from "./utils/gameLogic.js";

function getRandomStartingPlayer() {
  return Math.random() < 0.5 ? "X" : "O";
}

export function createInitialGameState() {
  return {
    history: [createEmptyBoard()],
    currentMove: 0,
    startingPlayer: getRandomStartingPlayer(),
    roundResult: null,
    theme: "dark",
    scores: {
      X: 0,
      O: 0,
      draws: 0,
    },
  };
}

function getNextPlayer(currentMove, startingPlayer) {
  if (currentMove % 2 === 0) {
    return startingPlayer;
  }

  return startingPlayer === "X" ? "O" : "X";
}

function getRoundResult(nextBoard) {
  const winner = calculateWinner(nextBoard);

  if (winner) {
    return winner.player;
  }

  if (nextBoard.every(Boolean)) {
    return "draws";
  }

  return null;
}

function addScore(scores, result) {
  if (!result) {
    return scores;
  }

  return {
    ...scores,
    [result]: scores[result] + 1,
  };
}

function removeScore(scores, result) {
  if (!result) {
    return scores;
  }

  return {
    ...scores,
    [result]: Math.max(0, scores[result] - 1),
  };
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

      const player = getNextPlayer(state.currentMove, state.startingPlayer);
      const nextBoard = currentBoard.map((square, squareIndex) =>
        squareIndex === index ? player : square,
      );
      const nextMove = state.currentMove + 1;
      const nextHistory = state.history.slice(0, nextMove).concat([nextBoard]);
      const nextRoundResult = getRoundResult(nextBoard);
      const isRewritingHistory = state.currentMove < state.history.length - 1;
      const currentScores =
        isRewritingHistory && state.roundResult
          ? removeScore(state.scores, state.roundResult)
          : state.scores;

      return {
        ...state,
        history: nextHistory,
        currentMove: nextMove,
        roundResult: nextRoundResult,
        scores: addScore(currentScores, nextRoundResult),
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
        startingPlayer: getRandomStartingPlayer(),
        roundResult: null,
      };
    }

    case "TOGGLE_THEME": {
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };
    }

    default:
      return state;
  }
}
