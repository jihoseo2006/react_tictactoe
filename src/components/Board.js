import React, { useState } from 'react'
import Square from './Square'
import "./Board.css";

const Board  = () => {

  const [squares, setSquares] = useState(Array.fill(null));


  const  handleClick = (i) => {
    const newSquares = squares.slice();
    newSquares[i] = 'X';
    setSquares(newSquares);
  }


  const renderSquare = (i) => {
    return <Square value={this.state.squares[i]} 
    onClick={() => this.handleClick(i)}  />
  }


  return (
    <div>
      <div className='status'>Next Player: X, O</div>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}


export default Board