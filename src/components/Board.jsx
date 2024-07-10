import { useState } from 'react';
import Square from './square';
const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);

  const handleBtnEvent = clickedPosition => {
    //console.log(clickedPosition);
    if (square[clickedPosition]) return;
    setSquare(currentSquare => {
      return currentSquare.map((curVal, curId) => {
        if (curId === clickedPosition) {
          return isNext ? 'X' : 'O';
        }
        return curVal;
      });
    });
    setIsNext(isNext => !isNext);
  };
  const squareFunction = position => {
    //console.log(position);
    return (
      <Square
        value={square[position]}
        onClick={() => handleBtnEvent(position)}
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
