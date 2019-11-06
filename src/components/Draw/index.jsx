import React, { Component } from 'react'
import './style.css'

export default class Draw extends Component {
    constructor(props){
        super(props);

        this.drawCard = this.drawCard.bind(this);
    }

    drawCard(){
      this.props.drawCard();
    }
    
  render(props){
    return (
      <div className="buttonContainer">
        <button className="myButton" onClick={this.drawCard}>Draw Card</button>
      </div>
    )
  }
}
