const Status = ({ winner, gamingBoard }) => {
  const { square, isNext } = gamingBoard;

  const noMovesLeft = square.every(currentElement => currentElement != null);
  const nextPlayer = isNext ? 'X' : 'O';
  const renderMessage = () => {
    if (!noMovesLeft && !winner) {
      return (
        <div>
          Next player{' '}
          <span className={isNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </div>
      );
    }
    if ((!noMovesLeft && winner) || (noMovesLeft && winner)) {
      return (
        <div>
          Winner is{' '}
          <span className={isNext ? 'text-orange' : 'text-green'}>
            {winner}
          </span>
        </div>
      );
    }
    if (noMovesLeft && !winner) {
      return <div>Its a tie</div>;
    }
  };

  return <h2 className="status-message">{renderMessage()}</h2>;
};
export default Status;
