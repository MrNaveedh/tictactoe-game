import './styles.scss';
import Board from './components/Board';
import { useState } from 'react';
import { calculateWinner } from './winnerLogic';
import Status from './components/Status';
import History from './components/History';
function App() {
  const [history, setHistory] = useState([
    {
      square: Array(9).fill(null),
      isNext: true,
    },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const gamingBoard = history[currentMove];
  const winner = calculateWinner(gamingBoard.square);
  const handleBtnEvent = clickedPosition => {
    //console.log(clickedPosition);

    if (gamingBoard.square[clickedPosition] || winner != null) return;

    setHistory(currentHistory => {
      const isTraversing = currentMove !== history.length - 1;

      const lastGamingState = isTraversing
        ? currentHistory[currentMove]
        : currentHistory[currentHistory.length - 1];

      const nextSquare = lastGamingState.square.map((curVal, curId) => {
        if (curId === clickedPosition) {
          return lastGamingState.isNext ? 'X' : 'O';
        }
        return curVal;
      });

      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
        : currentHistory;

      return base.concat({
        square: nextSquare,
        isNext: !gamingBoard.isNext,
      });
    });

    setCurrentMove(currentMove => currentMove + 1);
  };
  const moveTo = currentIndex => {
    setCurrentMove(currentIndex);
  };
  return (
    <div className="app">
      <Status winner={winner} gamingBoard={gamingBoard} />
      <Board square={gamingBoard.square} handleBtnEvent={handleBtnEvent} />
      <h3>Current Game History</h3>
      <History history={history} currentMove={currentMove} moveTo={moveTo} />
    </div>
  );
}

export default App;
