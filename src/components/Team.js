import React from 'react'

const Team = props => {
  return (
    <div className={"team t" + props.class} onClick={props.click}>{props.team}</div> 
  )
}

export default Team;
