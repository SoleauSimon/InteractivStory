import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Story from '../../views/Story/story';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Route exact path="/" component={Story} />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
