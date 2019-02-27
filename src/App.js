import React, { Component } from 'react';
import './App.css';
import Facebook from './components/Facebook'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Facebook Auth Component.</h1>
          <p>To get started, authenticate with Facebook.</p>
        </header>
        <Facebook></Facebook>
      </div>
    );
  }
}

export default App;
