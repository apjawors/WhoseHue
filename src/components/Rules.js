import React from 'react'
import Slider from "react-slick";

const Rules = props => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <div className="rules-container">
      <div className="rules-header"><span style={{color: "#57B8FF"}}>How</span> to <span style={{color: "#FF6F00"}}>Play</span></div>
      <Slider {...settings}>
        <div className="rule">Simple. Observe the background color and quickly choose the team who wears that color. Points are earned or lost with each guess. Easy, right?</div>
        <div className="rule">Correct answers add 3 seconds to your timer, and wrong answers subtract 4 seconds. Your timer caps at 60, but should it hit 0, the game is over. You start with 15 seconds. Lucky you.</div>
        <div className="rule">What's that? You're not ready to lose? Then postpone the inevitable by using hints! Selecting the center icon<br/>
          <div style={{"display": "inline-flex"}}><img src="src/components/images/football.svg"/><img src="src/components/images/basketball.svg"/><img src="src/components/images/baseball.svg"/><img src="src/components/images/puck.svg"/></div><br/>
          reveals more colors of the correct team and turns this game into a joke. <i>Really.</i> So yeah, no reason not to use them... 
        </div>
        <div className="rule">WRONG! Hahaha! You're too easy!<br/><br/> 
          Not only do you earn less points when you use a hint, you also lose an extra second from your timer. Sure, it might not seem like much, but the clock knows all and never stops. Hints do more harm than good...</div>
        <div className="rule">WRONG AGAIN! Lmao wow you should be embarrased.<br/><br/> 
          Speed and accuracy bonuses are rewarded to, well, speedy and accurate players! Hints could very well be the reason you get an insane multiplier at the end...or they could be the reason you lose too early. Hmmm. Decisions decisions!</div>
        <div className="rule">That's it! Just be smart when you play. Don't be not smart either!<br/><br/>
          Good luck!
        </div>
      </Slider>
      <div className="close" onClick={props.click}>X</div>
    </div>
  )
}

export default Rules;