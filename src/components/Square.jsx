function Square({ value, isWinningSquare, disabled, onClick }) {
  const label = value ? `Square marked ${value}` : "Empty square";
  const playerClassName = value ? ` player-${value.toLowerCase()}` : "";

  return (
    <button
      className={`square${playerClassName}${isWinningSquare ? " winning-square" : ""}`}
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Square;
