// Import Dependencies.
import React from 'react';
import { Route, Switch } from 'react-router-dom'

// Import Scences.
import MainScene from '../scenes/main/index.jsx';

// Set up routes.
class Routes extends React.Component{
  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' component={MainScene}/>
        </Switch>
      </div>
    );
  }
}


// Export routes.
export default Routes;
