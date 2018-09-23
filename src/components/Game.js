import React from 'react'
import Team from './Team'
import GameOver from './GameOver'
import DeltaScore from './DeltaScore'
import {Category} from './CategoryLogic'

class Game extends React.Component  {
  constructor(props){
    super(props)
    this.state   = {gameType: new Category(this.props.league),
                    points: 0,
                    timeLeft: 15,
                    totalTime: 0,
                    delta: 10,
                    correct: 0,
                    totalAnswers: 1,
                    consecutiveTracker: 0,
                    consecutiveHigh: 0,
                    answer: "",
                    hintsUsed: 0,
                    hintsTotal: 0,
                    gameover: false,
                    bonus1: 0, // Time bonus
                    bonus2: 0, // Consecutive bonus
                    bonus3: 0  // Efficiency bonus
                   }
    this.hint         = this.hint.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this)
  }
  componentDidMount(){
    this.setState({
      answer: this.state.gameType.answer("name"),
      hintsTotal: this.state.gameType.answer("hints")
    })
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }
  componentDidUpdate(prevProps, prevState){
    if (this.state.totalAnswers !== prevState.totalAnswers){
      this.setState({
        answer: this.state.gameType.answer("name"),
        hintsTotal: this.state.gameType.answer("hints")
      })
    }
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick(){
    let time = this.state.totalTime, cor = this.state.correct, ans = this.state.totalAnswers
    let acc = cor / ans, spd = ans / time
    let gameover = this.state.timeLeft > 1 ? false : true
    let bonus1 = Math.floor(time / 300)
    let eff    = time >= 300 && spd >= .7 && acc >= .8 ? 5 :
                 time >= 180 && spd >= .7 && acc >= .7 ? 3 :
                 time >= 60  && spd >= .6 && acc >= .7 ? 2 : 0
    let bonus3 = eff > this.state.bonus3 ? eff : this.state.bonus3
    gameover ? clearInterval(this.timerID) : null
    this.setState({
      timeLeft: this.state.timeLeft - 1,
      totalTime: this.state.totalTime + 1,
      bonus1: bonus1,
      bonus3: bonus3,
      gameover: gameover,
    })
  }
  hint(){
    if (this.state.hintsUsed < this.state.hintsTotal){
      let gameover = this.state.timeLeft < 2 ? true : false
      let points = this.state.points > 3 ? 3 : this.state.points
      gameover ? clearInterval(this.timerID) : null
      this.setState({
        timeLeft: this.state.timeLeft - 1,
        points: this.state.points - points,
        hintsUsed: this.state.hintsUsed + 1,
        delta: this.state.delta - 3,
        gameover: gameover
      })
    }
  }
  handleAnswer(e){
    let points, time, gameover, correct, consTr, consHg, bonus2
    if (this.state.answer === e.currentTarget.textContent){
      points = this.state.points + this.state.delta,
      time = this.state.timeLeft >= 57 ? 60 : this.state.timeLeft + 3,
      gameover = false, correct = 1, consTr = this.state.consecutiveTracker + 1 
    } 
    else {
      points = this.state.points < 11 ? 0 : this.state.points - 10,
      time = this.state.timeLeft < 5 ? 0 : this.state.timeLeft - 4,
      gameover = this.state.timeLeft > 4 ? false : true, correct = 0,
      consTr = 0
    }
    consHg = this.state.consecutiveHigh <= consTr ? consTr : this.state.consecutiveHigh
    bonus2 = consHg >= 50 ? 4 : consHg >= 25 ? 3 : consHg >= 10 ? 2 : 0
    this.setState({
      gameType: new Category(this.props.league),
      points: points,
      timeLeft: time,
      delta: 10,
      hintsUsed: 0,
      correct: this.state.correct + correct,
      totalAnswers: this.state.totalAnswers + 1,
      consecutiveTracker: consTr,
      consecutiveHigh: consHg,
      gameover: gameover,
      bonus2: bonus2
    })
    gameover ? clearInterval(this.timerID) : null
  }
  render(){
    const gT = this.state.gameType, delta = this.state.delta, hT = this.state.hintsTotal,  hU = this.state.hintsUsed, choices = gT.choices(), 
          primary   = gT.answer("primary"), secondary = gT.answer("secondary"), tertiary = gT.answer("tertiary"),
          animation = hU === 0 ? "bounceIn" : hU === hT ? "bounceOut" : "rubberBand",
          b2Color   = hU === 2 ? secondary : primary,
          b3Color   = hU > 0 ? secondary : primary,
          b4Color   = hU === 2 ? tertiary : hU === 1 ? secondary: primary
    const totalBonus1 = this.state.bonus1 * 75, bonus2 = this.state.bonus2, bonus3 = this.state.bonus3,
          totalMultiplier = bonus2 + bonus3 === 0 ? 1 : bonus2 + bonus3
    return (
      <React.Fragment>
        {!this.state.gameover ?
          <React.Fragment>
            <div className="background first"  style={{background: primary}}></div>
            <div className="background second" style={{background: b2Color}}></div>
            <div className="background third"  style={{background: b3Color}}></div>
            <div className="background fourth" style={{background: b4Color}}></div>
            <div className="time">{this.state.timeLeft}</div>
            <img className={"hint-icon " + animation} src={this.props.icon} onClick={this.hint}/>
            <div className="score">{this.state.points}</div>
            {choices.map((c, i) =>
                         <Team
                           team={gT.team(i, "name")}
                           click={this.handleAnswer}
                           key={gT.team(i, "name") + this.state.totalAnswers}
                           class={i + 1}
                           />)
                         }
          </React.Fragment>
          :
          <GameOver
            category={this.props.icon}
            points={this.state.points}
            correct={this.state.correct}
            totalAnswers={this.state.totalAnswers}
            totalTime={this.state.totalTime}
            consecutive={this.state.consecutiveHigh}
            bonus1={this.state.bonus1}
            bonus2={this.state.bonus2}
            bonus3={this.state.bonus3}
            finalScore={(this.state.points + totalBonus1) * totalMultiplier}
            menu={this.props.menu}
            /> 
        }
      </React.Fragment>
    )
  }
}

export default Game;
