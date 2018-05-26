import React from 'react'
import './styles/Team.css'

const Team = props => {
  return (
    <div className={"team t" + props.class} onClick={props.click}>{props.team}</div>
  )
}

export default Team;
