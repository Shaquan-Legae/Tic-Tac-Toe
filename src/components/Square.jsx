function Square({ value, isWinningSquare, disabled, onClick }) {
  const label = value ? `Square marked ${value}` : "Empty square";

  return (
    <button
      className={`square${isWinningSquare ? " winning-square" : ""}`}
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
