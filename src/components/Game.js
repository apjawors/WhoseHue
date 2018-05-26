import React from 'react'
import Team from './Team'
import GameOver from './GameOver'
import DeltaScore from './DeltaScore'
import {Category} from './CategoryLogic'
import './styles/Game.css'

class Game extends React.Component  {
  constructor(props){
    super(props)
    this.state   = {
      gameType: new Category(this.props.league),
      score: 0,
      time: 30,
      delta: 10,
      totalAnswers: 1,
      correctAnswers: 0,
      hintsTotal: 0,
      hintsLeft: 0,
      gameover: false
    }
    this.hint     = this.hint.bind(this);
    this.correct  = this.correct.bind(this);
    this.wrong    = this.wrong.bind(this);
  }
  componentDidMount(){
    this.setState({
      hintsTotal: this.state.gameType.answer("hints"),
      hintsLeft: this.state.gameType.answer("hints")
    })
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentDidUpdate(prevProps, prevState){
    if (this.state.totalAnswers !== prevState.totalAnswers){
      this.setState({
        hintsTotal: this.state.gameType.answer("hints"),
        hintsLeft: this.state.gameType.answer("hints")
      })
    }
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick(){
    if (this.state.time < 1) {
      this.setState({
        gameover: true
      })
      clearInterval(this.timerID)
    } else {
      this.setState({
        time: this.state.time - 1
      })
    }
  }
  hint(){
    if (this.state.time <= 2){
      this.setState({
        time: 0
      })
    } else {
      this.setState({
        time: this.state.time - 2,
        hintsLeft: this.state.hintsLeft - 1,
      })
    }
    if (this.state.delta === 10){
      this.setState({
        delta: this.state.delta - 3
      })
    } else {
      this.setState({
        delta: this.state.delta - 4
      })
    }
  }
  correct(){
      this.setState({
        gameType: new Category(this.props.league),
        score: this.state.score + this.state.delta,
        time: this.state.time + 3,
        delta: 10,
        totalAnswers: this.state.totalAnswers + 1,
        correctAnswers: this.state.correctAnswers + 1,
      })
  }
  wrong(){
    if (this.state.score <= 10) {
      this.setState({
        score: 0,
        delta: 10
      })
    } else {
      this.setState({
        score: this.state.score - 10,
        delta: 10
      })
    }
    if (this.state.time <= 4){
      this.setState({
        time: 0
      })
    } else {
      this.setState({
        time: this.state.time - 4
      })
    }
    this.setState({
      gameType: new Category(this.props.league),
      totalAnswers: this.state.totalAnswers + 1
    })
  }
  render(){
    const score     = this.state.score, gameType = this.state.gameType, delta = this.state.delta, hintsLeft = this.state.hintsLeft, time = this.state.time,
          answer    = gameType.answer("name"),
          primary   = gameType.answer("primary"),
          secondary = gameType.answer("secondary"),
          tertiary  = gameType.answer("tertiary"),
          choices   = gameType.choices(),
          b2Color   = delta === 3 ? secondary : primary,
          b3Color   = delta < 10 ? secondary : primary,
          b4Color   = delta === 3 ? tertiary : delta === 7 ? secondary: primary,
          hintsAvailable   = hintsLeft > 0 ? true : false,
          animation = hintsAvailable ? "bounceIn" : "bounceOut"
    return (
      <React.Fragment>
      {!this.state.gameover ?
        <React.Fragment>
          <div className="background first"  style={{background: primary}}></div>
          <div className="background second" style={{background: b2Color}}></div>
          <div className="background third"  style={{background: b3Color}}></div>
          <div className="background fourth" style={{background: b4Color}}></div>
          <div className="time">{this.state.time}</div>
          <img className={"hint-icon " + animation} src={this.props.icon} onClick={hintsAvailable ? this.hint : null}/>

        </React.Fragment>
        : null }
        {!this.state.gameover ? choices.map((c, i) =>
          <Team
           team={gameType.team(i, "name")}
           click={answer === gameType.team(i, "name") ? this.correct : this.wrong}
           key={gameType.team(i, "name") + i}
           class={i + 1}
          /> )
          :
          <GameOver
            score={this.state.score}
            menu={this.props.menu}
          />}
      </React.Fragment>
    )
  }
}

export default Game;
