// Import dependencies.
import React, { Component } from 'react';

// Import styles.
import ClockHandsStyles from './styles.scss';

class ClockHands extends React.Component{
  constructor(props){
    super(props);
    // Bind methods.
    this.setClockHands = this.setClockHands.bind(this);
  }

  /**
   * function componentDidMount, lifecycle method for when
   * the component is attached to the DOM.
   */
  componentDidMount() {
    // Set clock hands on load.
    this.setClockHands();
    // Update clock hands every second.
    setInterval(() => {
      this.setClockHands();
    }, 1000);
  }

  /**
   * function setClockHands, mathematical function to determine
   * the rotation degrees for the second, minute and hour hands
   * for the clock. Once that is determined, update the specific
   * styling for each element.
   */
  setClockHands(){
    let currentTime = new Date();
    let secondsRotation = (currentTime.getSeconds() * 6 - 270);
    let minutesRotation = (currentTime.getMinutes() * 6 - 270);
    let hoursRotation = (currentTime.getHours() * 30 - 270);
    document.querySelector('.seconds').style.transform = `rotate(${secondsRotation}deg)`;
    document.querySelector('.minutes').style.transform = `rotate(${minutesRotation}deg)`;
    document.querySelector('.hours').style.transform = `rotate(${hoursRotation}deg)`;
  }

  /**
   * function render, lifecycle method for rendering the component.
   */
  render(){
    return(
      <div className="clock-hands">
        <p className="seconds"></p>
        <p className="minutes"></p>
        <p className="hours"></p>
      </div>
    );
  }
}

// Export scene.
export default ClockHands;
