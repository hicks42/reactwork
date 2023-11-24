import { useState } from 'react';
import './Morpion.css';

// #################### square #######################

function Square({ value, onSquareClick, isActive }) {
  const className = isActive ? 'square active' : 'square';
  return (
    <button
      className={className}
      onClick={onSquareClick}
    >
      {value}
    </button>);
}

// #################### board #######################
function Board({ xIsNext, squares, onPlay }) {

  function renderSquare(i, isActive) {
    return (
      <Square
        value={squares[i]}
        onSquareClick={() => handleClick(i)}
        isActive={isActive}
        key={i}
      />
    )
  }

  function handleClick(i) {

    const squareKey = i;
    if (calculateWinner(squares) || squares[i]) {
      return; // #### stop the click si winner ou si la case est pleine ####
    }

    // ####### toggle nextSquare value #######
    const nextSquares = squares.slice();// créer un double
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    const lastMove = getLastMove(squareKey);

    onPlay(nextSquares, squareKey, lastMove);
  }

  function renderBoard() {

    const winner = calculateWinner(squares);
    const winningLine = winner ? winner[1] : []; //si ya winner = winner[1] sinon vide

    const rows = [];
    for (let i = 0; i < 3; i++) {
      let lines = [];
      for (let j = 0; j < 3; j++) {
        const squareNbr = i * 3 + j;
        const isActive = winningLine.includes(squareNbr); // true si les index sont =
        lines.push(renderSquare(squareNbr, isActive));
      }
      rows.push(
        <div className="board-row" key={i}>
          {lines}
        </div>
      );
    }
    return rows;
  }

  // ####### Who is the winner #######
  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = "Bravo " + winner[0] + " tu as gagné: ";
  } else if (squares.every((value) => value !== null)) {
    status = "La partie est finie sur Match-Nul";
  } else {
    status = "Prochain Joueur: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      {renderBoard()}
    </>
  );
}

// #################### game #######################
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [allCoords] = useState([]);
  const [currentMove, setCurrentMove] = useState(0);
  const [squareKey, setSquareKey] = useState(null);
  const [sortAscending, setSortAscending] = useState(true);
  const currentSquares = history[currentMove];
  const lastMove = getLastMove(squareKey);

  function handleToggleSort() {
    setSortAscending((prevState) => !prevState);
  }

  function handlePlay(nextSquares, squareKey, lastMove) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext); // #### toggle next click false/true ####
    setSquareKey(squareKey); // ####  ####
    allCoords.push(lastMove);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0); // setXIsNext passe à true s'il est pair
  }


  // ############### voir l'historique ##################
  const moves = sortAscending ? [...history.keys()] : [...history.keys()].reverse();
  const movesList = moves.map((move) => {
    const description = move === 0 ? 'Recommencer la partie' : 'Aller au coup N°' + move + " / " + allCoords[move - 1];
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  // const moves = history.map((squares, move) => {
  //   let description;
  //   if (move > 0) {
  //     description = 'Aller au coup N°' + move;
  //   } else {
  //     description = 'Recommencer la partie';
  //   }
  //   return (
  //     <li key={move}>
  //       <button onClick={() => jumpTo(move)}>{description}</button>
  //     </li>
  //   );
  // });

  return (
    <>
      <h1>Morpion</h1>
      <div className="game">
        <div className="game-board">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="game-info">
          <div> Le dernier coup est :{lastMove}</div>
          <ol>{movesList}</ol>
          <button onClick={handleToggleSort}>
            {sortAscending ? 'Tri décroissant' : 'Tri croissant'}
          </button>
        </div>
      </div>
    </>
  );
}

// #################### more functions #######################

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      const winPlayer = squares[a];
      const winLine = lines[i];
      return [winPlayer, winLine];
    }
  }
  return null;
}


function getCoordy(i) {
  let coordy
  switch (true) {
    case (i >= 6): coordy = '3';
      break;
    case (i < 6 && i >= 3): coordy = '2';
      break;
    case (i < 3): coordy = '1';
      break;
    default: coordy = null;
  }
  return coordy;
}

function getCoordx(i) {
  let coordx
  switch (true) {
    case (i === 0 || i === 3 || i === 6): coordx = "A";
      break;
    case (i === 1 || i === 4 || i === 7): coordx = "B";
      break;
    case (i === 2 || i === 5 || i === 8): coordx = "C";
      break;
    default: coordx = null;
  }
  return coordx;
}

function getLastMove(i) {
  if (i === null || i === undefined) {
    return null;
  }
  let lastMove = ["colonne " + getCoordx(i), "ligne " + getCoordy(i)].join(', ');
  return lastMove;
}
