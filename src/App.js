import { useState } from "react";
import "./App.css"
import Board from "./components/Board";

function App() {
  
  const [history, setHistory] = useState([{ squares: Array(9).fill(null)}]);
  const [xIsNext, setxIsNext] = useState(true);


  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for( let index = 0; index < lines.length; index++){
      const [a,b,c] = lines[index];
      if(squares[a] 
        && squares[a] === squares[b] 
        && squares[a] === squares[c])
        {
          console.log('squares[a]', squares[a]);
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        game-info
      </div>
    </div>
  );
} 

export default App;
