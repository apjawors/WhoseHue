import React from 'react'
import './styles/DeltaScore.css'

const DeltaScore = props =>  {
  let deltaStyle;
  if (props.delta <= 4){
    deltaStyle = {
      color: "red",
      opacity: "0",
      animation: "down .4s ease"
    }
  }
  if (props.delta === 10){
    deltaStyle = {
      color: "green",
      opacity: "0",
      animation: "up .4s ease"
    }
  }
  return (
    <div className="points delta" style={deltaStyle}>{props.delta}</div>
  )
}

export default DeltaScore;
