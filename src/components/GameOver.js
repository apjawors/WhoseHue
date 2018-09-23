import React from 'react'

const GameOver = props => {
  let bonus2 = props.bonus2, bonus3 = props.bonus3, finalScore = props.finalScore, finalMessage, time
  let timesClass = bonus2 === 0 && bonus3 > 0 ? "moved" : "unmoved"
  let multsColor = (bonus) => {
    let hex = bonus > 0 ? "#80FF72" : "#777"
    let color = {color: hex}
    return color
  }
  let bonus1color = {
    color: props.bonus1 >= 1 ? "#57B8FF" : "#777"
  }
  let multsAwarded = bonus2 > 0 || bonus3 > 0
  let bothMults = bonus2 > 0 && bonus3 > 0
  let rand = Math.floor(Math.random() * 10)
  
  // Speed title
  let speedText = bonus3 === 5 ? "Lightspeed!" : bonus3 === 3 ? "Blazing!" : bonus3 === 2 ? "Hasty!" : "--"
  
  // Final message
  let scoreless = ["We shall never speak of this again.", "That was seriously impressive for all the wrong reasons.", "0? Really? I mean, REALLY?? 0????", "If you were going for the record of worst score ever then you succeeded with flying colors.", "Between you and me, I'd say you're pretty horrible at this game.", "Hey, Mr. Comedian! Show that score to anyone and you'll get your biggest laugh yet!", "Socrates once said, \"A 0 insults the human race.\"", "Shhh. It's over now. Happy thoughts from here on out.", "That was bad and you should feel bad.", "You didn't score a single point. If you had quit early then at least you'd have had an excuse."]
  let poor = ["...What was that?", "Well that was beyond disappointing.", "Honestly pathetic. Truly.", "Yikes.", "Um, yeah, no.", "Not a sports fan, eh?", "Simple. You're just not good.", "Super bad. Super sad.", "Awful. Just awful.", "Well. That just happened."]
  let mediocre = ["Barely bearable. No lie.", "Well, it's...something", "Hardly impressed.", "Meh.", "Alright. Nothing special.", "Striving for the bare minimum. Real go-getter, I see.", "That was easily forgettable.", "Huh. Sooo...that's it?", "I've seen worse.", "Far, and I mean, FAR from great."]
  let good = ["Now THAT'S hustling.", "Look at you, hot shot.", "Super wet. You really can mop the floor with that score.", "First-rate performance. Beautiful.", "Well well. A color aficionado, are we?", "Whoa now. Watch out for Professor Superior over here.", "Cool off, pyro. You dangerous.", "That was stylin'. Didn't know you liked to fly first class.", "Top dog. Top-shelf execution.", "Congrats. You're now your boss' boss after that."]
  let great = ["BEAU JACKSON!", "JOHN AWOL!", "FERAL GREEN!", "THRUSTKILL BESTBROOK!", "AUTOBAHNER MCFADED!", "ARSON IVERSON!", "MACH DARTNER!", "DEMON SANDERS!", "ILL E. BLAZE!", "THRILLY MAN-OH-MAN-ILTON!"]
  finalMessage = (finalScore >= 20000) || (bonus2 === 4 && bonus3 === 5)? great[rand] : 
                 finalScore >= 5000 && finalScore < 20000 ? good[rand] : 
                 finalScore >= 500 && finalScore < 5000 ? mediocre[rand] : 
                 finalScore > 0 && finalScore < 500 ? poor[rand] :
                 scoreless[rand]
  
  let seconds = props.totalTime,
      mins    = Math.floor(seconds / 60),
      hrs     = Math.floor(mins / 60),
      days    = Math.floor(hrs / 24) 
  if (seconds < 59){
    time = seconds + "s"
  }
  else {
    seconds = seconds % 60
    if (mins < 60){
      time = mins + "m " + seconds + "s"
    }
    else {
      mins = mins % 60
      if (hrs < 24) {
        time = hrs + "h " + mins + "m " + seconds + "s"
      }
      else {
        hrs = hrs % 24
        time = days + "d" + hrs + "h" + mins + "m" + seconds + "s"
      }
    }
  } 
  const addCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <React.Fragment>
      <div className="title game">GAME</div>  
      <div className="title over">OVER</div>
      <img src={props.category} className="category icon1"/>
      <img src={props.category} className="category icon2"/>
      <img src={props.category} className="category icon3"/>
      <div className="stat length">
        <img src="src/components/images/clock.svg"/><br/>
        <span style={bonus1color}>{time}</span>
      </div>
      <div className="stat accuracy">
        <img src="src/components/images/target.svg"/><br/>
        {props.correct} / {props.totalAnswers}
      </div>
      <div className="stat consecutive">
        <img src="src/components/images/consecutive.svg"/><br/>
        <span style={multsColor(props.bonus2)}>{props.consecutive}</span><br/>
      </div>
      <div className="stat speed">
        <img src="src/components/images/bolt.svg"/><br/>
        <span style={multsColor(props.bonus3)}>{speedText}</span><br/>
      </div>
      <div className="divider"></div>
      {props.bonus1 >= 2 ?
        <React.Fragment>
          <div className="row2 bonus1" style={{color: "#777777"}}>
            ( <span style={{color: "#57B8FF"}}>75 </span>x <span style={{color: "#57B8FF"}}>{props.bonus1} </span>)
          </div>
          <div className="row2 plus1" style={{color: "#777777"}}>+</div>
        </React.Fragment>
        :
      props.bonus1 === 1 ?
        <React.Fragment>
          <div className="row2 bonus1" style={{color: "#57B8FF"}}>75</div>
          <div className="row2 plus1" style={{color: "#777777"}}>+</div>
        </React.Fragment>
        :
       null
      }
      <div className="row2 prescore">{props.points}</div>
      {multsAwarded ?
        <React.Fragment>
        <div className={"row2 times " + timesClass}>x</div>
        {bothMults > 0 ? 
         <React.Fragment>
           <div className="row2 bonus2"><span style={{color: "#777"}}>( </span>{bonus2}</div> 
          <div className="row2 plus2">+</div>
          <div className="row2 bonus3">{bonus3}<span style={{color: "#777"}}> )</span></div>
         </React.Fragment>
         : bonus2 > 0 ? <div className="row2 bonus2">{bonus2}</div>
         : <div className="row2 bonus3">{bonus3}</div>
        }
        </React.Fragment>
        :
       null
      }
      <div className="finalscore">
        {addCommas(props.finalScore)}<br/>
      </div>
      <div className="message"><i>{finalMessage}</i></div>
      <div className="button main-menu" onClick={props.menu}>Main Menu</div>
      <div className="button share" >Share</div>
    </React.Fragment>
  )
}

export default GameOver;
