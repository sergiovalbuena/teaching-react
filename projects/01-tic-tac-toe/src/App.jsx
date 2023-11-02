import { useState } from "react";

const TURNS = {
  X: "X",
  O: "O",
};

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

const WINNER_COMBOS = [
  [0, 1, 2], //horizontal
  [3, 4, 5], //horizontal
  [6, 7, 8], //horizontal
  [0, 3, 6], //vertical
  [1, 4, 7], //vertical
  [2, 5, 8], //vertical
  [0, 4, 8], //diagonal
  [2, 4, 6], //diagonal
];

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const checkWinner = (boardToCheck) => {
    //recorrer todas las combinaciones para ver si X u O gano
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] && //si no es null
        boardToCheck[a] === boardToCheck[b] && //si son iguales
        boardToCheck[a] === boardToCheck[c] //si son iguales
      ) {
        return boardToCheck[a];
      }
    }
    return null;
  };

  const updateBoard = (index) => {
    //no actualizamos la poscion si ya tieen algo
    if (board[index]) {
      return;
    }
    //actualizar tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    //cambiar de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //revision de ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      // setWinner(newWinner);
      // alert(`el ganador es ${newWinner}`);
      setWinner((prev) => {
        console.log(`Ganador: ${newWinner}, el anterior era ${prev}`);
        return newWinner;
      });
    }
  };

  return (
    <>
      <main className="board">
        <h1>Tic Tac Toe</h1>
        <section className="game">
          {board.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            );
          })}
        </section>

        <div className="turn">
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </div>
      </main>
    </>
  );
}

export default App;
