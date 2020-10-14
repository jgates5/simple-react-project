import React, { Component } from 'react'
import Present from "./present.png";
import Dog from "./dog.png";

export default class Comp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: "Please subscribe for further update",
      sub: "subscribe",
      image: Present
     
    }
  }

  onClickToSubscribe = () => 
    this.setState({message: "Please click the present to see what is inside",
    sub: "subscribe"
  })

  pictureOnClick = () => 
    this.setState({
      image:Dog,
      message: "Hurray its a puppy!"
    
  })


pictureOnClick

  
  render() {
    return (
      <div className="Comp">
        <h3>
        {this.state.message}</h3>
        <button onClick={this.onClickToSubscribe}>{this.state.sub}</button>
        <p/>
        <img src={this.state.image} onClick={this.pictureOnClick} alt="" />
          
      </div>
    )
  }
}
