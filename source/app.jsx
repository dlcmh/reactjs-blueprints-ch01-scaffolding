'use strict';

import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render() {
    console.log('running!');
    return (
      <div style={{textAlign:"center"}}>
        <h1>{this.props.greeting}</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <App greeting="Basic Setup - React Blueprints"/>,
  document.getElementById('container')
);
