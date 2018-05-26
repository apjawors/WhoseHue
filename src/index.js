import React from 'react'
import ReactDOM from 'react-dom'
import Category from './components/Category'
import Game from './components/Game'
import {nba, nfl, nhl} from './components/CategoryLogic'
import Football from './components/images/football.svg'
import Basketball from './components/images/basketball.svg'
import Baseball from './components/images/baseball.svg'
import Puck from './components/images/puck.svg'
import './index.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state      = {league: null,
                       icon: null,
                       start: false,
                       fullscreen: true,
                       category: null
                      }
    this.play       = this.play.bind(this)
    this.menu       = this.menu.bind(this)
    this.select     = this.select.bind(this)
    this.fullscreen = this.fullscreen.bind(this)
  }
  select(league){
    if (league === "NFL"){
      this.setState({
        league: nfl,
        category: league,
        icon: Football
      })
    } else if (league === "NBA"){
      this.setState({
        league: nba,
        category: league,
        icon: Basketball
      })
    } else if (league === "MLB"){
      this.setState({
        league: nba,
        category: league,
        icon: Baseball
      })
    } else if (league === "NHL"){
      this.setState({
        league: nhl,
        category: league,
        icon: Puck
      })
    }
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
      console.log(this.state.fullscreen)
    }
    play(){
      this.setState({
        start: true
      })
    }
    menu(){
      this.setState({
        start: false,
        league: null,
        icon: null,
        category: null
      })
    }
    render(){
      let playText  = this.state.league === null ? "Pick a league!" : "Play!",
          playClass = this.state.league === null ? "choose" : "ready",
          fullscreenText = this.state.fullscreen ? "Fullscreen (recommended)" : "Exit fullscreen",
          cat = this.state.category
      return (
        <div className="app-grid">
        {!this.state.start ?
          <React.Fragment>
            <div className="title-container">
              <div className="title whose">WHOSE</div>
              <div className="title hue">HUE?</div>
            </div>
            <Category class={"NFL"} category={cat} click={() => this.select("NFL")} />
            <Category class={"NBA"} category={cat} click={() => this.select("NBA")} />
            <Category class={"MLB"} category={cat} click={() => this.select("MLB")} />
            <Category class={"NHL"} category={cat} click={() => this.select("NHL")} />
            <div className={"menu-button play " + playClass} onClick={cat !== null ? this.play : null}>{playText}</div>
            <div className="menu-button rules">Rules</div>
            <div className="menu-button fs" onClick={this.fullscreen}>{fullscreenText}</div>
            <div className="copyright">WhoseHue? &copy; 2018</div>
          </React.Fragment>
            :
            <Game league={this.state.league} icon={this.state.icon} menu={this.menu}/>
          }
        </div>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'))
