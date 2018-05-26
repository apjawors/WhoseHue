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
    let cls = this.props.class,
        click = this.props.click,
        category  = this.props.category,
        fade = this.state.animation ? " fadeInUp" : "",
        rubberBand = !this.state.animation && cls === category ? " selected" : ""
    return (
      <div className={"league " + cls + fade + rubberBand} onClick={click}>{cls}</div>
    )
  }
}

export default Category;
