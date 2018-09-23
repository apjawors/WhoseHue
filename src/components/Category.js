import React from 'react'

class Category extends React.Component {
  constructor(props){
    super(props)
    this.state = {animation: true}
    this.load = this.load.bind(this)
  }
  componentDidMount(){
     document.addEventListener("animationend", this.load, false)
  }
  load(e){
    if (e.animationName === "fadeInUp"){
      this.setState({
        animation: false
      })
    }
  }
  componentWillUnmount(){
    document.removeEventListener("animationend", this.load, false)
  }
  render(){
    let fade = this.state.animation ? " fadeInUp" : "",
        rubberBand = !this.state.animation && this.props.class === this.props.category ? " selected" : ""
    return (
      <div className={"league " + this.props.class + fade + rubberBand} onClick={this.props.click}>{this.props.class}</div>
    )
  }
}

export default Category;
