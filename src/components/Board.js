import React, { useState } from 'react'
import Square from './Square'
import "./Board.css";

const Board  = () => {
  
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);
  
  let status;
  if(winner){
    status = 'Winner:' + winner;
  }else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  const handleClick = (i) => {
    const newSquares = squares.slice();
    console.log('newSquares', newSquares);
    console.log('newSquares[i]', newSquares[i]);
    
    if(calculateWinner(newSquares) || newSquares[i])
    {
      return;
    }


    newSquares[i] = xIsNext ? 'X': 'O';
    setSquares(newSquares);
    setxIsNext(prev => !prev);
    
  }



  const renderSquare = (i) => {
    return <Square value={squares[i]} 
        onClick={() => handleClick(i)}  />
  }


  return (
    <div>
      <div className='status'>{status}</div>
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


export default Board;

//학원 진도도 그렇고 이제 다시 js 공부를 해야할 떄가 온거 같아요... js 끝나고 다시 리엑트 해야할때 돌아옴