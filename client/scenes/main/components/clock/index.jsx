// Import dependencies.
import React, { Component } from 'react';

// Import styles.
import ClockStyles from './styles.scss';

// Import components.
import ClockNumbers from './components/clock-numbers';
import ClockHands from './components/clock-hands';

class Clock extends React.Component{
  /**
   * function render, lifecycle method for rendering the component.
   */
  render(){
    return(
      <div className="clock-wrapper">
        <ClockNumbers></ClockNumbers>
        <ClockHands></ClockHands>
      </div>
    );
  }
}

// Export scene.
export default Clock;
