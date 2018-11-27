import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <h1>Schuster Art Consultancy</h1>
        </header>
      </div>
    );
  }
}

export default App;
