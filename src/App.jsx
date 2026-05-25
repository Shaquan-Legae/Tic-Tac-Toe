import { useReducer } from "react";
import Board from "./components/Board.jsx";
import MoveHistory from "./components/MoveHistory.jsx";
import Scoreboard from "./components/Scoreboard.jsx";
import Status from "./components/Status.jsx";
import { createInitialGameState, gameReducer } from "./gameReducer.js";
import { getGameStatus } from "./utils/gameLogic.js";

function App() {
  const [state, dispatch] = useReducer(
    gameReducer,
    undefined,
    createInitialGameState,
  );
  const currentBoard = state.history[state.currentMove];
  const status = getGameStatus(
    currentBoard,
    state.currentMove,
    state.startingPlayer,
  );

  return (
    <main className="app-shell" data-theme={state.theme}>
      <section className="game-card" aria-labelledby="game-title">
        <div className="game-header">
          <h1 id="game-title">Tic-Tac-Toe</h1>

          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${state.theme === "dark" ? "light" : "dark"} mode`}
            onClick={() => dispatch({ type: "TOGGLE_THEME" })}
          >
            {state.theme === "dark" ? "☾" : "☀︎"}
          </button>
        </div>

        <div className="game-actions">
          <button
            className="restart-button"
            type="button"
            onClick={() => dispatch({ type: "RESET_GAME" })}
          >
            Restart Game
          </button>
        </div>

        <div className="game-layout">
          <section className="play-area" aria-label="Tic-Tac-Toe board">
            <Status status={status} />
            <Board
              board={currentBoard}
              disabled={Boolean(status.winner) || status.isDraw}
              onSquareClick={(index) =>
                dispatch({ type: "MAKE_MOVE", payload: { index } })
              }
            />
          </section>

          <aside className="side-panel" aria-label="Game details">
            <Scoreboard scores={state.scores} />
            <MoveHistory
              currentMove={state.currentMove}
              history={state.history}
              onJumpToMove={(move) =>
                dispatch({ type: "JUMP_TO_MOVE", payload: { move } })
              }
            />
          </aside>
        </div>
      </section>
    </main>
  );
}

export default App;
