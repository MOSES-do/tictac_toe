import { useState } from 'react'
import Board from './components/Board'
import './App.css'

function Game() {

  const [history, setHistory] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);//"X" or "O"
  const currentSquares = history[history.length - 1];



  return (
    <div className="game">

      <div className="game-board">
        <Board xIsnext={xIsNext} squares={currentSquares} setHistory={setHistory} />
      </div>

      <div className="game-info">
        <ol>{ }</ol>
      </div>
    </div>
  )

}

export default Game
