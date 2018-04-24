// Import dependencies.
import React, { Component } from 'react';

// Import styles.
import ClockNumbersStyles from './styles.scss';

class ClockNumbers extends React.Component{
  constructor(props){
    super(props);
  }

  /**
   * function render, lifecycle method for rendering the component.
   */
  render(){
    return(
      <div className="clock-numbers">
        <p className="twelve">|</p>
        <p className="one">|</p>
        <p className="two">|</p>
        <p className="three">|</p>
        <p className="four">|</p>
        <p className="five">|</p>
        <p className="six">|</p>
        <p className="seven">|</p>
        <p className="eight">|</p>
        <p className="nine">|</p>
        <p className="ten">|</p>
        <p className="eleven">|</p>
      </div>
    );
  }
}

// Export scene.
export default ClockNumbers;
