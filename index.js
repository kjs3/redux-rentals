import 'babel-core/polyfill';

import './index.scss';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        Hello Redux Ration!
      </div>
    );
  }
}

React.render(
  <App />,
  document.getElementById('root')
);