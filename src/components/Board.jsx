import Square from './square';
const Board = ({ square, handleBtnEvent, winningCombination }) => {
  const squareFunction = position => {
    //console.log(position);
    const isWinningCombination = winningCombination.includes(position);
    return (
      <Square
        value={square[position]}
        onClick={() => handleBtnEvent(position)}
        isWinningCombination={isWinningCombination}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {squareFunction(0)}
        {squareFunction(1)}
        {squareFunction(2)}
      </div>
      <div className="board-row">
        {squareFunction(3)}
        {squareFunction(4)}
        {squareFunction(5)}
      </div>
      <div className="board-row">
        {squareFunction(6)}
        {squareFunction(7)}
        {squareFunction(8)}
      </div>
    </div>
  );
};

export default Board;
