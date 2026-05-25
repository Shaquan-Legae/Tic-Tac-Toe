function MoveHistory({ history, currentMove, onJumpToMove }) {
  return (
    <section className="panel-section" aria-labelledby="history-title">
      <h2 id="history-title">Move History</h2>

      <select
        className="move-select"
        value={currentMove}
        onChange={(event) => onJumpToMove(Number(event.target.value))}
      >
        {history.map((_, move) => {
          const label = move === 0 ? "Game Start" : `Move ${move}`;

          return (
            <option key={move} value={move}>
              {label}
            </option>
          );
        })}
      </select>
    </section>
  );
}

export default MoveHistory;
