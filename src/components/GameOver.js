import React from 'react'
import './styles/GameOver.css'

const GameOver = props => {
  return (
    <div className="go-container animated fadeIn">
      <div className="gameover">Game Over!</div>
      <div className="finalscore">Final Score: {props.score}</div>
      <div className="menu" onClick={props.menu}>Main Menu</div>
    </div>
  )
}

export default GameOver;
