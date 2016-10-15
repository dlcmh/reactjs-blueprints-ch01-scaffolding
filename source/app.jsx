'use strict';

import React from 'react';

// https://twitter.com/dan_abramov/status/652030099609489408
// ES6 tip: instead of importing ReactDOM from 'react-dom' and then calling
// ReactDOM.render(), just import { render } from 'react-dom'.
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

// No need to use RenderDOM.render()
render(
  <App greeting="Basic Setup - React Blueprints"/>,
  document.getElementById('container')
);
