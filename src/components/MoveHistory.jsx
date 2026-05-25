function MoveHistory({ history, currentMove, onJumpToMove }) {
  return (
    <section className="panel-section" aria-labelledby="history-title">
      <h2 id="history-title">Move History</h2>
      <ol className="move-list">
        {history.map((_, move) => {
          const label = move === 0 ? "Go to game start" : `Go to move #${move}`;
          const isCurrentMove = move === currentMove;

          return (
            <li key={move}>
              <button
                className={`history-button${isCurrentMove ? " active" : ""}`}
                type="button"
                aria-current={isCurrentMove ? "step" : undefined}
                onClick={() => onJumpToMove(move)}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default MoveHistory;
