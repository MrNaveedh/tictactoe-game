import './styles.scss';
import Board from './components/Board';
import { useState } from 'react';
import { calculateWinner } from './winnerLogic';
import Status from './components/Status';
import History from './components/History';

const NEW_GAME = [
  {
    square: Array(9).fill(null),
    isNext: true,
  },
];
function App() {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);
  const gamingBoard = history[currentMove];
  const { winner, winningCombinations } = calculateWinner(gamingBoard.square);
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
  const reset = currentIndex => {
    setCurrentMove(currentIndex);
    setHistory(() => NEW_GAME);
  };
  return (
    <div className="app">
      <h1>
        <span style={{ color: '#FF4500' }}>Tic</span>
        <span style={{ color: '#00FFFF' }}>Tac</span>
        <span style={{ color: '#FF4500' }}>Toe</span>
      </h1>
      <Status winner={winner} gamingBoard={gamingBoard} />
      <Board
        square={gamingBoard.square}
        handleBtnEvent={handleBtnEvent}
        winningCombination={winningCombinations}
      />
      <button
        className={`btn-reset ${winner ? 'active' : ''}`}
        type="button"
        onClick={() => reset(0)}
      >
        Start New Game
      </button>
      <h3>Current Game History</h3>
      <History history={history} currentMove={currentMove} moveTo={moveTo} />
    </div>
  );
}

export default App;
