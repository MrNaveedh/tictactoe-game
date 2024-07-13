import PropTypes from 'prop-types';

const Square = ({ value, onClick, isWinningCombination }) => {
  const playerColor = value == 'X' ? 'text-green' : 'text-orange';
  const winningColor = isWinningCombination ? 'winning' : '';
  return (
    <button
      type="button"
      className={`square ${playerColor} ${winningColor}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
Square.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Square;
