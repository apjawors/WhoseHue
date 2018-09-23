import React from 'react'
import ReactDOM from 'react-dom'
import Category from './components/Category'
import Rules from './components/Rules'
import Game from './components/Game'
import {nfl, nba, mlb, nhl} from './components/CategoryLogic'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state      = {league: null,
                       icon: null,
                       playText: "Pick a league!",
                       playClass: "choose",
                       start: false,
                       rules: false,
                       fullscreen: true,
                       countdown: false,
                       category: false
                      }
    this.play       = this.play.bind(this)
    this.rules      = this.rules.bind(this)
    this.menu       = this.menu.bind(this)
    this.select     = this.select.bind(this)
    this.fullscreen = this.fullscreen.bind(this)
    this.readySetGo = this.readySetGo.bind(this)
  }
  rules(){
     this.setState(prevState => ({
      rules: !prevState.rules
    }));
  }
  select(league){
    if (league === "NFL"){
      this.setState({
        league: nfl,
        category: league,
        icon: 'src/components/images/football.svg'
      })
    } else if (league === "NBA"){
      this.setState({
        league: nba,
        category: league,
        icon: 'src/components/images/basketball.svg'
      })
    } else if (league === "MLB"){
      this.setState({
        league: mlb,
        category: league,
        icon: 'src/components/images/baseball.svg'
      })
    } else if (league === "NHL"){
      this.setState({
        league: nhl,
        category: league,
        icon: 'src/components/images/puck.svg'
      })
    }
    this.setState({
      playText: "Play!",
      playClass: "ready"
    })
  }
  fullscreen(){
    this.setState(prevState => ({
      fullscreen: !prevState.fullscreen
    }));
    let ele = document.documentElement
    if (this.state.fullscreen){
      if (ele.requestFullscreen) {
        ele.requestFullscreen();
      } else if (ele.webkitRequestFullscreen) {
        ele.webkitRequestFullscreen();
      } else if (ele.mozRequestFullScreen) {
        ele.mozRequestFullScreen();
      } else if (ele.msRequestFullscreen) {
        ele.msRequestFullscreen();
      } else {
        console.log('Fullscreen API is not supported.');
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else {
        console.log('Fullscreen API is not supported.');
      }
    }
  }
  readySetGo(){
    this.setState({
      playText: 3,
      countdown: true,
    })
    this.timerID = setInterval(
      () => this.play(),
      1000
    )
  }
  play(){
    if (this.state.playText > 1) {
      this.setState({
        playText: this.state.playText - 1
      })
    }
    else {
      if (this.state.playText === 1){
        this.setState({
          playText: "Go!"
        })
      }
      else {
        clearInterval(this.timerID);
        this.setState({
          start: true,
          playText: "Pick a league!",
          playClass: "choose",
          rules: false,
          countdown: false
        })
      }
    }
  }
  menu(){
    this.setState({
      league: null,
      icon: null,
      start: false,
      category: null
    })
  }
  render(){
    let fullscreenText = this.state.fullscreen ? "Fullscreen" : "Exit fullscreen",
        cat = this.state.category, countdown = this.state.countdown
    return (
      <div className="app-grid">
        {!this.state.start ?
          <React.Fragment>
            <div className="title-cont">
              <div className="title shades">SHADES</div>
              <div className="title of">of</div>
              <div className="title sport">SPORTS</div>
            </div>
            <Category class={"NFL"} category={cat} click={!countdown ? () => this.select("NFL") : null} />
            <Category class={"NBA"} category={cat} click={!countdown ? () => this.select("NBA") : null} />
            <Category class={"MLB"} category={cat} click={!countdown ? () => this.select("MLB") : null} />
            <Category class={"NHL"} category={cat} click={!countdown ? () => this.select("NHL") : null} />
            <div className={"button play " + this.state.playClass} onClick={cat && !countdown ? this.readySetGo : null}>{this.state.playText}</div>
            <div className="button rules" onClick={this.rules}>Rules</div>
            <div className="button fs" onClick={this.fullscreen}>{fullscreenText}</div>
            {this.state.rules ?
              <Rules click={this.rules} />  
              :
              null
            }
            <div className="creator">By <span style={{color: "#4FB286"}}>Andrew J</span></div>
          </React.Fragment>
            :
            <Game league={this.state.league} icon={this.state.icon} menu={this.menu}/>
          }
        </div>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'))
