import React, { Component } from 'react';
import './App.css';
import About from './About/About'
import Artists from './Artists/Artists'
import Contact from './Contact/Contact'
import Favorites from './Favorites/Favorites'

class App extends Component {
  render() {
    return (
      <div className="App">

        <About />
        <Artists />
        <Contact />
        <Favorites />
        <header className="App-header">
          <h1>Schuster Art Consultancy</h1>
        </header>
      </div>
    );
  }
}

export default App;
