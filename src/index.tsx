import React, { PureComponent } from 'react';
import { render } from 'react-dom';

import './styles.css';

class App extends PureComponent {
  public render() {
    return (
      <div>Hello world!</div>
    );
  }
}

render(<App />, document.getElementById('root'));
