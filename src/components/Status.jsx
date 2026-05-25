function Status({ status }) {
  const statusClassName = status.winner || status.isDraw ? "status final" : "status";

  return (
    <p className={statusClassName} aria-live="polite">
      {status.text}
    </p>
  );
}

export default Status;
