// Import dependencies.
import React, { Component } from 'react';

// Import components.
import Container from './../../components/container';
import Clock from './components/clock'

// Import scene styles.
import MainSceneStyles from './styles.scss';

class MainScene extends React.Component{
  render(){
    return(
      <div>
        <Container>
          <Clock></Clock>
        </Container>
      </div>
    );
  }
}

// Export scene.
export default MainScene;
