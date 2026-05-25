function Scoreboard({ scores }) {
  return (
    <section className="panel-section" aria-labelledby="scoreboard-title">
      <h2 id="scoreboard-title">Scoreboard</h2>
      <div className="score-grid">
        <div className="score-tile">
          <span className="score-label">X Wins</span>
          <strong>{scores.X}</strong>
        </div>
        <div className="score-tile">
          <span className="score-label">O Wins</span>
          <strong>{scores.O}</strong>
        </div>
        <div className="score-tile">
          <span className="score-label">Draws</span>
          <strong>{scores.draws}</strong>
        </div>
      </div>
    </section>
  );
}

export default Scoreboard;
