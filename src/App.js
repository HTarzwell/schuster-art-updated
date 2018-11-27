import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar'
import Carousel from './Carousel/Carousel'
import About from './About/About'
import Artists from './Artists/Artists'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Carousel />
        <About />
        <Artists />
        <header className="App-header">
          <h1>Schuster Art Consultancy</h1>
        </header>
      </div>
    );
  }
}

export default App;
