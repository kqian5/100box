import React, { Component } from 'react';
import { Grid } from 'grid';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>100 box</h1>
        <p>Fill numbers 1 - 100 in as many boxes. Must skip 2 cells horizontally/vertically, and 1 cell diagonally.</p>
      </div>
    );
  }
}

export default App;
